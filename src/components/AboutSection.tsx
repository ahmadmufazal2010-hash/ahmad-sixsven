import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const stats = [
    { icon: Code2, value: 'X-11', label: 'Kelas' },
    { icon: Video, value: 'MAN 1', label: 'Sekolah' },
    { icon: Coffee, value: '2010', label: 'Lahir' },
    { icon: Rocket, value: 'IPDN', label: 'Cita-cita' },
  ];

  return (
    <section
      id="about"
      className="
        relative py-20 md:py-32 overflow-hidden
        bg-gradient-to-br
        from-[#fdf4ff] via-[#f5f3ff] to-[#eef2ff]
        dark:from-[#0f0c29] dark:via-[#1a1a40] dark:to-[#000000]
        text-gray-800 dark:text-white
      "
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 14 }}
          className="absolute w-[400px] h-[400px] bg-purple-300/40 dark:bg-purple-500/25 blur-3xl rounded-full top-0 left-0"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ repeat: Infinity, duration: 16 }}
          className="absolute w-[350px] h-[350px] bg-pink-300/40 dark:bg-pink-500/20 blur-3xl rounded-full bottom-0 right-0"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-500 dark:text-purple-400 font-medium block mb-2">
            Tentang Aku 🎒
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Kenalan yuk 😆
          </h2>
          <div className="w-20 h-1 bg-purple-500 dark:bg-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* 📸 FOTO FIX */}
          <div className="relative w-fit mx-auto group">
            
            {/* Glow */}
            <div className="
              absolute inset-0
              bg-purple-400/40
              blur-3xl
              rounded-[40px]
              opacity-0 group-hover:opacity-100
              transition duration-500
            " />

            {/* Frame (TETAP DIAM) */}
            <div className="
              relative p-[6px]
              rounded-[30px]
              bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500
            ">
              
              {/* Inner container biar zoom ke dalam */}
              <div className="overflow-hidden rounded-[25px]">
                
                {/* FOTO YANG ZOOM */}
                <motion.img
                  src="/fotoahmad2.jpg"
                  alt="profile"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="
                    w-[320px] h-[420px] md:w-[380px] md:h-[500px]
                    object-cover
                  "
                />

              </div>
            </div>
          </div>

          {/* ✍️ TEXT */}
          <div className="space-y-6">

            <h3 className="text-2xl md:text-3xl font-bold">
              Halo! 👋
            </h3>

            <div
              onClick={() => setOpen1(!open1)}
              className="cursor-pointer p-4 rounded-xl border border-gray-300 dark:border-white/10 hover:bg-purple-100 dark:hover:bg-white/5 transition"
            >
              👤 Tentang Aku
            </div>

            <motion.div
              animate={{ height: open1 ? 'auto' : 0, opacity: open1 ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="pt-3 text-gray-600 dark:text-gray-300">
                Halo, aku Ahmad Mufazal 😄
              </p>
            </motion.div>

            <div
              onClick={() => setOpen2(!open2)}
              className="cursor-pointer p-4 rounded-xl border border-gray-300 dark:border-white/10 hover:bg-purple-100 dark:hover:bg-white/5 transition"
            >
              🎒 Kehidupan Sekolah
            </div>

            <motion.div
              animate={{ height: open2 ? 'auto' : 0, opacity: open2 ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="pt-3 text-gray-600 dark:text-gray-300">
                Aku sekolah di MAN 1 Banda Aceh 😆
              </p>
            </motion.div>

            <div
              onClick={() => setOpen3(!open3)}
              className="cursor-pointer p-4 rounded-xl border border-gray-300 dark:border-white/10 hover:bg-purple-100 dark:hover:bg-white/5 transition"
            >
              ⚽ Hobi & Kegiatan
            </div>

            <motion.div
              animate={{ height: open3 ? 'auto' : 0, opacity: open3 ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="pt-3 text-gray-600 dark:text-gray-300">
                Suka main bola ⚽
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}