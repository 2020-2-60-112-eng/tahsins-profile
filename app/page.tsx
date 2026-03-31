import Image from 'next/image';

const interests = [
  'Machine Learning',
  'Multimodal AI',
  'Edge AI & Deployment',
  'Human-Centered AI',
  'Explainable AI',
  'Generative & Agentic Systems',
];

const experiences = [
  {
    title: 'AI Engineer',
    company: 'Magic Mind Co Ltd.',
    location: 'California, USA (Remote)',
    date: 'Jul 2025 – Present',
    points: [
      'Develop scalable real-time AI microservices.',
      'Build intelligent systems for human wellness and autonomy.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Reddot Digital Limited (Axiata Group)',
    location: 'Dhaka, Bangladesh',
    date: 'Nov 2024 – Jun 2025',
    points: [
      'Designed AI recommendation systems for personalized content.',
      'Launched Binge BD OTT app and built an LLM-powered support chatbot.',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'East West University',
    location: 'Dhaka, Bangladesh',
    date: 'Aug 2023 – Present',
    points: [
      'Implemented AI models for applied research and mentor students.',
      'Published multiple Q1 journal and conference papers.',
    ],
  },
];

const publications = [
  'Leveraging pre-trained models within a semi-supervised and explainable AI real-time framework for betel leaf disease detection',
  'An extensive image dataset for deep learning-based classification of rice kernel varieties in Bangladesh',
  'A FixMatch framework for Alzheimer’s disease classification: exploring the trade-off between supervision and performance',
  'PaddyVarietyBD: Classifying paddy variations of Bangladesh with a novel image dataset',
  'Efficient tea leaf classification: bridging supervised and semi-supervised learning',
  'Enhancing cervical cancer detection with semi-supervised learning',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              AI Engineer @ MagicMind · RA (AI) @ EWU
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Md Tahsin
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Research-driven AI engineer with expertise in machine learning, multimodal systems,
              explainable intelligence, and scalable real-time application deployment.
              I build impactful solutions across healthcare, agriculture, and intelligent platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Contact Me
              </a>
              <a
                href="#research"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white"
              >
                Research Highlights
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

      <section id="research" className="border-t border-slate-800 py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
              <h2 className="text-2xl font-semibold text-white">Research & Interests</h2>
              <p className="mt-4 text-slate-300 leading-7">
                I focus on machine learning, multimodal AI, explainable systems, and real-time deployment.
                My work bridges research and applied AI across healthcare, agriculture, and cyber-physical systems.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li>• Supervised, semi-supervised, transfer, few-shot, and zero-shot learning</li>
                <li>• Vision-language, vision-audio, cross-modal fusion, and trustworthy AI</li>
                <li>• Real-time edge AI systems, hardware-in-the-loop deployment, and model explainability</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map((interest) => (
                <div key={interest} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-sm">
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
              <h2 className="text-2xl font-semibold text-white">Professional Experience</h2>
              <div className="mt-6 space-y-6">
                {experiences.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-slate-400">{item.company}</p>
                      </div>
                      <p className="text-sm text-slate-400">{item.date}</p>
                    </div>
                    <p className="mt-3 text-slate-300">{item.location}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
              <h2 className="text-2xl font-semibold text-white">Academic Profile</h2>
              <div className="mt-6 space-y-6 text-slate-300">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-lg font-semibold text-white">East West University</p>
                  <p className="mt-2 text-slate-400">B.Sc. in Computer Science & Engineering</p>
                  <p className="mt-2 text-slate-300">CGPA: 3.23 | 2020–2024</p>
                  <p className="mt-3 text-slate-300">Recognized as a successful student in the university newsletter.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <h3 className="text-lg font-semibold text-white">Selected Publications</h3>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    {publications.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Let's connect</h2>
              <p className="mt-4 text-slate-300 leading-7">
                I’m available for AI research collaborations, product development, and full-time engineering roles.
                Reach out for research partnerships, innovation projects, or portfolio work.
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
