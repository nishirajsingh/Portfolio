'use client'

import { useState, useEffect, useRef } from 'react'
import { FolderOpen, Plus, Pencil, Trash2, X, Check, Terminal, GripVertical } from 'lucide-react'

const ICONS = ['Cloud', 'Brain', 'Server', 'Sparkles', 'Code', 'Globe', 'Database', 'Shield']
const SIZES = ['small', 'medium', 'large']
const STATUSES = ['Coming Soon', 'Live', 'In Progress', 'Archived']
const EMPTY = { title: '', description: '', tech: '', icon: 'Code', status: 'Coming Soon', size: 'small', liveUrl: '', githubUrl: '' }

export default function ProjectsAdmin() {
  const [items, setItems] = useState<any[]>([])
  const [form, setForm] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const dragItem = useRef<number | null>(null)
  const dragOver = useRef<number | null>(null)

  useEffect(() => { fetch('/api/admin/projects').then(r => r.json()).then(setItems) }, [])

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
    await fetch('/api/admin/projects', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: reordered.map(i => i.id) }) })
  }

  async function save() {
    setLoading(true)
    const payload = { ...form, tech: typeof form.tech === 'string' ? form.tech.split(',').map((s: string) => s.trim()).filter(Boolean) : form.tech }
    const method = form.id ? 'PUT' : 'POST'
    const res = await fetch('/api/admin/projects', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const saved = await res.json()
    setItems(prev => form.id ? prev.map(i => i.id === saved.id ? saved : i) : [...prev, saved])
    setLoading(false)
    setForm(null)
  }

  async function remove(id: string) {
    if (!confirm('Delete this project?')) return
    await fetch('/api/admin/projects', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function openEdit(item: any) {
    setForm({ ...item, tech: Array.isArray(item.tech) ? item.tech.join(', ') : item.tech })
  }

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-6">
        <Terminal size={16} /><span>./projects</span>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tighter">Projects</h1>
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
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500"><FolderOpen size={18} /></div>
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full">{item.status}</span>
                  <span className="text-zinc-600 text-[10px] font-mono">{Array.isArray(item.tech) ? item.tech.join(', ') : item.tech}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => openEdit(item)} className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Pencil size={15} /></button>
              <button onClick={() => remove(item.id)} className="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all"><Trash2 size={15} /></button>
            </div>
          </div>
        ))}
      </div>

      {form && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">{form.id ? 'Edit' : 'New'} Project</h2>
              <button onClick={() => setForm(null)} className="text-zinc-500 hover:text-white transition-colors"><X size={20} /></button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">Title</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="My Awesome Project" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">Description</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} placeholder="What does this project do?" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors resize-none" />
              </div>
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">Tech Stack (comma separated)</label>
                <input value={form.tech} onChange={e => setForm({ ...form, tech: e.target.value })} placeholder="Next.js, TypeScript, AWS" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'icon', label: 'Icon', options: ICONS },
                  { key: 'status', label: 'Status', options: STATUSES },
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
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">Live URL</label>
                <input value={form.liveUrl} onChange={e => setForm({ ...form, liveUrl: e.target.value })} placeholder="https://myproject.com" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">GitHub URL</label>
                <input value={form.githubUrl} onChange={e => setForm({ ...form, githubUrl: e.target.value })} placeholder="https://github.com/..." className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors" />
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
