import { motion } from 'framer-motion';

const subjects = {
  wajib: [
    { name: 'Matematika', level: 90 },
    { name: 'Bahasa Indonesia', level: 85 },
    { name: 'Bahasa Inggris', level: 88 },
    { name: 'PPKn', level: 80 },
  ],
  sains: [
    { name: 'Fisika', level: 78 },
    { name: 'Kimia', level: 75 },
    { name: 'Biologi', level: 82 },
  ],
  lainnya: [
    { name: 'Sejarah', level: 84 },
    { name: 'Geografi', level: 79 },
    { name: 'Seni Budaya', level: 87 },
    { name: 'Olahraga', level: 92 },
  ],
};

function SubjectBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="opacity-70">{level}%</span>
      </div>

      <div className="h-2 rounded-full bg-white/20 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2 }}
          className="
            h-full rounded-full
            bg-gradient-to-r from-violet-500 via-pink-500 to-indigo-500
            shadow-[0_0_12px_rgba(168,85,247,0.7)]
          "
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative py-20 md:py-32 overflow-hidden
        bg-gradient-to-br
        from-[#fff7ed] via-[#fdf2f8] to-[#eef2ff]
        dark:from-[#020617] dark:via-[#0f172a] dark:to-[#020617]
        text-gray-800 dark:text-white
        dark:saturate-150 dark:brightness-110
      "
    >
      {/* 🌌 AURORA BACKGROUND FIX */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Pink */}
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ repeat: Infinity, duration: 18 }}
          className="
            absolute w-[500px] h-[500px]
            bg-pink-400/60 dark:bg-pink-500/40
            blur-[140px]
            rounded-full
            top-[-120px] left-[-120px]
            mix-blend-lighten dark:mix-blend-screen
          "
        />

        {/* Indigo */}
        <motion.div
          animate={{ x: [0, -140, 0], y: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="
            absolute w-[500px] h-[500px]
            bg-indigo-400/60 dark:bg-indigo-500/40
            blur-[140px]
            rounded-full
            bottom-[-140px] right-[-140px]
            mix-blend-lighten dark:mix-blend-screen
          "
        />

        {/* Glow overlay */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="
            absolute inset-0
            bg-gradient-to-tr
            from-pink-500/10 via-transparent to-indigo-500/10
            dark:from-pink-500/20 dark:to-indigo-500/20
          "
        />
      </div>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 dark:text-pink-400 font-medium block mb-2">
            Pelajaran Sekolah 📚
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Kemampuan Akademik
          </h2>

          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* WAJIB */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              p-6 rounded-2xl
              backdrop-blur-xl
              bg-white/60 dark:bg-white/5
              border border-white/40 dark:border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.05)]
              hover:scale-[1.03] transition
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📖</span>
              <h3 className="font-bold text-lg">Pelajaran Wajib</h3>
            </div>

            <div className="space-y-4">
              {subjects.wajib.map((s, i) => (
                <SubjectBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* SAINS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              p-6 rounded-2xl
              backdrop-blur-xl
              bg-white/60 dark:bg-white/5
              border border-white/40 dark:border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.05)]
              hover:scale-[1.03] transition
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🔬</span>
              <h3 className="font-bold text-lg">Sains</h3>
            </div>

            <div className="space-y-4">
              {subjects.sains.map((s, i) => (
                <SubjectBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* LAINNYA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              p-6 rounded-2xl
              backdrop-blur-xl
              bg-white/60 dark:bg-white/5
              border border-white/40 dark:border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.05)]
              hover:scale-[1.03] transition
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🎭</span>
              <h3 className="font-bold text-lg">Lainnya</h3>
            </div>

            <div className="space-y-4">
              {subjects.lainnya.map((s, i) => (
                <SubjectBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}