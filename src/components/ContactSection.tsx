import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ahmadmufazal2010@gmail.com',
    href: 'mailto:ahmadmufazal2010@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 822-7668-3473',
    href: 'https://wa.me/6282276683473',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: 'https://maps.app.goo.gl/15tcHo15nkXxjNFy7',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 WA SEND (UTAMA)
  const handleSend = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Isi semua kolom dulu!');
      return;
    }

    const msg = encodeURIComponent(
      `Halo saya ${formData.name}\nEmail: ${formData.email}\n\nSubjek: ${formData.subject}\n\nPesan:\n${formData.message}`
    );

    window.open(`https://wa.me/6282276683473?text=${msg}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="
        relative py-20 md:py-32 overflow-hidden
        bg-gradient-to-br from-white via-purple-50 to-blue-100
        dark:from-black dark:via-gray-900 dark:to-black
        text-gray-900 dark:text-white
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-400/30 dark:bg-purple-700/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-400/30 dark:bg-blue-700/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Hubungi Saya
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Kirim pesan langsung via WhatsApp 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* INFO */}
          <div className="space-y-5">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  bg-white/60 dark:bg-white/5
                  border border-white/40 dark:border-white/10
                  backdrop-blur-md hover:scale-[1.02] transition
                "
              >
                <item.icon className="text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* FORM */}
          <div
            className="
              p-6 rounded-2xl
              bg-white/60 dark:bg-white/5
              border border-white/40 dark:border-white/10
              backdrop-blur-xl space-y-4
            "
          >
            <Input
              name="name"
              placeholder="Nama kamu"
              onChange={handleChange}
            />

            <Input
              name="email"
              placeholder="Email kamu"
              onChange={handleChange}
            />

            <Input
              name="subject"
              placeholder="Subjek"
              onChange={handleChange}
            />

            <Textarea
              name="message"
              placeholder="Tulis pesan..."
              rows={5}
              onChange={handleChange}
            />

            <Button
              onClick={handleSend}
              className="
                w-full rounded-full
                bg-gradient-to-r from-purple-500 to-blue-500
                hover:scale-105 transition
              "
            >
              <Send className="w-4 h-4 mr-2" />
              Kirim via WhatsApp
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}