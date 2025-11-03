import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient vignette that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 lg:py-40 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-300 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 rounded-full border border-neutral-200/60 dark:border-neutral-800 w-max">Graphic Designer • Video Editor</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white">
            Saikat Das
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            I craft bold visual identities, motion graphics, and cinematic edits. Playful, modern, and interactive stories that help brands stand out.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white bg-white/70 dark:bg-neutral-900/70 backdrop-blur hover:bg-white hover:dark:bg-neutral-800 transition">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-end justify-end">
          <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 w-full max-w-sm">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Specialties</h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Brand & Social Graphics</li>
              <li>• Motion Design & Animations</li>
              <li>• Video Editing & Color Grading</li>
              <li>• Thumbnail & Poster Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
