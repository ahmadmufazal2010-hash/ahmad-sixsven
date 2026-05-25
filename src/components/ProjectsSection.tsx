import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';

const movies = [
  {
    title: '🔥 Fast & Furious',
    description: 'Balapan, keluarga, dan aksi tanpa batas.',
    image: '/fast.webp',
    color: 'from-yellow-400 via-orange-500 to-red-500',
  },
  {
    title: '🦇 The Dark Knight',
    description: 'Batman vs Joker dengan strategi gila.',
    image: '/batman.webp',
    color: 'from-gray-700 via-gray-900 to-black',
  },
  {
    title: '🧠 Inception',
    description: 'Masuk ke dalam mimpi dan realita.',
    image: '/inception.webp',
    color: 'from-cyan-400 via-blue-500 to-indigo-600',
  },
  {
    title: '🚀 Interstellar',
    description: 'Eksplorasi luar angkasa penuh emosi.',
    image: '/interstellar.webp',
    color: 'from-indigo-400 via-purple-500 to-black',
  },
  {
    title: '🕷️ Spider-Man',
    description: 'Pahlawan muda penuh aksi.',
    image: '/spiderman.webp',
    color: 'from-red-500 via-pink-500 to-purple-500',
  },
  {
    title: '💣 John Wick',
    description: 'Aksi brutal dengan gaya elegan.',
    image: '/jhonwik.webp',
    color: 'from-emerald-400 via-teal-500 to-cyan-500',
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="
        relative py-20 overflow-hidden
        text-gray-900 dark:text-white

        bg-gradient-to-br from-white via-pink-50 to-yellow-100
        dark:from-[#050816] dark:via-[#0b1020] dark:to-black
      "
    >

      {/* 🌌 BACKGROUND GLOW FIXED */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* 🌞 LIGHT MODE */}
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="
            absolute w-[600px] h-[600px]
            bg-pink-400/40 blur-[160px] rounded-full
            top-[-200px] left-[-200px]
            dark:hidden
          "
        />

        <motion.div
          animate={{ x: [0, -90, 90, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="
            absolute w-[600px] h-[600px]
            bg-yellow-300/40 blur-[160px] rounded-full
            bottom-[-200px] right-[-200px]
            dark:hidden
          "
        />

        {/* 🌑 DARK MODE */}
        <motion.div
          animate={{ y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="
            absolute w-[700px] h-[700px]
            bg-cyan-500/30 blur-[180px] rounded-full
            top-[-250px] left-[-250px]
            hidden dark:block
          "
        />

        <motion.div
          animate={{ y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="
            absolute w-[700px] h-[700px]
            bg-purple-500/30 blur-[180px] rounded-full
            bottom-[-250px] right-[-250px]
            hidden dark:block
          "
        />

        {/* 🌫️ NOISE */}
        <div className="
          absolute inset-0 opacity-[0.05]
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        " />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            🎬 Film Favorit
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Koleksi film paling keren & wajib ditonton 🔥
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">

              {movies.map((movie, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div className="
                    p-5 rounded-2xl
                    bg-white/70 dark:bg-white/5
                    backdrop-blur-xl
                    border border-white/40 dark:border-white/10
                    hover:-translate-y-3 transition-all duration-500
                  ">

                    <div className="relative group">

                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${movie.color}
                        blur-2xl opacity-40 group-hover:opacity-100 
                        scale-90 group-hover:scale-110 transition`}
                      />

                      <div className={`relative p-[3px] rounded-xl bg-gradient-to-r ${movie.color}`}>
                        <div className="aspect-[2/3] overflow-hidden rounded-xl bg-black">
                          <img
                            src={movie.image}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>
                      </div>

                    </div>

                    <h3 className="font-bold text-lg mt-4">
                      {movie.title}
                    </h3>

                    <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                      {movie.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* BUTTONS */}
          <Button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-white/70 dark:bg-white/10 backdrop-blur-md"
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-white/70 dark:bg-white/10 backdrop-blur-md"
          >
            <ChevronRight />
          </Button>

        </div>
      </div>
    </section>
  );
}