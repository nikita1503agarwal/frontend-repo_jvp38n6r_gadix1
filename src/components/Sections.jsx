export function About() {
  return (
    <section id="about" className="relative bg-[#0b0c10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I’m an AI graduate from VJIT Hyderabad, currently building at Insightcrew Technologies as a Zoho developer and product developer.
              I specialize in crafting product-grade automations, integrations, and AI-powered workflows that streamline operations and unlock business value.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ['Location', 'Hyderabad, IN'],
                ['Role', 'Zoho & Product Developer'],
                ['Focus', 'AI + Automation'],
                ['Status', 'Open to collabs'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/50">{k}</p>
                  <p className="mt-1 font-medium">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
            <h3 className="text-lg font-semibold">What I enjoy building</h3>
            <ul className="mt-4 space-y-3 text-white/75">
              <li>• AI copilots and assistants for product teams</li>
              <li>• CRM customizations and end‑to‑end Zoho automation</li>
              <li>• Data pipelines, integrations, and API-first systems</li>
              <li>• Clean, modern frontends with delightful micro‑interactions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    {
      company: 'Insightcrew Technologies',
      role: 'Zoho Developer • Product Developer',
      period: 'Present',
      points: [
        'Led automations across Zoho stack improving ops efficiency',
        'Built product features with API integrations and AI assist',
        'Shipped internal tools accelerating delivery speed',
      ],
    },
    {
      company: 'VJIT, Hyderabad',
      role: 'B.Tech in AI',
      period: 'Graduated',
      points: [
        'Projects in ML, NLP and MLOps',
        'Strong fundamentals in data structures & systems',
      ],
    },
  ]

  return (
    <section id="experience" className="relative bg-[#0b0c10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{item.company}</p>
                <p className="text-sm text-white/60">{item.period}</p>
              </div>
              <p className="mt-1 text-white/80">{item.role}</p>
              <ul className="mt-4 space-y-2 text-white/70">
                {item.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    'Zoho CRM/Flow/Creator',
    'Deluge & Integrations',
    'REST APIs',
    'JavaScript/React',
    'Python/FastAPI',
    'MongoDB',
    'LLMs & Prompting',
    'Automation Design',
  ]
  return (
    <section id="skills" className="relative bg-[#0b0c10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0c10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Whether it’s AI copilots, product features, or Zoho automation — I’d love to collaborate.
            Drop a line and I’ll get back soon.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="mailto:sakethrajax@gmail.com" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:from-orange-600 hover:to-amber-700 transition-colors">
              Email me
            </a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
