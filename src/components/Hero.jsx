import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0c10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-white to-orange-400 animate-pulse" />
            Available for freelance & product collaborations
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Building AI-driven products and seamless Zoho solutions
          </h1>
          <p className="mt-5 text-lg text-white/70">
            I’m Saketh Raja Koppula — an AI graduate from VJIT, Hyderabad and a product developer at Insightcrew Technologies.
            I craft modern experiences that blend data, automation, and thoughtful design.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:from-orange-600 hover:to-amber-700 transition-colors">
              Get in touch
            </a>
            <a href="#experience" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors">
              View experience
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(255,255,255,0.08),transparent),radial-gradient(400px_200px_at_80%_30%,rgba(255,140,0,0.12),transparent)]" />
    </section>
  )
}
