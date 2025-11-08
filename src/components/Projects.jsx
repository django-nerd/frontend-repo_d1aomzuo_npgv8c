import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Immersive Dashboard',
    description: '3D-enhanced admin experience with realtime charts and subtle parallax.',
    tags: ['React', 'Three.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbW1lcnNpdmUlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjYwNTA3Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'E-commerce Motion',
    description: 'Micro-interactions that guide users through a smooth checkout.',
    tags: ['Next.js', 'Framer Motion', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Revamp',
    description: 'A vibrant personal site with scroll-bound animations and 3D details.',
    tags: ['Vite', 'Spline', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
];

function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-white text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-white/70 text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="rounded-full bg-white/10 text-white/80 px-2.5 py-1 text-xs">{tag}</span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 md:px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Selected Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-white/70"
        >
          A mix of client projects and personal explorations focused on motion and interactivity.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} i={i} />
        ))}
      </div>
    </section>
  );
}
