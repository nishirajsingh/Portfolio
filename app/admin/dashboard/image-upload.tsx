'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Upload, X } from 'lucide-react'

interface Props {
  value: string
  onChange: (url: string) => void
  uploadType: string   // e.g. 'certs' or 'events/devfest-2025'
  label?: string
}

export default function ImageUpload({ value, onChange, uploadType, label = 'Image' }: Props) {
  const [uploading, setUploading] = useState(false)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    fd.append('type', uploadType)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const { url } = await res.json()
    onChange(url)
    setUploading(false)
  }

  return (
    <div className="space-y-2">
      <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{label}</label>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-mono cursor-pointer hover:border-orange-500/50 transition-colors">
          <Upload size={14} />
          {uploading ? 'Uploading...' : 'Upload'}
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={uploading} />
        </label>
        {value && (
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-zinc-700">
              <Image src={value} alt="" fill className="object-cover" />
            </div>
            <button onClick={() => onChange('')} className="text-zinc-600 hover:text-red-400 transition-colors">
              <X size={14} />
            </button>
          </div>
        )}
        {!value && (
          <input
            type="text"
            placeholder="or paste URL"
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs font-mono focus:outline-none focus:border-orange-500 transition-colors"
            onChange={e => onChange(e.target.value)}
          />
        )}
      </div>
    </div>
  )
}
