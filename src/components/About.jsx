import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -10]);

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-10 h-56 w-56 rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div style={{ y: y1 }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">A little about me</h2>
            <p className="mt-4 text-white/80">
              I craft interactive products that blend utility with delight. My toolkit spans modern frontend stacks, thoughtful design systems, and a love for motion.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              {['Clean code & performance', 'Immersive interactions', 'Accessible, responsive UI'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-fuchsia-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div style={{ y: y2 }} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1">
              <div className="rounded-2xl bg-black/60 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { k: 'Years', v: '5+' },
                    { k: 'Projects', v: '40+' },
                    { k: 'Satisfaction', v: '100%' },
                  ].map((stat) => (
                    <div key={stat.k} className="rounded-xl bg-white/5 p-4">
                      <div className="text-2xl font-semibold text-white">{stat.v}</div>
                      <div className="text-xs uppercase tracking-wide text-white/60">{stat.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
