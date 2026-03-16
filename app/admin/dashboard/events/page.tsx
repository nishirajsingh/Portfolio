'use client'

import { useState, useEffect, useRef } from 'react'
import { Camera, Plus, Pencil, Trash2, X, Check, Terminal, Upload, GripVertical } from 'lucide-react'
import Image from 'next/image'

const SIZES = ['small', 'medium', 'large']
const TYPES = ['In-Person', 'Online', 'Hybrid']
const EMPTY = { title: '', date: '', location: '', type: 'In-Person', size: 'small', images: [] as string[] }

export default function EventsAdmin() {
  const [items, setItems] = useState<any[]>([])
  const [form, setForm] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const dragItem = useRef<number | null>(null)
  const dragOver = useRef<number | null>(null)

  useEffect(() => { fetch('/api/admin/events').then(r => r.json()).then(setItems) }, [])

  function onDragStart(i: number) { dragItem.current = i }
  function onDragEnter(i: number) { dragOver.current = i }
  async function onDragEnd() {
    if (dragItem.current === null || dragOver.current === null || dragItem.current === dragOver.current) return
    const reordered = [...items]
    const [moved] = reordered.splice(dragItem.current, 1)
    reordered.splice(dragOver.current, 0, moved)
    dragItem.current = null
    dragOver.current = null
    setItems(reordered)
    await fetch('/api/admin/events', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: reordered.map(i => i.id) }) })
  }

  async function uploadImages(files: FileList, eventSlug: string) {
    setUploading(true)
    const urls: string[] = []
    for (const file of Array.from(files)) {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('type', `events/${eventSlug}`)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const { url } = await res.json()
      urls.push(url)
    }
    setUploading(false)
    return urls
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return
    const slug = form.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'event'
    const urls = await uploadImages(e.target.files, slug)
    setForm((prev: any) => ({ ...prev, images: [...(prev.images || []), ...urls] }))
  }

  function removeImage(idx: number) {
    setForm((prev: any) => ({ ...prev, images: prev.images.filter((_: any, i: number) => i !== idx) }))
  }

  async function save() {
    setLoading(true)
    const method = form.id ? 'PUT' : 'POST'
    const res = await fetch('/api/admin/events', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const saved = await res.json()
    setItems(prev => form.id ? prev.map(i => i.id === saved.id ? saved : i) : [...prev, saved])
    setLoading(false)
    setForm(null)
  }

  async function remove(id: string) {
    if (!confirm('Delete this event?')) return
    await fetch('/api/admin/events', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-6">
        <Terminal size={16} /><span>./events</span>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tighter">Events</h1>
          <p className="text-zinc-500 font-mono text-xs mt-1">{items.length} total</p>
        </div>
        <button onClick={() => setForm({ ...EMPTY })} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl text-sm font-bold transition-colors">
          <Plus size={16} /> Add New
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => onDragStart(idx)}
            onDragEnter={() => onDragEnter(idx)}
            onDragEnd={onDragEnd}
            onDragOver={e => e.preventDefault()}
            className="flex items-center justify-between p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 group hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center gap-4">
              <GripVertical size={16} className="text-zinc-600 shrink-0" />
              {item.images?.[0] ? (
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-zinc-700 shrink-0">
                  <Image src={item.images[0]} alt="" fill className="object-cover" />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Camera size={20} />
                </div>
              )}
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-zinc-500 text-xs font-mono">{item.date} · {item.location} · {item.images?.length || 0} photos</p>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setForm({ ...item })} className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Pencil size={15} /></button>
              <button onClick={() => remove(item.id)} className="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all"><Trash2 size={15} /></button>
            </div>
          </div>
        ))}
      </div>

      {form && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">{form.id ? 'Edit' : 'New'} Event</h2>
              <button onClick={() => setForm(null)} className="text-zinc-500 hover:text-white transition-colors"><X size={20} /></button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">Title</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="GDG DevFest 2025" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">Date</label>
                  <input value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} placeholder="5 Oct 2025" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">Location</label>
                  <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="Baroda" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'type', label: 'Type', options: TYPES },
                  { key: 'size', label: 'Card Size', options: SIZES },
                ].map(({ key, label, options }) => (
                  <div key={key}>
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">{label}</label>
                    <select value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors">
                      {options.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              {/* Images */}
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">Photos</label>
                <label className="flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-zinc-700 bg-zinc-800/50 text-zinc-400 text-xs font-mono cursor-pointer hover:border-orange-500/50 hover:text-zinc-300 transition-colors w-full justify-center">
                  <Upload size={14} />
                  {uploading ? 'Uploading...' : 'Upload photos (select multiple)'}
                  <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} disabled={uploading || !form.title} />
                </label>
                {!form.title && <p className="text-zinc-600 text-[10px] font-mono mt-1">Enter a title first — it's used as the folder name</p>}

                {form.images?.length > 0 && (
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    {form.images.map((img: string, i: number) => (
                      <div key={i} className="relative group/img">
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-zinc-700">
                          <Image src={img} alt="" fill className="object-cover" />
                        </div>
                        <button
                          onClick={() => removeImage(i)}
                          className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover/img:opacity-100 transition-opacity"
                        >
                          <X size={10} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setForm(null)} className="flex-1 py-3 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white text-sm font-mono transition-colors">Cancel</button>
              <button onClick={save} disabled={loading} className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-bold transition-colors flex items-center justify-center gap-2">
                <Check size={16} />{loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
