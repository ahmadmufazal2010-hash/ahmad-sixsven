import { motion } from 'framer-motion';
import { Github, Youtube, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ahmadmufazal2010-hash/ahmad-sixsven.git',
      label: 'GitHub',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/',
      label: 'YouTube',
    },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-border
        text-foreground

        /* 🌈 LIGHT MODE SOFT */
        bg-gradient-to-br from-[#f7f7ff] via-[#eef6ff] to-[#f5f3ff]

        /* 🌙 DARK MODE SOFT */
        dark:from-[#050816]
        dark:via-[#0b1020]
        dark:to-[#0a0a14]
      "
    >

      {/* 🌫️ SOFT GLOW (DIFF STYLE DARI HERO) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-pink-300/20 dark:bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-blue-300/20 dark:bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <div className="p-2 rounded-full bg-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            <span className="text-sm md:text-base">
              © {currentYear} • Made with
            </span>

            <Heart className="w-4 h-4 text-red-500 animate-pulse" />

            <span className="text-sm md:text-base font-medium text-foreground">
              by Ahmad Mufazal
            </span>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="
                  p-3 rounded-full
                  bg-white/60 dark:bg-white/5
                  backdrop-blur-md
                  border border-border
                  text-muted-foreground
                  hover:text-foreground
                  hover:bg-primary/10
                  transition
                "
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-xs text-muted-foreground"
        >
          <p>
            Built with React ⚡ Tailwind ✨ Framer Motion 🚀
          </p>
        </motion.div>

      </div>
    </footer>
  );
}