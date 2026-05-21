import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      document.querySelectorAll('section').forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActive(`#${id}`);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  const go = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div
        className={`relative flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-300 ${
          scrolled
            ? `${
                isDark
                  ? 'bg-black/60 border border-cyan-400/20'
                  : 'bg-white/70 border border-cyan-400/30'
              } backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.25)]`
            : 'bg-transparent'
        }`}
      >
        {/* Glow border */}
        <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent hover:border-cyan-400/40 transition" />

        {/* Logo */}
        <div
          onClick={() => go('#home')}
          className="cursor-pointer text-sm md:text-base font-semibold tracking-widest text-cyan-500 drop-shadow-[0_0_6px_#22d3ee]"
        >
          Ahmad's Portfolio
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <button
              key={item.link}
              onClick={() => go(item.link)}
              className={`relative group text-sm tracking-wide transition ${
                isDark
                  ? 'text-gray-300 hover:text-cyan-400'
                  : 'text-gray-600 hover:text-cyan-500'
              }`}
            >
              {item.name}

              {/* Hover line */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#22d3ee]" />

              {/* Active line */}
              {active === item.link && (
                <motion.div
                  layoutId="active-glow"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                />
              )}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 hover:shadow-[0_0_10px_#22d3ee] transition"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`mt-3 rounded-xl backdrop-blur-xl border border-cyan-400/20 p-4 md:hidden shadow-[0_0_20px_rgba(34,211,238,0.2)] ${
              isDark ? 'bg-black/70' : 'bg-white/80'
            }`}
          >
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <button
                  key={item.link}
                  onClick={() => go(item.link)}
                  className={`text-left text-sm tracking-wide ${
                    active === item.link
                      ? 'text-cyan-500'
                      : isDark
                      ? 'text-gray-300'
                      : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}