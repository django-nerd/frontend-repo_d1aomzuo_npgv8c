import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled ? 'bg-black/60 backdrop-blur-md shadow-lg' : 'bg-transparent';

  const NavLinks = () => (
    <>
      <a href="#home" className="px-4 py-2 text-sm text-white/80 hover:text-white transition">Home</a>
      <a href="#projects" className="px-4 py-2 text-sm text-white/80 hover:text-white transition">Projects</a>
      <a href="#contact" className="px-4 py-2 text-sm text-white/80 hover:text-white transition">Contact</a>
      <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition">
        <Rocket className="h-4 w-4" /> Hire Me
      </a>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${navClasses} transition-all`}> 
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-white">YourName</span>
          </a>

          <div className="hidden md:flex items-center">
            <NavLinks />
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col border-t border-white/10">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
}
