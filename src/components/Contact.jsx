import { Mail, Phone, Instagram, Youtube, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Let’s build something great</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-xl">
              Available for freelance projects, collaborations, and long-term engagements. Share a brief and I’ll get back within 24 hours.
            </p>
            <div className="mt-6 space-y-3 text-neutral-900 dark:text-white">
              <a href="mailto:hello@saikatdas.design" className="flex items-center gap-3 hover:opacity-80">
                <Mail size={18} /> hello@saikatdas.design
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-3 hover:opacity-80">
                <Phone size={18} /> +91 00000 00000
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-neutral-900 dark:text-white">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white/70 dark:hover:bg-neutral-800">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white/70 dark:hover:bg-neutral-800">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white/70 dark:hover:bg-neutral-800">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white/70 dark:hover:bg-neutral-800">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">Name</label>
                  <input type="text" required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/40" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/40" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">Project Details</label>
                <textarea rows={5} required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/40" />
              </div>
              <button type="submit" className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Saikat Das — All rights reserved.</p>
      </div>
    </section>
  );
}
