import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 md:px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              Let’s build something great together
            </motion.h3>
            <p className="mt-3 text-white/70">Open for freelance work, collaborations, or just a friendly chat.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Framer Motion', 'Three.js', 'Tailwind'].map(skill => (
                <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{skill}</span>
              ))}
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input type="text" className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input type="email" className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" rows={4} placeholder="Tell me about your project" />
            </div>
            <button type="button" className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">Send Message</button>
          </form>
        </div>
      </div>
      <p className="mt-6 text-center text-white/50 text-xs">© {new Date().getFullYear()} YourName — Crafted with care.</p>
    </section>
  );
}
