'use client'

import { useState, useEffect, useRef } from 'react'
import { Award, Plus, Pencil, Trash2, X, Check, Terminal, GripVertical } from 'lucide-react'
import ImageUpload from '../image-upload'

const EMPTY = { title: '', issuer: '', date: '', expiry: '', credentialId: '', link: '#', status: 'completed', skills: '', image: '' }

export default function CertificationsAdmin() {
  const [items, setItems] = useState<any[]>([])
  const [form, setForm] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const dragItem = useRef<number | null>(null)
  const dragOver = useRef<number | null>(null)

  useEffect(() => { fetch('/api/admin/certifications').then(r => r.json()).then(setItems) }, [])

  function openNew() { setForm({ ...EMPTY }) }
  function openEdit(item: any) { setForm({ ...item, skills: item.skills.join(', ') }) }
  function closeForm() { setForm(null) }

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
    await fetch('/api/admin/certifications', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: reordered.map(i => i.id) }) })
  }

  async function save() {
    setLoading(true)
    const payload = { ...form, skills: form.skills.split(',').map((s: string) => s.trim()).filter(Boolean) }
    const method = form.id ? 'PUT' : 'POST'
    const res = await fetch('/api/admin/certifications', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const saved = await res.json()
    setItems(prev => form.id ? prev.map(i => i.id === saved.id ? saved : i) : [...prev, saved])
    setLoading(false)
    closeForm()
  }

  async function remove(id: string) {
    if (!confirm('Delete this certification?')) return
    await fetch('/api/admin/certifications', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-6">
        <Terminal size={16} /><span>./certifications</span>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tighter">Certifications</h1>
          <p className="text-zinc-500 font-mono text-xs mt-1">{items.length} total</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl text-sm font-bold transition-colors">
          <Plus size={16} /> Add New
        </button>
      </div>

      {/* List */}
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
              <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500"><Award size={18} /></div>
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-zinc-500 text-xs font-mono">{item.issuer} · {item.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => openEdit(item)} className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Pencil size={15} /></button>
              <button onClick={() => remove(item.id)} className="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all"><Trash2 size={15} /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {form && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">{form.id ? 'Edit' : 'New'} Certification</h2>
              <button onClick={closeForm} className="text-zinc-500 hover:text-white transition-colors"><X size={20} /></button>
            </div>

            <div className="space-y-4">
              {[
                { key: 'title', label: 'Title', placeholder: 'AWS Solutions Architect' },
                { key: 'issuer', label: 'Issuer', placeholder: 'Amazon Web Services' },
                { key: 'date', label: 'Date', placeholder: 'Jan 2025' },
                { key: 'expiry', label: 'Expiry (optional)', placeholder: 'Jan 2028' },
                { key: 'credentialId', label: 'Credential ID (optional)', placeholder: '123456' },
                { key: 'link', label: 'Credential URL', placeholder: 'https://...' },
                { key: 'skills', label: 'Skills (comma separated)', placeholder: 'AWS, Cloud, DevOps' },
              ].map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">{label}</label>
                  <input
                    value={form[key] || ''}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              ))}

              <ImageUpload
                value={form.image || ''}
                onChange={url => setForm({ ...form, image: url })}
                uploadType="certs"
                label="Certificate Image"
              />
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={closeForm} className="flex-1 py-3 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white text-sm font-mono transition-colors">Cancel</button>
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
