import { createFileRoute } from "@tanstack/react-router";
import electricianImg from "@/assets/electrician.png";

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
      <section className="relative overflow-visible bg-[#153320] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-20 pb-10 lg:grid-cols-2 relative z-10">
          <div className="z-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1e452c] border border-[#FFB800]/20 px-4 py-2 text-sm text-white font-medium">
              <Bolt className="h-4 w-4 text-[#FFB800]" /> Professional Electrical Services
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl text-white">
              Your <span className="text-[#FFB800]">Trusted Experts</span> for All <br className="hidden md:block"/>
              Electrical Needs
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-lg text-white/90 font-medium">
              We provide safe, reliable, and efficient electrical solutions—from wiring and panel upgrades to emergency repairs—tailored to homes and commercial spaces.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#" className="inline-flex h-14 items-center gap-4 rounded-full bg-[#FFB800] pl-6 pr-2 text-sm font-bold text-black hover:bg-[#FFB800]/90 transition-colors">
                GET FREE QUOTE 
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#153320] text-white">
                  <Arrow className="h-4 w-4 rotate-45" />
                </div>
              </a>
              <a href="#" className="inline-flex h-14 items-center gap-3 rounded-full border border-[#6B7280] bg-[#1a3a24] pr-6 pl-2 text-sm font-bold text-[#FFB800] hover:bg-[#1a3a24]/80 transition-colors">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#FFB800] text-black">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 ml-1"><path d="M8 5v14l11-7z" /></svg>
                </div>
                WATCH VIDEO
              </a>
            </div>

            {/* Bottom cards */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl">
              {/* Card 1 */}
              <div className="rounded-xl bg-white p-6 text-black shadow-lg">
                <h3 className="text-base font-bold">10K+ Successful Repairs</h3>
                <p className="mt-2 text-sm text-gray-600 font-medium">Serving thousands of satisfied residential and commercial clients.</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gray-100">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  </div>
                  <div>
                    <div className="text-[#FFB800] text-lg tracking-widest">★★★★★</div>
                    <div className="text-xs font-bold text-gray-800">6K Satisfied Client Reviews</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl bg-[#FFB800] p-6 text-black shadow-lg">
                <h3 className="text-base font-bold">Check Your Power Status</h3>
                <p className="mt-1 text-sm font-medium">System performance optimized</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="relative grid h-14 w-14 place-items-center rounded-full border-[4px] border-black/10">
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#000" strokeWidth="4" strokeDasharray="95, 100" />
                    </svg>
                    <Bolt className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold leading-none">95%</div>
                    <div className="text-sm font-medium mt-1">Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:static flex justify-center lg:justify-end mt-10 lg:mt-0 z-10">
            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-transparent via-[#FFB800]/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>

            <div className="relative w-full max-w-[500px] z-10">
              {/* Electrician Image */}
              <img
                src={electricianImg}
                alt="Certified electrical technician"
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
              />

              {/* Floating Badge 1 */}
              <div className="absolute top-[25%] left-[-15%] rounded-full bg-[#112a1a] px-4 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,184,0,0.15)] z-20 flex items-center gap-2 border border-[#FFB800]/20 text-white">
                <Check className="h-4 w-4 text-[#FFB800]" /> Free Electrical Inspection
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute top-[45%] left-[-5%] rounded-full bg-[#112a1a] px-4 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,184,0,0.15)] z-20 flex items-center gap-2 border border-[#FFB800]/20 text-white">
                <Check className="h-4 w-4 text-[#FFB800]" /> Book a Service Instantly
              </div>
            </div>
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

      {/* Contact */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary">— Contact Us</span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Ready to Fix Your Electrical Issues?
              </h2>
              <p className="mt-6 text-muted-foreground">
                Get in touch with our certified electricians today. We offer 24/7 emergency services, transparent pricing, and guaranteed satisfaction.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Bolt className="h-5 w-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us 24/7</h3>
                    <p className="text-muted-foreground">+1 (800) 555-2487</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Bolt className="h-5 w-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Support</h3>
                    <p className="text-muted-foreground">support@voltrarepair.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Bolt className="h-5 w-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-muted-foreground">123 Energy Ave, Electra City, EC 90210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#153320] p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Request a Service</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">First Name</label>
                    <input type="text" className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Last Name</label>
                    <input type="text" className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email Address</label>
                  <input type="email" className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone Number</label>
                  <input type="tel" className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none" placeholder="(555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">How can we help?</label>
                  <textarea rows={4} className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none" placeholder="Describe your electrical issue..."></textarea>
                </div>
                <button type="button" className="mt-6 w-full rounded-full bg-[#FFB800] py-4 text-center font-bold text-black hover:bg-[#FFB800]/90 transition-colors">
                  SEND MESSAGE
                </button>
              </form>
            </div>
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
