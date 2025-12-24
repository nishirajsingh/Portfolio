'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, Terminal, Sparkles } from 'lucide-react'

export function EnhancedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const result = await response.json()
      
      if (result.success === true || result.status === 'success') {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || 'Form submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Network error occurred')
    } finally {
      setIsSubmitting(false)
    }
  } // <-- Ensure this closing brace exists

  return (
    <div className="relative group">
      {/* Decorative background glow to match the new UI */}
      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
        
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-orange-500" />
            <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.3em]">Transmission Port</span>
          </div>
          <h3 className="text-3xl font-bold dark:text-white tracking-tighter">Send a Message</h3>
        </div>

        {/* Console Status Area */}
        <AnimatePresence mode="wait">
          {submitStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 overflow-hidden"
            >
              {submitStatus === 'success' ? (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-tight">Status: Sent Successfully</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">Data packets received. I will respond within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-red-800 dark:text-red-200 uppercase tracking-tight">Status: Sync Failed</p>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-1">{errorMessage || 'Please re-verify connection and try again.'}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="1b2c6669-deb1-4455-8f3b-ea8a6fb14343" />
          <input type="hidden" name="subject" value="New Transmission from Portfolio" />
          <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1">sender_identity</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white disabled:opacity-50 font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1">return_address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white disabled:opacity-50 font-medium"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1">subject_header</label>
            <input
              type="text"
              name="subject_line"
              placeholder="Collaboration / Project / Question"
              disabled={isSubmitting}
              className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white disabled:opacity-50 font-medium"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1">message_payload</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message here..."
              required
              disabled={isSubmitting}
              className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white resize-none disabled:opacity-50 font-medium"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden px-8 py-4 bg-zinc-900 dark:bg-orange-500 text-white rounded-2xl font-bold shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={!isSubmitting ? { y: -2 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="relative flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-mono">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Pushing Data...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Execute Send</span>
                  <Terminal size={14} className="opacity-50" />
                </>
              )}
            </div>
          </motion.button>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1 pt-2">
             <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SECURE_CONNECTION: OK
             </div>
             <span>v2.0.25_ENCRYPTED</span>
          </div>
        </form>
      </div>
    </div>
  )
}