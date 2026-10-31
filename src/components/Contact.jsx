import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Github, 
  Linkedin, 
  CheckCircle2,
  Clock,
  ArrowUpRight,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export default function Contact({ onShowToast }) {
  const { personal } = resumeData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onShowToast('Email copied to clipboard!');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onShowToast('Phone number copied to clipboard!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
      onShowToast('Message sent! Faiz will get back to you shortly.');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070102] border-t border-red-950/40">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-red-700/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Something Scalable</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text-red">Touch</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in backend engineering, distributed systems, microservice development, or full-stack opportunities? Reach out directly or leave a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & 1-Click Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-xl glass-card-hover group">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-red-950/70 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="px-3 py-1.5 rounded-xl bg-[#140306] hover:bg-[#20050a] text-slate-300 border border-red-950 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-red-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mt-4">
                <span className="text-xs font-mono text-slate-400">Direct Inquiries</span>
                <h4 className="font-mono font-semibold text-slate-100 text-sm sm:text-base mt-0.5 break-all">
                  {personal.email}
                </h4>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-red-400 hover:text-red-300 mt-2"
                >
                  <span>Compose Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-xl glass-card-hover group">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-rose-950/70 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="px-3 py-1.5 rounded-xl bg-[#140306] hover:bg-[#20050a] text-slate-300 border border-red-950 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-red-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mt-4">
                <span className="text-xs font-mono text-slate-400">Call / WhatsApp</span>
                <h4 className="font-mono font-semibold text-slate-100 text-sm sm:text-base mt-0.5">
                  {personal.phone}
                </h4>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 mt-2"
                >
                  <span>Make Phone Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Relocation Card */}
            <div className="p-6 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-950/70 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    Location &amp; Mobility
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">{personal.location}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                Available for on-site roles in Nagpur, Pune, Bangalore, Hyderabad, Mumbai, or fully remote positions globally.
              </p>
            </div>

            {/* Social Links with Hover Movement */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#120204] border border-red-950/80 hover:border-red-500/50 text-slate-300 hover:text-white text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4 text-red-400" />
                <span>GitHub Profile</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#120204] border border-red-950/80 hover:border-red-500/50 text-slate-300 hover:text-white text-xs font-mono transition-all"
              >
                <Linkedin className="w-4 h-4 text-rose-400" />
                <span>LinkedIn Profile</span>
              </motion.a>
            </div>

          </div>

          {/* Right Column: Contact Form with Framer Motion Magnetic Button & Focus Glow */}
          <div className="lg:col-span-7 bg-[#0e0305] p-6 sm:p-8 rounded-3xl border border-red-950/80 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-red-950/80 border border-red-500 flex items-center justify-center text-red-400 mb-4 shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                  >
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Message Dispatched!
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-md">
                    Thank you for reaching out, {formData.name}. Faiz will review your note and respond to <span className="text-red-400 font-mono">{formData.email}</span> shortly.
                  </p>
                  <motion.button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-red-600 hover:bg-red-500 transition-all cursor-pointer shadow-lg shadow-red-600/30"
                  >
                    Send Another Note
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-white">
                      Send a Direct Message
                    </h3>
                    <span className="text-xs font-mono text-red-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Quick Response
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080103] border border-red-950 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080103] border border-red-950 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineering Opportunity / Java Backend Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080103] border border-red-950 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, open role, or requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080103] border border-red-950 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Luminous Red Magnetic SEND MESSAGE Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 shadow-[0_0_25px_rgba(239,68,68,0.55)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting Note...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}