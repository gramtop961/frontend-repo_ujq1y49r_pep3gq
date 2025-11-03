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

        {/* Profile image with floating software badges */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* container ensures overlays don't block spline interactions */}
          <div className="pointer-events-none relative">
            <img
              src="https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=840&auto=format&fit=crop"
              alt="Saikat Das portrait"
              className="pointer-events-auto h-72 w-72 rounded-full object-cover shadow-2xl ring-4 ring-white/60 dark:ring-neutral-900/60"
            />

            {/* ring glow */}
            <div className="absolute inset-0 -z-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 blur-2xl" />

            {/* floating badges */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Badge label="Photoshop" short="Ps" className="bg-blue-600 text-blue-50 border-blue-400/40" />
            </div>
            <div className="absolute top-16 -left-6">
              <Badge label="Illustrator" short="Ai" className="bg-orange-600 text-orange-50 border-orange-400/40" />
            </div>
            <div className="absolute top-24 -right-7">
              <Badge label="Premiere Pro" short="Pr" className="bg-purple-700 text-purple-50 border-purple-400/40" />
            </div>
            <div className="absolute bottom-10 -left-4">
              <Badge label="After Effects" short="Ae" className="bg-indigo-700 text-indigo-50 border-indigo-400/40" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
              <Badge label="Figma" short="F" className="bg-neutral-900 text-white border-neutral-700" />
            </div>
            <div className="absolute bottom-8 -right-6">
              <Badge label="Blender" short="B" className="bg-amber-600 text-amber-50 border-amber-400/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label, short, className }) {
  return (
    <div className={`pointer-events-none select-none flex items-center gap-2 rounded-full border px-3 py-1 shadow-lg backdrop-blur ${className}`}>
      <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-xs font-bold uppercase tracking-wide">{short}</span>
      <span className="text-xs font-medium text-white drop-shadow-sm">{label}</span>
    </div>
  );
}
