import Image from 'next/image';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'publications', label: 'Publications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'about', label: 'About' },
];

const interests = [
  'Machine Learning',
  'Multimodal AI',
  'Edge & Real-Time Systems',
  'Explainable Intelligence',
  'Trustworthy AI',
  'Agentic & Generative Models',
];

const experiences = [
  {
    title: 'AI Engineer',
    company: 'Magic Mind Co Ltd.',
    location: 'California, USA (Remote)',
    date: 'Jul 2025 – Present',
    points: [
      'Develop scalable AI microservices for real-time wellness applications.',
      'Build intelligent systems that combine reasoning, planning, and autonomy.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Reddot Digital Limited (Axiata Group)',
    location: 'Dhaka, Bangladesh',
    date: 'Nov 2024 – Jun 2025',
    points: [
      'Delivered an AI recommendation engine for personalized OTT experiences.',
      'Built and deployed an LLM-powered chatbot for real-time user support.',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'East West University',
    location: 'Dhaka, Bangladesh',
    date: 'Aug 2023 – Present',
    points: [
      'Led applied AI research and mentored over 60 students.',
      'Published high-impact journal and conference work in explainable AI.',
    ],
  },
];

const publicationSections = [
  {
    title: 'Q1 Journal Publications',
    description: 'Strong impact journals with explainable AI contributions for agriculture, healthcare, and smart sensing.',
    items: [
      {
        title: 'Leveraging pre-trained models within a semi-supervised and explainable AI real-time framework for betel leaf disease detection',
        venue: 'Journal of Agriculture and Food Research (Q1, IF 6.2)',
      },
      {
        title: 'An extensive image dataset for deep learning-based classification of rice kernel varieties in Bangladesh',
        venue: 'Data in Brief, Elsevier',
      },
      {
        title: 'PaddyVarietyBD: Classifying paddy variations of Bangladesh with a novel image dataset',
        venue: 'Data in Brief, Elsevier',
      },
      {
        title: 'A FixMatch framework for Alzheimer’s disease classification: exploring the trade-off between supervision and performance',
        venue: 'IEEE Access (Q1)',
      },
    ],
  },
  {
    title: 'Q2 Conference & Springer Work',
    description: 'Technical conference work with strong contributions in medical diagnosis, agriculture, and explainable learning.',
    items: [
      {
        title: 'Enhancing cervical cancer detection: leveraging semi-supervised learning for improved prognosis',
        venue: '27th ICCIT 2024 | IEEE',
      },
      {
        title: 'Efficient tea leaf classification: bridging supervised and semi-supervised learning',
        venue: 'ICDMIS 2024 | Springer LNNS',
      },
      {
        title: 'Leveraging explainable artificial intelligence for real-time diagnosis of PCOS',
        venue: 'ICIDA 2024 | Springer LNNS',
      },
      {
        title: 'DeepCerviNet: Enhanced cervical cancer classification using supervised learning',
        venue: 'IEEE RAAICON 2025',
      },
    ],
  },
  {
    title: 'Q3 Emerging Research',
    description: 'Under-review and dataset-focused work that highlights practical impact and future directions.',
    items: [
      {
        title: 'Integrating multiple learning techniques with explainable AI for accurate monkeypox classification',
        venue: 'MDPI Journal (Q2, under review)',
      },
      {
        title: 'An ensemble deep learning approach surpassing pretrained models in rice kernel classification',
        venue: 'IEEE Access (under review)',
      },
      {
        title: 'Biodiversity conservation in Bangladesh: classifying rare medicinal plants',
        venue: 'Journal of Agriculture and Food Research (under review)',
      },
      {
        title: 'ExamStressEEG: comprehensive EEG dataset capturing student stress during exams',
        venue: 'Mendeley Dataset',
      },
    ],
  },
];

const achievements = [
  'Runner-up in the capstone project idea showcase competition (2024).',
  '4th place in the EWU intra-university programming contest (2022).',
  'Best Presenter certificate at ICCIT 2024.',
  'Led research clubs and volunteer coding events to build collaboration and skills.',
  'Mentored 50+ students in AI projects and technical training.',
  'Published across Q1 journals, IEEE proceedings, and Springer volumes.',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#overview" className="text-lg font-semibold text-white transition hover:text-cyan-300">
            Md Tahsin
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://scholar.google.com/citations?user=6zm80xAAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Google Scholar
          </a>
        </div>
      </header>

      <section id="overview" className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              AI Engineer @ MagicMind · RA (AI) @ EWU
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Md Tahsin
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Research-driven AI engineer blending machine learning, multimodal systems, and human-centered deployment.
              I build explainable, scalable solutions across healthcare, agriculture, and real-time intelligent platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#publications"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Publications
              </a>
              <a
                href="#achievements"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white"
              >
                Achievements
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-sm">
                <p className="text-sm text-cyan-400">Email</p>
                <p className="mt-2 text-white">tahsin30899@gmail.com</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-sm">
                <p className="text-sm text-cyan-400">Phone</p>
                <p className="mt-2 text-white">+880 1763 357 810</p>
              </div>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-glow">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)]" />
            <Image
              src="/profile.jpg"
              alt="Profile photo for Md Tahsin"
              width={420}
              height={420}
              className="mx-auto h-auto w-full rounded-3xl object-cover"
            />
            <div className="mt-6 rounded-2xl bg-slate-950/80 p-5 text-sm text-slate-300 ring-1 ring-white/10">
              <p className="font-medium text-white">Profiles</p>
              <p className="mt-2 leading-7 text-cyan-300">
                <a href="https://bd.linkedin.com/in/tahsin0o?trk=public_profile_samename-profile" className="underline hover:text-cyan-100" target="_blank" rel="noreferrer">LinkedIn</a> ·
                <a href="https://scholar.google.com/citations?user=6zm80xAAAAAJ&hl=en" className="underline hover:text-cyan-100" target="_blank" rel="noreferrer">Google Scholar</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="border-t border-slate-800 py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Publications</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Scholar-verified research output</h2>
            </div>
            <a
              href="https://scholar.google.com/citations?user=6zm80xAAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20"
            >
              Open Google Scholar
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {publicationSections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-glow">
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-7">{section.description}</p>
                <ul className="mt-5 space-y-4 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.venue}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Achievements</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Career highlights and recognition</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-sm">
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-800 py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">About Me</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Driven by impact, guided by research</h2>
              <p className="mt-6 text-slate-300 leading-8">
                Growing up in Bangladesh, I experienced the limits of technology in underserved communities.
                The pandemic clarified how AI must be applied to improve healthcare, food security, and resilience for people who need it most.
              </p>
              <p className="mt-6 text-slate-300 leading-8">
                My research began with practical problems in agriculture and medicine: building datasets for rice quality, developing explainable classifiers for disease detection, and delivering real-time systems that work in the field.
                These projects earned recognition from research partners and were published in high-impact journals and IEEE/Springer venues.
              </p>
              <p className="mt-6 text-slate-300 leading-8">
                I combine strong academic research with product engineering — from AI-driven mobile experiences to cloud-native and edge deployments.
                My work is anchored in explainability, trustworthiness, and human-centered design.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-slate-300 shadow-glow">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Research motivation</p>
                <p className="mt-4 leading-7">
                  I develop AI systems that are transparent, practical, and socially meaningful. My focus spans medical diagnosis, sustainable agriculture, and resilient human-centered systems.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-slate-300 shadow-glow">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">SOP summary</p>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-300">
                  <li>Motivated by real-world healthcare gaps and community impact.</li>
                  <li>Built explainable AI for rice disease detection, medical imaging, and sustainability.</li>
                  <li>Published across premium journals and conference proceedings.</li>
                  <li>Focused on trustworthy, deployable AI for human wellness.</li>
                  <li>Aim to continue research at the intersection of AI, ethics, and practical impact.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Ready for collaboration</h2>
              <p className="mt-4 text-slate-300 leading-7">
                I am available for research partnerships, AI product engineering, and roles that bridge innovation with real-world impact.
                Let’s create AI that is explainable, deployable, and aligned with human needs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300">
                <p className="text-sm text-cyan-300">Email</p>
                <p className="mt-2 text-white">tahsin30899@gmail.com</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300">
                <p className="text-sm text-cyan-300">Phone</p>
                <p className="mt-2 text-white">+880 1763 357 810</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300">
                <p className="text-sm text-cyan-300">Location</p>
                <p className="mt-2 text-white">Gulshan-01, Dhaka 1216, Bangladesh</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300">
                <p className="text-sm text-cyan-300">Profiles</p>
                <p className="mt-2 text-white">
                  <a href="https://bd.linkedin.com/in/tahsin0o?trk=public_profile_samename-profile" className="underline hover:text-cyan-100" target="_blank" rel="noreferrer">LinkedIn</a>
                  <span className="mx-1">·</span>
                  <a href="https://scholar.google.com/citations?user=6zm80xAAAAAJ&hl=en" className="underline hover:text-cyan-100" target="_blank" rel="noreferrer">Google Scholar</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
