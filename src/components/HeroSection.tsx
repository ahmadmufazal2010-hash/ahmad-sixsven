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
        bg-gradient-to-br 
        from-slate-50 via-slate-100 to-slate-200
        dark:from-[#020617] dark:via-[#0b1220] dark:to-[#020617]
        text-slate-900 dark:text-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="
            absolute top-[-180px] left-1/2 -translate-x-1/2
            w-[750px] h-[750px]
            bg-emerald-300/20 dark:bg-emerald-500/10
            blur-[150px] rounded-full
          "
        />

        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 14 }}
          className="
            absolute bottom-[-180px] right-1/2 translate-x-1/2
            w-[650px] h-[650px]
            bg-indigo-300/20 dark:bg-indigo-500/10
            blur-[150px] rounded-full
          "
        />
      </div>

      <ThreeScene />

      {/* CENTER FIX */}
      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="
              absolute inset-0 rounded-[30px]
              bg-gradient-to-br from-emerald-200/40 to-indigo-300/40
              dark:from-emerald-500/10 dark:to-indigo-500/10
              blur-2xl
            " />

            <img
              src="/fotoahmad1.jpg"
              alt="profile"
              className="
                relative
                w-[230px] h-[340px] md:w-[270px] md:h-[380px]
                object-cover rounded-[24px]
                border border-white/20 dark:border-white/10
                shadow-lg
              "
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl flex flex-col items-center md:items-start"
          >
            <span className="
              inline-block mb-4 px-4 py-2 text-sm rounded-full
              bg-white/60 dark:bg-white/5
              border border-slate-200 dark:border-white/10
              text-slate-700 dark:text-slate-300
              backdrop-blur-md
            ">
              👋 Welcome to My Portfolio
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="block text-slate-900 dark:text-white">
                Hi I'M
              </span>

              <span className="
                bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500
                bg-clip-text text-transparent
              ">
                Ahmad Mufazal💫
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Saya seorang pelajar yang sedang belajar membangun website modern,
              UI design, dan eksplorasi teknologi web 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={() => scrollTo('#projects')}
                className="
                  rounded-full px-6
                  bg-slate-900 dark:bg-white
                  text-white dark:text-black
                  hover:scale-105 transition
                "
              >
                🚀 Lihat Project
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollTo('#contact')}
                className="
                  rounded-full px-6
                  border-slate-300 dark:border-white/20
                  hover:bg-slate-100 dark:hover:bg-white/10
                "
              >
                📩 Hubungi Saya
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="
                  p-3 rounded-full
                  border border-slate-300 dark:border-white/10
                  bg-white/60 dark:bg-white/5
                  hover:scale-110 transition
                "
              >
                <Github className="text-slate-800 dark:text-white" />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                className="
                  p-3 rounded-full
                  border border-slate-300 dark:border-white/10
                  bg-white/60 dark:bg-white/5
                  hover:scale-110 transition
                "
              >
                <Youtube className="text-slate-800 dark:text-white" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SCROLL */}
      <motion.div
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="w-6 h-6 text-slate-500 dark:text-white/70" />
      </motion.div>
    </section>
  );
}