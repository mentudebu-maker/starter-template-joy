import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltra — Professional Electrical Services" },
      { name: "description", content: "Safe, reliable electrical services for homes and businesses — installations, repairs, panel upgrades, and 24/7 emergency support." },
      { property: "og:title", content: "Voltra — Professional Electrical Services" },
      { property: "og:description", content: "Safe, reliable electrical services for homes and businesses." },
    ],
  }),
  component: Index,
});

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-secondary/60 text-xs uppercase tracking-widest text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}

function Bolt({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-[color:var(--header)] text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3 text-sm">
          <div className="flex items-center gap-2 font-bold tracking-wide">
            <Bolt className="h-5 w-5" /> VOLTRA
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2"><Bolt className="h-4 w-4" /> 24/7 Emergency Electrical Repair</span>
            <span>✉ support@voltra.com</span>
            <span>☎ +1 (800) 555-2487</span>
          </div>
          <div className="flex gap-3 text-base opacity-80">
            <span>f</span><span>◎</span><span>𝕏</span><span>▶</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <div className="flex gap-8 text-sm font-medium">
            {["Home", "About Us", "Services", "Projects", "Blog", "Pages", "Contact Us"].map((l) => (
              <a key={l} href="#" className="hover:text-primary">{l}</a>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
            GET FREE QUOTE <Arrow className="h-3 w-3" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm text-primary">
              <Bolt /> Professional Electrical Services
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Your <span className="text-primary">Trusted Experts</span> for All Electrical Needs
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              We provide safe, reliable, and efficient electrical solutions—from wiring and panel upgrades to emergency repairs—tailored to homes and commercial spaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                GET FREE QUOTE <Arrow className="h-3 w-3" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground">
                ▶ WATCH VIDEO
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-card/60 p-5">
                <h3 className="text-lg font-semibold">10K+ Successful Repairs</h3>
                <p className="mt-2 text-sm text-muted-foreground">Serving thousands of satisfied residential and commercial clients.</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10">G</div>
                  <div>
                    <div className="text-primary">★★★★★</div>
                    <div className="text-xs text-muted-foreground">6K Satisfied Client Reviews</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                <h3 className="text-lg font-semibold">Check Your Power Status</h3>
                <p className="mt-2 text-sm opacity-80">System performance optimized</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full border-4 border-primary-foreground/30">
                    <Bolt className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">48%</div>
                    <div className="text-xs">Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Placeholder label="Hero Image — Electrician" className="aspect-[4/5] h-full w-full" />
            <div className="absolute left-4 top-10 rounded-full bg-card/90 px-4 py-2 text-sm shadow"><Check className="mr-2 inline h-4 w-4 text-primary" />Free Electrical Inspection</div>
            <div className="absolute left-4 top-24 rounded-full bg-card/90 px-4 py-2 text-sm shadow"><Check className="mr-2 inline h-4 w-4 text-primary" />Book a Service Instantly</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <Placeholder label="About Image 1" className="aspect-square" />
            <Placeholder label="About Image 2" className="mt-12 aspect-square" />
            <div className="col-span-2 mt-4 rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-sm">Projects Completed</div>
              <p className="mt-2 text-sm opacity-80">Delivering reliable electrical solutions across homes and industries.</p>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">— About Voltra</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Powering Homes & Businesses with Trusted Electrical Expertise
            </h2>
            <p className="mt-6 text-muted-foreground">
              At Voltra, we specialize in delivering safe, efficient, and reliable electrical solutions. From residential wiring to complex commercial systems, our certified electricians ensure every project meets the highest safety and performance standards.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-card/60 p-6">
              <div className="text-primary">★★★★★</div>
              <p className="mt-3 text-lg">
                “Voltra transformed our entire electrical system with precision and professionalism. Highly recommended for both residential and commercial needs.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Placeholder label="PFP" className="h-12 w-12 rounded-full" />
                <div>
                  <div className="font-semibold">Michael Carter</div>
                  <div className="text-xs text-muted-foreground">Property Manager</div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {["24/7 Emergency Repairs", "Certified Electricians", "Residential & Commercial", "Energy Efficiency Upgrades"].map((f) => (
                <div key={f} className="flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2"><Bolt className="h-4 w-4 text-primary" />{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary">— Why Choose Us</span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Why Choose Voltra for Reliable Electrical Solutions
              </h2>
              <p className="mt-6 text-muted-foreground">
                We combine expertise, safety, and innovation to deliver electrical services you can trust—whether it's a small repair or a large-scale installation.
              </p>
              <Placeholder label="Choose Image" className="mt-8 aspect-[4/3] w-full" />
            </div>
            <div className="space-y-4">
              {[
                "Certified & Experienced Electricians",
                "24/7 Emergency Electrical Support",
                "Advanced Tools & Modern Technology",
                "Residential & Commercial Expertise",
                "Safety-First Approach & Compliance",
              ].map((title, i) => (
                <details key={title} open={i === 0} className="group rounded-2xl border border-white/10 bg-card/60 p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                    {title}
                    <span className="text-primary group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We ensure every project is handled by licensed professionals using industry-best practices for safety, efficiency, and long-term reliability.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">— Our Services</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Reliable Electrical Solutions for Homes & Businesses
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              We provide a full range of professional electrical services—from installations and upgrades to emergency repairs—ensuring safety, efficiency, and long-lasting performance.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Electrical Installations",
              "Lighting Installation",
              "Electrical Panel Upgrades",
              "Electrical Repairs",
              "Home & Commercial Wiring",
              "Emergency Electrical Services",
            ].map((s) => (
              <div key={s} className="group overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-4">
                <Placeholder label="Service Image" className="aspect-[4/3] w-full" />
                <div className="mt-4 flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"><Bolt /></div>
                    <h3 className="font-semibold">{s}</h3>
                  </div>
                  <Arrow className="h-4 w-4 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <Placeholder label="Solution 1" className="aspect-square" />
            <Placeholder label="Solution 2" className="mt-12 aspect-square" />
            <Placeholder label="Solution 3" className="col-span-2 aspect-[2/1]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">— Advanced Electrical Solutions</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Smart Electrical Solutions Designed for Safety, Efficiency & Performance
            </h2>
            <p className="mt-6 text-muted-foreground">
              Our team of certified electricians delivers high-quality electrical services backed by years of experience, advanced tools, and a commitment to safety.
            </p>
            <div className="mt-8 space-y-5">
              {[
                "Certified & Skilled Electricians",
                "Advanced Diagnostics & Solutions",
                "Reliable & Energy-Efficient Systems",
              ].map((t) => (
                <div key={t} className="flex gap-4 rounded-2xl border border-white/10 bg-card/60 p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Bolt className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Licensed professionals with extensive experience handling all types of electrical systems safely and efficiently.</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Get Free Consultation <Arrow className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Estimate / Stats */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <span className="text-xs uppercase tracking-[0.4em]">— Get a Free Estimate</span>
                <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                  Hassle-Free Electrical Solutions Just a Click Away
                </h2>
                <p className="mt-6 max-w-xl opacity-80">
                  We make it easy to get reliable electrical services with fast estimates and expert support tailored to your needs.
                </p>
                <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground">
                  Get Free Quote <Arrow className="h-3 w-3" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[["500+", "Projects Completed"], ["3500+", "Happy Clients"], ["1000+", "Emergency Repairs"], ["100+", "Skilled Professionals"]].map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-primary-foreground/20 p-6">
                    <div className="text-4xl font-bold">{n}</div>
                    <div className="mt-1 text-sm opacity-80">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">— Pricing Plans</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Affordable Electrical Plans for Homes, Businesses & Ongoing Support
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              { name: "ESSENTIAL", price: 149, popular: false, desc: "For quick fixes and standard electrical needs", features: ["Basic electrical fault inspection", "Minor repair service", "Switch & socket replacement", "Lighting issue diagnosis", "Safety check for affected area", "Standard service scheduling"], cta: "Book Essential Plan" },
              { name: "MOST POPULAR", price: 399, popular: true, desc: "For customers needing ongoing electrical support", features: ["Priority electrical inspections", "Preventive maintenance visits", "Wiring and panel condition checks", "Lighting and circuit diagnostics", "Faster emergency response", "Dedicated support scheduling", "Service performance reports"], cta: "Start Maintenance Plan" },
              { name: "PRIORITY PRO", price: 799, popular: false, desc: "For advanced support and emergency response coverage", features: ["24/7 priority emergency support", "Advanced diagnostics & testing", "Electrical panel and load assessment", "Energy efficiency recommendations", "Scheduled commercial inspections", "Direct priority contact support"], cta: "Book Priority Plan" },
            ].map((p) => (
              <div key={p.name} className={`rounded-3xl p-8 ${p.popular ? "bg-primary text-primary-foreground" : "border border-white/10 bg-card/60"}`}>
                <div className="flex items-center justify-between text-xs uppercase tracking-widest">
                  <span>{p.name}</span>
                  {p.popular && <span className="rounded-full bg-primary-foreground/20 px-3 py-1">Best for Home & Business</span>}
                </div>
                <p className={`mt-4 text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>{p.desc}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-bold">${p.price}</span>
                  <span className={`pb-2 text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>/ per month</span>
                </div>
                <a href="#" className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${p.popular ? "bg-background text-foreground" : "bg-primary text-primary-foreground"}`}>
                  {p.cta} <Arrow className="h-3 w-3" />
                </a>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-4 w-4 ${p.popular ? "text-primary-foreground" : "text-primary"}`} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary">— Our Recent Projects</span>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Delivering Excellence in Every Electrical Project
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary">
              View Project Details <Arrow className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Smart Home Electrical Installation", status: "Completed", date: "March 12, 2026", desc: "Complete smart wiring and automation setup for a modern residential property." },
              { title: "Commercial Lighting Upgrade", status: "In Progress", date: "April 02, 2026", desc: "Upgraded lighting system for a commercial office to improve energy efficiency." },
              { title: "Industrial Panel Installation", status: "Completed", date: "May 18, 2026", desc: "Robust electrical panel system installed for a large industrial facility." },
            ].map((p) => (
              <div key={p.title} className="overflow-hidden rounded-2xl border border-white/10 bg-card/60">
                <Placeholder label="Project Image" className="aspect-[4/3] w-full rounded-none" />
                <div className="p-6">
                  <div className="flex gap-2 text-xs">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-primary">{p.status}</span>
                    <span className="rounded-full bg-secondary/60 px-3 py-1 text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-primary"><Bolt className="h-6 w-6" /> VOLTRA</div>
            <p className="mt-4 text-sm text-muted-foreground">Professional electrical services for homes and businesses—safe, reliable, and built to last.</p>
          </div>
          {[
            { h: "Company", l: ["About Us", "Services", "Projects", "Contact"] },
            { h: "Services", l: ["Installations", "Repairs", "Lighting", "Panel Upgrades"] },
            { h: "Contact", l: ["support@voltra.com", "+1 (800) 555-2487", "24/7 Emergency", "Mon–Sat 8am–8pm"] },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="font-semibold">{c.h}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.l.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-muted-foreground">
          © 2026 Voltra. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
