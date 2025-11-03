import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Dynamic Brand Launch Reel',
    tag: 'Video Edit',
    description: 'High-energy launch edit with typography, speed ramping, and sound design.',
    color: 'from-fuchsia-500 to-violet-600',
    link: '#',
  },
  {
    title: 'Streaming Overlay Pack',
    tag: 'Graphic Design',
    description: 'Modular overlay system: alerts, panels, and intermission screens.',
    color: 'from-cyan-500 to-blue-600',
    link: '#',
  },
  {
    title: 'Product Teaser Animation',
    tag: 'Motion Graphics',
    description: 'Playful 2.5D animation with parallax and glossy UI details.',
    color: 'from-amber-500 to-orange-600',
    link: '#',
  },
  {
    title: 'YouTube Channel Identity',
    tag: 'Branding',
    description: 'Logo, color system, thumbnail templates, and end screens.',
    color: 'from-emerald-500 to-teal-600',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Selected Work</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">A snapshot of graphic, motion, and edit projects.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-900 dark:text-white hover:bg-white/70 dark:hover:bg-neutral-800"
          >
            Book a Project <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a key={idx} href={p.link} className="group">
              <div className={`aspect-[16/10] rounded-xl bg-gradient-to-br ${p.color} p-[2px] shadow-lg shadow-black/5`}>
                <div className="w-full h-full rounded-[10px] bg-white dark:bg-neutral-950 flex items-end overflow-hidden">
                  <div className="p-5">
                    <span className="inline-flex items-center text-[10px] uppercase tracking-widest font-semibold text-neutral-700/80 dark:text-neutral-300/80 bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800 rounded-full px-2 py-1">{p.tag}</span>
                    <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white leading-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">{p.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm text-neutral-900 dark:text-white opacity-70 group-hover:opacity-100 transition">
                      View details <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
