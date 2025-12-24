'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Terminal, Sparkles } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })

      const result = await response.json()
      if (result.success) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative group">
      {/* Decorative background glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
        
        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                <CheckCircle size={20} />
                <div className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  Transmission successful. I'll respond shortly.
                </div>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3">
                <AlertCircle size={20} className="text-red-500" />
                <div className="text-sm font-medium text-red-800 dark:text-red-200">
                  Connection failed. Please try again.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="access_key" value="1b2c6669-deb1-4455-8f3b-ea8a6fb14343" />
          <input type="hidden" name="subject" value="New Transmission from Portfolio" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">visitor_name</label>
              <input
                type="text"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white disabled:opacity-50"
                placeholder="Nishiraj Singh"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">visitor_email</label>
              <input
                type="email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white disabled:opacity-50"
                placeholder="hello@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">message_subject</label>
            <input
              type="text"
              name="subject_line"
              disabled={isSubmitting}
              className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white disabled:opacity-50"
              placeholder="Collaboration Opportunity"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">message_body</label>
            <textarea
              name="message"
              rows={4}
              required
              disabled={isSubmitting}
              className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-zinc-900 dark:text-white resize-none disabled:opacity-50"
              placeholder="Tell me about your project..."
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
            
            <div className="relative flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="font-mono tracking-tighter">INITIATING...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Execute Send</span>
                  <Terminal size={16} className="opacity-50" />
                </>
              )}
            </div>
          </motion.button>

          <div className="flex items-center justify-center gap-4 pt-4">
             <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
             <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-orange-500" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">End of Form</span>
             </div>
             <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
          </div>
        </form>
      </div>
    </div>
  )
}