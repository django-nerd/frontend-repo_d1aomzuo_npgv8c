import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          Building playful, modern experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-xl text-base md:text-lg text-white/80"
        >
          I’m a creative developer focused on immersive interfaces, delightful motion, and performant web apps.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <a href="#projects" className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">View Work</a>
          <a href="#contact" className="rounded-full bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition">Get in touch</a>
        </motion.div>
      </div>
    </section>
  );
}
