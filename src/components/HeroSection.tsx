import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-white via-cyan-50 to-blue-100
        dark:from-[#020617] dark:via-[#0f172a] dark:to-[#020617]
        text-gray-900 dark:text-white
      "
    >
      {/* 🌈 GLOW + AURORA FIX */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Cyan Glow */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="
            absolute top-[-150px] left-1/2 -translate-x-1/2
            w-[700px] h-[700px]
            bg-cyan-400/40 dark:bg-cyan-500/30
            blur-[140px] rounded-full
            mix-blend-lighten dark:mix-blend-screen
          "
        />

        {/* Blue Glow */}
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="
            absolute bottom-[-150px] right-1/2 translate-x-1/2
            w-[600px] h-[600px]
            bg-blue-400/40 dark:bg-blue-500/30
            blur-[140px] rounded-full
            mix-blend-lighten dark:mix-blend-screen
          "
        />

        {/* Extra subtle gradient layer */}
        <div className="
          absolute inset-0
          bg-gradient-to-tr
          from-cyan-500/10 via-transparent to-blue-500/10
          dark:from-cyan-500/20 dark:to-blue-500/20
        " />
      </div>

      {/* 🌌 3D */}
      <ThreeScene />

      {/* 💻 CONTENT */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* 🧑 FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-cyan-400 to-blue-500 blur-2xl opacity-40" />

            <img
              src="/fotoahmad1.jpg"
              alt="profile"
              className="
                relative
                w-[220px] h-[320px] md:w-[260px] md:h-[360px]
                object-cover
                rounded-[25px]
                border border-white/30
                shadow-xl
              "
            />
          </motion.div>

          {/* ✍️ TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl text-center md:text-left"
          >
            <span className="
              inline-block mb-4 px-4 py-2 text-sm rounded-full
              bg-cyan-500/10 text-black
              border border-cyan-400/30
              dark:text-white
            ">
              👋 Welcome to My Portfolio
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="block text-black dark:text-white">Hi I'M</span>
              <span className="
                bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500
                bg-clip-text text-transparent
              ">
                Ahmad Mufazal💫
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Saya seorang pelajar yang sedang fokus mempelajari dunia
              pemrograman dan membangun website modern yang interaktif 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:justify-start justify-center">
              <Button
                onClick={() => scrollTo('#projects')}
                className="rounded-full px-6 bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition"
              >
                🚀 Lihat Project
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollTo('#contact')}
                className="rounded-full px-6 border-cyan-400/30 hover:bg-cyan-400/10"
              >
                📩 Hubungi Saya
              </Button>
            </div>

            <div className="flex gap-4 md:justify-start justify-center">
              <a
                href="https://github.com/ahmadmufazal2010-hash/ahmad-sixsven.git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 hover:scale-110 transition"
              >
                <Github className="text-cyan-500" />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 hover:scale-110 transition"
              >
                <Youtube className="text-cyan-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ⬇️ Scroll */}
      <motion.div
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="w-6 h-6 text-cyan-500" />
      </motion.div>
    </section>
  );
}