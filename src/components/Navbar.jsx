import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-amber-600" />
          <span className="text-white font-semibold tracking-wide">Saketh Raja Koppula</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:saketh@example.com" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg bg-white/5 text-white" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
