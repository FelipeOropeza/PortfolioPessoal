import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin, Send, Radio, CheckCircle2, Copy } from "lucide-react";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = "felipe2006.co@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github size={24} />, url: "https://github.com/FelipeOropeza", color: "hover:text-white" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, url: "#", color: "hover:text-blue-400" },
    { name: "Email", icon: <Mail size={24} />, url: `mailto:${email}`, color: "hover:text-cyan-400", isEmail: true }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            <Radio size={14} className="animate-pulse" />
            <span>ESTABLISHING_CONNECTION</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-cyber p-10 rounded-3xl border border-white/10 flex flex-col justify-between h-full"
          >
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-cyan-400" />
                {t("contact.direct_comm")}
              </h3>
              
              <div className="space-y-6">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target={link.isEmail ? undefined : "_blank"}
                    rel={link.isEmail ? undefined : "noopener noreferrer"}
                    className={`flex items-center gap-4 text-gray-400 ${link.color} transition-all duration-300 group`}
                  >
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-current group-hover:bg-white/10 transition-all">
                      {link.icon}
                    </div>
                    <span className="font-bold tracking-widest text-sm uppercase">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <button 
              onClick={handleCopy}
              className="mt-12 p-1 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3 group/copy hover:border-cyan-400/30 transition-all overflow-hidden"
            >
              <div className="bg-white/10 p-3 rounded-xl text-gray-400 group-hover/copy:text-cyan-400 transition-colors">
                {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              </div>
              <div className="flex flex-col items-start pr-6">
                <span className="text-[10px] uppercase font-bold text-gray-600 tracking-widest">{t("contact.status")}</span>
                <span className="text-sm font-mono text-gray-300">{email}</span>
              </div>
            </button>
          </motion.div>

          {/* Master Email Button - Interactive */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative h-full glass-cyber p-10 rounded-3xl border border-cyan-400/20 flex flex-col items-center justify-center text-center gap-6 overflow-hidden">
              {/* Floating Icons Decor */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center"
              >
                <div className="w-[150%] h-[1px] bg-cyan-400 rotate-45" />
                <div className="w-[150%] h-[1px] bg-cyan-400 -rotate-45" />
              </motion.div>

              <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-400/20 mb-4 animate-bounce">
                <Send size={32} />
              </div>
              
              <h4 className="text-2xl font-black text-white uppercase italic z-10">{t("contact.ready_title")}</h4>
              <p className="text-gray-400 text-sm px-6 z-10">
                {t("contact.ready_text")}
              </p>
              
              <button
                onClick={handleCopy}
                className="relative mt-4 px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-cyan-400 hover:text-white transition-all shadow-2xl z-10 active:scale-95 group/btn"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span 
                      key="copied"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} /> COPIED_TO_CLIPBOARD
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="send"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      COPY_EMAIL_SYSTEM()
                    </motion.span>
                  )}
                </AnimatePresence>
                {!copied && (
                   <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] opacity-30 group-hover/btn:opacity-100">Click to Copy</span>
                )}
              </button>

              <a 
                href={`mailto:${email}`}
                className="text-[10px] text-gray-500 uppercase font-black hover:text-cyan-400 transition-colors z-10"
              >
                Try mailto: link instead
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
           <p className="text-[10px] font-bold uppercase tracking-widest">
             {t("contact.footer_rights")}
           </p>
           <p className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
             {t("contact.footer_built")} <div className="w-2 h-2 rounded-full bg-cyan-400" />
           </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
