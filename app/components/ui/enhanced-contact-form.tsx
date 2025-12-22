'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function EnhancedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Auto-hide success/error messages after 5 seconds
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
    
    // Convert FormData to JSON for better debugging
    const formObject = Object.fromEntries(formData.entries())
    console.log('Submitting form data:', formObject)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Full Web3Forms Response:', result)
      
      // Check for success in the response
      if (result.success === true || result.status === 'success') {
        console.log('✅ Form submitted successfully!')
        setSubmitStatus('success')
        form.reset()
      } else {
        console.error('❌ Form submission failed:', result)
        setSubmitStatus('error')
        setErrorMessage(result.message || 'Form submission failed')
      }
    } catch (error) {
      console.error('❌ Network/Parse error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Network error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="liquid-glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
      
      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700 rounded-xl flex items-start gap-3 shadow-lg"
        >
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-800 dark:text-green-200">
              Message sent successfully! ✅
            </p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">
              Thank you for reaching out. I'll get back to you soon.
            </p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-xl flex items-start gap-3 shadow-lg"
        >
          <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-800 dark:text-red-200">
              Failed to send message ❌
            </p>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
              {errorMessage || 'Please try again or contact me directly via email.'}
            </p>
          </div>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Web3Forms Configuration */}
        <input type="hidden" name="access_key" value="1b2c6669-deb1-4455-8f3b-ea8a6fb14343" />
        <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
        <input type="hidden" name="from_name" value="Portfolio Contact Form" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        
        <input
          type="text"
          name="subject_line"
          placeholder="Subject"
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        
        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        
        {/* Honeypot field for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </div>
  )
}