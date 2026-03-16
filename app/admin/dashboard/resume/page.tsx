'use client'

import { useState, useEffect } from 'react'
import { FileText, Upload, Check, Terminal, ExternalLink } from 'lucide-react'

export default function ResumeAdmin() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch('/api/admin/resume').then(r => r.json()).then(d => setCurrentUrl(d.url))
  }, [])

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setSuccess(false)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/resume', { method: 'POST', body: fd })
    const { url } = await res.json()
    setCurrentUrl(url)
    setUploading(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-6">
        <Terminal size={16} /><span>./resume</span>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tighter">Resume</h1>
          <p className="text-zinc-500 font-mono text-xs mt-1">Upload your latest PDF resume</p>
        </div>
      </div>

      <div className="max-w-lg space-y-6">
        {/* Current resume */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Current Resume</p>
          {currentUrl ? (
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <FileText size={20} />
              <span className="text-sm font-mono">{currentUrl}</span>
              <ExternalLink size={14} />
            </a>
          ) : (
            <p className="text-zinc-600 text-sm font-mono">No resume uploaded yet</p>
          )}
        </div>

        {/* Upload */}
        <label className="flex flex-col items-center justify-center gap-3 p-10 rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-900/30 hover:border-orange-500/50 hover:bg-zinc-900/50 transition-all cursor-pointer">
          {success ? (
            <>
              <Check size={32} className="text-emerald-500" />
              <span className="text-emerald-500 font-mono text-sm">Uploaded successfully!</span>
            </>
          ) : (
            <>
              <Upload size={32} className={uploading ? 'text-orange-500 animate-bounce' : 'text-zinc-500'} />
              <span className="text-zinc-400 font-mono text-sm">
                {uploading ? 'Uploading...' : 'Click to upload PDF resume'}
              </span>
              <span className="text-zinc-600 font-mono text-xs">Replaces the existing file</span>
            </>
          )}
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleUpload}
            disabled={uploading}
          />
        </label>
      </div>
    </div>
  )
}
