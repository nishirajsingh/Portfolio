'use client'

import { useState, useEffect } from 'react'
import { Star, Plus, Pencil, Trash2, X, Check, Terminal } from 'lucide-react'
import ImageUpload from '../image-upload'

const EMPTY = { title: '', issuer: '', date: '', image: '' }

export default function BadgesAdmin() {
  const [items, setItems] = useState<any[]>([])
  const [form, setForm] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => { fetch('/api/admin/badges').then(r => r.json()).then(setItems) }, [])

  async function save() {
    setLoading(true)
    const method = form.id ? 'PUT' : 'POST'
    const res = await fetch('/api/admin/badges', {
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
    if (!confirm('Delete this badge?')) return
    await fetch('/api/admin/badges', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-6">
        <Terminal size={16} /><span>./badges</span>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tighter">Badges</h1>
          <p className="text-zinc-500 font-mono text-xs mt-1">{items.length} total</p>
        </div>
        <button onClick={() => setForm({ ...EMPTY })} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-2xl text-sm font-bold transition-colors">
          <Plus size={16} /> Add New
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 group hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500"><Star size={16} /></div>
              <div>
                <p className="text-white font-semibold text-xs leading-tight">{item.title}</p>
                <p className="text-zinc-500 text-[10px] font-mono">{item.issuer} · {item.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setForm({ ...item })} className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Pencil size={13} /></button>
              <button onClick={() => remove(item.id)} className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all"><Trash2 size={13} /></button>
            </div>
          </div>
        ))}
      </div>

      {form && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">{form.id ? 'Edit' : 'New'} Badge</h2>
              <button onClick={() => setForm(null)} className="text-zinc-500 hover:text-white transition-colors"><X size={20} /></button>
            </div>

            <div className="space-y-4">
              {[
                { key: 'title', label: 'Title', placeholder: 'AWS Cloud Quest' },
                { key: 'issuer', label: 'Issuer', placeholder: 'AWS' },
                { key: 'date', label: 'Date', placeholder: 'Jan 2025' },
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
              <ImageUpload value={form.image || ''} onChange={url => setForm({ ...form, image: url })} uploadType="badges" label="Badge Image" />
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
