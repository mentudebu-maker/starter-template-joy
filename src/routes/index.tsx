import { createFileRoute } from "@tanstack/react-router";
import technicianAsset from "@/assets/technician.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltra — Appliance Repair Experts" },
      { name: "description", content: "Fast, reliable repair for washing machines, refrigerators, ovens, stoves, generators and more — same-day service and 24/7 emergency support." },
      { property: "og:title", content: "Voltra — Appliance Repair Experts" },
      { property: "og:description", content: "Trusted repair for washing machines, refrigerators, ovens, stoves and generators." },
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
            <span className="flex items-center gap-2"><Bolt className="h-4 w-4" /> 24/7 Emergency Appliance Repair</span>
            <span>✉ support@voltrarepair.com</span>
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
              <Bolt /> Professional Appliance Repair
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Your <span className="text-primary">Trusted Experts</span> for Home Appliance Repair
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              We fix washing machines, refrigerators, ovens, stoves, generators and more — fast, affordable, and guaranteed. Same-day service for homes and businesses.
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
                <h3 className="text-lg font-semibold">10K+ Appliances Repaired</h3>
                <p className="mt-2 text-sm text-muted-foreground">From fridges to generators — thousands of happy households served.</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10">G</div>
                  <div>
                    <div className="text-primary">★★★★★</div>
                    <div className="text-xs text-muted-foreground">6K Satisfied Client Reviews</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                <h3 className="text-lg font-semibold">Same-Day Service</h3>
                <p className="mt-2 text-sm opacity-80">Book before noon — fixed today</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full border-4 border-primary-foreground/30">
                    <Bolt className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-xs">First-visit Fix Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-primary/20 to-secondary/40">
              <img
                src={technicianAsset.url}
                alt="Certified appliance repair technician"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <div className="absolute left-4 top-10 rounded-full bg-card/90 px-4 py-2 text-sm shadow"><Check className="mr-2 inline h-4 w-4 text-primary" />Free Diagnostic Visit</div>
            <div className="absolute left-4 top-24 rounded-full bg-card/90 px-4 py-2 text-sm shadow"><Check className="mr-2 inline h-4 w-4 text-primary" />Book a Repair Instantly</div>
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
              Keeping Your Home Running with Trusted Appliance Repair
            </h2>
            <p className="mt-6 text-muted-foreground">
              At Voltra, we specialize in repairing major household appliances — washing machines, refrigerators, ovens, stoves, dryers and generators. Our certified technicians carry common parts on the truck so most jobs are done in a single visit.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-card/60 p-6">
              <div className="text-primary">★★★★★</div>
              <p className="mt-3 text-lg">
                “Voltra fixed our refrigerator and oven on the same visit — fast, clean, and fairly priced. They've become our go-to for every appliance.”
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
              {["24/7 Emergency Repairs", "Certified Technicians", "All Major Brands", "90-Day Repair Warranty"].map((f) => (
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
                Why Homeowners Choose Voltra for Appliance Repair
              </h2>
              <p className="mt-6 text-muted-foreground">
                Genuine parts, transparent pricing and technicians trained on every major brand — from Samsung and LG to Whirlpool, Bosch and Generac.
              </p>
              {/* YouTube video placeholder */}
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Voltra appliance repair — intro video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Replace the embed URL with your own YouTube video.</p>
            </div>
            <div className="space-y-4">
              {[
                "Certified & Experienced Technicians",
                "24/7 Emergency Appliance Support",
                "Advanced Tools & Modern Technology",
                "All Major Brands & Models",
                "Up-Front Pricing & Repair Warranty",
              ].map((title, i) => (
                <details key={title} open={i === 0} className="group rounded-2xl border border-white/10 bg-card/60 p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                    {title}
                    <span className="text-primary group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Every job is handled by a factory-trained technician using genuine parts and best-practice repair procedures — backed by our 90-day workmanship warranty.
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
              Repair Services for Every Major Appliance
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              From the kitchen to the laundry room to the back-up generator — we diagnose, repair and service the appliances your home depends on.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Washing Machine Repair",
              "Refrigerator Repair",
              "Oven & Stove Repair",
              "Dryer Repair",
              "Dishwasher Repair",
              "Generator Repair & Service",
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
              Smart Appliance Repair Built Around Speed, Safety & Genuine Parts
            </h2>
            <p className="mt-6 text-muted-foreground">
              Our certified technicians service every major brand of washer, fridge, oven, stove and generator — using modern diagnostics and OEM parts.
            </p>
            <div className="mt-8 space-y-5">
              {[
                "Certified & Skilled Technicians",
                "Advanced Appliance Diagnostics",
                "Genuine OEM Replacement Parts",
              ].map((t) => (
                <div key={t} className="flex gap-4 rounded-2xl border border-white/10 bg-card/60 p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Bolt className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Trained on every major brand and model, with the tools and parts to fix it right the first time.</p>
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
                  Hassle-Free Appliance Repair Just a Click Away
                </h2>
                <p className="mt-6 max-w-xl opacity-80">
                  Book a technician in minutes — fast estimates, transparent pricing and expert support for every major appliance.
                </p>
                <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground">
                  Get Free Quote <Arrow className="h-3 w-3" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[["10K+", "Appliances Repaired"], ["3500+", "Happy Households"], ["1000+", "Emergency Calls"], ["100+", "Certified Techs"]].map(([n, l]) => (
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
              Affordable Repair Plans for Households, Landlords & Businesses
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              { name: "ESSENTIAL", price: 149, popular: false, desc: "Single-visit repair for one appliance", features: ["Diagnostic inspection", "Minor repair service", "Belt, hose & seal replacement", "Basic part replacement (labor)", "Safety check on appliance", "Standard service scheduling"], cta: "Book Essential Plan" },
              { name: "MOST POPULAR", price: 399, popular: true, desc: "Quarterly maintenance for the whole home", features: ["Priority appliance servicing", "Quarterly maintenance visits", "Fridge, washer & oven tune-up", "Generator load test", "Faster emergency response", "Dedicated support scheduling", "Service performance reports"], cta: "Start Maintenance Plan" },
              { name: "PRIORITY PRO", price: 799, popular: false, desc: "24/7 coverage for landlords & businesses", features: ["24/7 priority emergency repair", "Advanced diagnostics & testing", "Multi-unit appliance coverage", "Annual generator overhaul", "Scheduled commercial inspections", "Direct priority contact support"], cta: "Book Priority Plan" },
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
              <span className="text-xs uppercase tracking-[0.4em] text-primary">— Recent Repairs</span>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Real Repairs, Happy Households
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary">
              View All Repairs <Arrow className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "LG Front-Load Washer Rebuild", status: "Completed", date: "March 12, 2026", desc: "Replaced drum bearings and door seal on a 6-year-old front-loader — back in service the same day." },
              { title: "Samsung Smart Fridge Repair", status: "Completed", date: "April 02, 2026", desc: "Diagnosed and replaced a failed inverter compressor; restored cooling and ice-maker function." },
              { title: "Generac Standby Generator Service", status: "In Progress", date: "May 18, 2026", desc: "Annual overhaul, load test and battery replacement on a 22kW residential standby generator." },
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
            <p className="mt-4 text-sm text-muted-foreground">Professional appliance repair for homes and businesses — washing machines, refrigerators, ovens, stoves, generators and more.</p>
          </div>
          {[
            { h: "Company", l: ["About Us", "Services", "Projects", "Contact"] },
            { h: "Services", l: ["Washing Machines", "Refrigerators", "Ovens & Stoves", "Generators"] },
            { h: "Contact", l: ["support@voltrarepair.com", "+1 (800) 555-2487", "24/7 Emergency", "Mon–Sat 8am–8pm"] },
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
