'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  Twitter, Send, ExternalLink, MessageSquare, 
  Sparkles, Terminal, Loader2, CheckCircle, AlertCircle 
} from 'lucide-react'

/* ---------------- DATA ---------------- */

const CONTACT_INFO = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'nishiraj.work@gmail.com', 
    href: 'mailto:nishiraj.work@gmail.com', 
    color: 'text-orange-500',
    bg: 'bg-orange-500/10' 
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    value: '+91 62684 74575', 
    href: 'tel:+916268474575', 
    color: 'text-amber-500',
    bg: 'bg-amber-500/10' 
  },
  { 
    icon: MapPin, 
    label: 'Location', 
    value: 'Vadodara, India', 
    href: '#', 
    color: 'text-orange-600',
    bg: 'bg-orange-600/10' 
  }
]

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nishirajsingh', color: 'hover:bg-zinc-800' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/', color: 'hover:bg-blue-600' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/nishirajpanwar', color: 'hover:bg-sky-500' }
]

/* ---------------- INTERNAL COMPONENTS ---------------- */

const ContactForm = () => {
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
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json' 
        },
        body: formData
      });
  
      // Check if the response is actually JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("API returned non-JSON response");
      }
  
      const result = await response.json();
  
      // Web3Forms specific success check
      if (response.ok && (result.success || result.status === "success")) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error("Submission Error Details:", result);
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Transmission failed at server.');
      }
    } catch (err) {
      console.error("Network/Client Error:", err);
      setSubmitStatus('error');
      setErrorMessage('Sync error: Data sent but response unreadable.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="access_key" value="1b2c6669-deb1-4455-8f3b-ea8a6fb14343" />
      <input type="hidden" name="subject" value="New Transmission from Portfolio" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <AnimatePresence mode="wait">
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 overflow-hidden"
          >
            {submitStatus === 'success' ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-500">
                <CheckCircle size={18} />
                <span className="text-xs font-mono">SUCCESS: Packets Delivered</span>
              </div>
            ) : (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500">
                <AlertCircle size={18} />
                <span className="text-xs font-mono">ERROR: {errorMessage}</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">sender_id</label>
          <input
            type="text"
            name="name"
            required
            disabled={isSubmitting}
            className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 transition-all text-zinc-900 dark:text-white disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">return_addr</label>
          <input
            type="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 transition-all text-zinc-900 dark:text-white disabled:opacity-50"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">payload_body</label>
        <textarea
          name="message"
          rows={4}
          required
          disabled={isSubmitting}
          className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-orange-500/50 transition-all text-zinc-900 dark:text-white resize-none disabled:opacity-50"
          placeholder="Enter message details..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden px-8 py-4 bg-zinc-900 dark:bg-orange-500 text-white rounded-2xl font-bold shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={!isSubmitting ? { y: -2 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        <div className="relative flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="font-mono text-xs uppercase tracking-widest">Encrypting...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span className="uppercase tracking-widest text-xs">Execute Transmission</span>
            </>
          )}
        </div>
      </motion.button>
    </form>
  )
}

/* ---------------- MAIN EXPORT ---------------- */

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#030303]">
      {/* Background System Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4"
          >
            <Terminal size={16} /> <span>./communication-channel</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]"
          >
            Let's build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 italic">
              something great.
            </span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Bento Cards */}
          <div className="lg:col-span-5 space-y-4">
            {CONTACT_INFO.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl ${info.bg} ${info.color} group-hover:scale-110 transition-transform`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">{info.label}</p>
                    <p className="text-zinc-900 dark:text-zinc-200 font-bold text-lg">{info.value}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all text-orange-500">
                  <ExternalLink size={18} />
                </div>
              </motion.a>
            ))}

            {/* Socials Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-8 rounded-[2.5rem] bg-zinc-900 dark:bg-orange-600 text-white flex flex-col justify-between h-56 overflow-hidden shadow-2xl shadow-orange-500/20"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                <MessageSquare size={120} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold flex items-center gap-2 mb-2">
                  Connect <Sparkles size={20} />
                </h3>
                <p className="text-white/70 text-sm max-w-[200px]">Find me on digital platforms and social networks.</p>
              </div>

              <div className="flex gap-4 relative z-10">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent">
              <div className="bg-white dark:bg-zinc-950 rounded-[2.9rem] p-8 md:p-12 shadow-2xl">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-orange-500" />
                    <span className="text-orange-500 font-mono text-xs uppercase tracking-tighter">Direct Transmission</span>
                  </div>
                  <h3 className="text-3xl font-bold dark:text-white mb-3 tracking-tighter">Send a Message</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                    Fill out the form below and I'll respond via the encrypted channel within 24 hours.
                  </p>
                </div>
                
                {/* Form Integrated Directly */}
                <ContactForm />
                
                <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    SYSTEMS READY
                  </div>
                  <span>ENCRYPTED_CHANNEL_ENABLED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}