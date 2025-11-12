import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Skills, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <footer className="bg-black text-white/50 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Saketh Raja Koppula. All rights reserved.</p>
          <p className="text-white/40">Built with love — AI, automation, and clean design.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
