"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Lock,
  Mail,
  PieChart,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" }
} as const;

const navItems = ["About", "Skills", "Projects", "Dashboards", "Resume", "Contact"];

const heroStats = [
  { label: "Completed Project", value: "1", detail: "Power BI case study" },
  { label: "Dashboards Built", value: "1", detail: "interactive sales dashboard" },
  { label: "Technologies Used", value: "4", detail: "Power BI, SQL, Excel, Python" }
];

const skillGroups = [
  {
    title: "Data Analysis",
    icon: FileSpreadsheet,
    skills: ["Excel", "SQL", "Power BI", "Python"]
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Excel Dashboards"]
  },
  {
    title: "Database Tools",
    icon: Database,
    skills: ["MySQL"]
  },
  {
    title: "Analytics Techniques",
    icon: Layers3,
    skills: ["Data Cleaning", "Data Transformation", "KPI Analysis", "Trend Analysis", "Dashboard Development"]
  }
];

const projectFilters = ["All", "Excel", "SQL", "Power BI", "Python"] as const;

const projects = [
  {
    title: "Interactive E-commerce Sales Analytics Dashboard (2022-2024)",
    category: "Power BI",
    description:
      "An interactive Power BI dashboard analyzing e-commerce sales performance across products, categories, regions, and time to uncover trends, evaluate profitability, and support data-driven business decisions.",
    problem:
      "E-commerce stakeholders needed a clear way to understand revenue trends, profitability, product performance, category performance, regional performance, and year-over-year growth.",
    insights:
      "Built an executive-style one-page dashboard with dynamic KPI cards, slicers, custom DAX measures, and recommendations for improving profitability and regional performance.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    href: "/projects/ecommerce-sales-dashboard",
    chart: [62, 75, 58, 86, 79, 94],
    status: "completed"
  },
  {
    title: "Excel Business Reporting Project",
    category: "Excel",
    description: "Planned Excel analytics project covering reporting automation, KPI tracking, and dashboard storytelling.",
    problem: "Reserved for a future Excel case study.",
    insights: "Coming soon.",
    tools: ["Excel", "Power Query", "Pivot Tables"],
    href: "",
    chart: [34, 46, 42, 55, 49, 60],
    status: "coming-soon"
  },
  {
    title: "SQL Customer Analytics Project",
    category: "SQL",
    description: "Planned SQL project focused on querying, segmentation, business analysis, and insight generation.",
    problem: "Reserved for a future SQL case study.",
    insights: "Coming soon.",
    tools: ["SQL", "MySQL"],
    href: "",
    chart: [30, 39, 44, 52, 57, 64],
    status: "coming-soon"
  },
  {
    title: "Python Data Analysis Project",
    category: "Python",
    description: "Planned Python project covering data cleaning, exploratory analysis, and business recommendations.",
    problem: "Reserved for a future Python case study.",
    insights: "Coming soon.",
    tools: ["Python", "Pandas", "Data Cleaning"],
    href: "",
    chart: [28, 36, 45, 50, 58, 66],
    status: "coming-soon"
  }
];

const dashboards = [
  {
    title: "E-commerce Sales Analytics Dashboard",
    objective: "Analyze revenue, profit, quantity sold, product performance, category performance, regional performance, and year-over-year growth across 2022-2024.",
    kpis: ["Total Revenue", "Total Profit", "Quantity Sold", "YoY Revenue Growth", "YoY Profit Growth"],
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    embedUrl: ""
  }
];

const certifications = [
  {
    title: "Data Analysis Certificate of Completion",
    organization: "Digital World Academy",
    date: "Completed",
    verification: "https://example.com"
  }
];

const resumeHighlights = [
  {
    title: "Education",
    icon: GraduationCap,
    items: ["First Class Graduate in Mechanical Engineering", "Strong analytical foundation applied to business intelligence and data analytics"]
  },
  {
    title: "Technical Skills",
    icon: ShieldCheck,
    items: ["Power BI, SQL, Excel, Python, MySQL", "Data cleaning, data transformation, KPI analysis, dashboard development, and insight communication"]
  },
  {
    title: "Projects",
    icon: BriefcaseBusiness,
    items: ["Interactive E-commerce Sales Analytics Dashboard (2022-2024)", "Project work structured around business problems, insights, and recommendations"]
  },
  {
    title: "Certifications",
    icon: Award,
    items: ["Data Analysis Certificate of Completion from Digital World Academy", "Continuing development in analytics, visualization, and business intelligence"]
  }
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.tools.some((tool) => tool.toLowerCase().includes(activeFilter.toLowerCase())) || project.category === activeFilter
    );
  }, [activeFilter]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormState("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-ink">
      <Header />

      <section id="top" className="section-shell grid min-h-[calc(100vh-108px)] items-center gap-12 py-14 lg:min-h-[calc(100vh-64px)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div {...fadeUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-accent">
            <Sparkles size={16} aria-hidden="true" />
            Data Analyst based in Nigeria
          </div>
          <p className="mb-4 text-lg font-semibold text-muted">Andrew Udokang</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Turning Data Into Business Insights
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Data Analyst skilled in Power BI, SQL, Excel, and Python. I turn raw data into clear dashboards, KPI stories, and actionable recommendations for business decision-making.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`${basePath}/resume.pdf`} className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accentDark">
              <ArrowDownToLine size={17} aria-hidden="true" />
              Download Resume
            </a>
            <a href="#projects" className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-line px-5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent">
              View Projects
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }} className="grid gap-5">
          <div className="relative overflow-hidden rounded-lg border border-line bg-surface p-8">
            <div className="mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center rounded-lg border border-line bg-white">
              <div className="grid place-items-center text-center">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-blue-50 text-accent">
                  <UserRound size={64} aria-hidden="true" />
                </div>
                <p className="text-base font-bold text-ink">Andrew Udokang</p>
                <p className="mt-2 max-w-56 text-sm leading-6 text-muted">Data Analyst | Power BI | SQL | Excel | Python</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="rounded-lg border border-line bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{stat.label}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about" className="border-y border-line bg-surface py-20">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div {...fadeUp}>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink md:text-4xl">
              I build dashboards and analysis that help teams understand what is happening and what to do next.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              <p>
                I am Andrew Udokang, a Data Analyst in Nigeria with a First Class background in Mechanical Engineering and a growing portfolio in business intelligence, dashboard development, and data storytelling.
              </p>
              <p>
                My strength is combining analytical problem-solving with practical data tools: Power BI for interactive dashboards, SQL for structured analysis, Excel for reporting, and Python for data cleaning and exploration.
              </p>
              <p>
                I focus on turning raw data into actionable business insights through clean KPI design, thoughtful visualization, and concise recommendations that support better decisions.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-ink">Insight Workflow</p>
                <p className="mt-1 text-sm text-muted">Raw data to business action</p>
              </div>
              <TrendingUp className="text-accent" size={24} aria-hidden="true" />
            </div>
            <div className="space-y-4">
              {["Clean and model data", "Analyze trends and KPIs", "Build dashboard views", "Recommend business actions"].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-bold text-accent">{index + 1}</span>
                  <div className="h-3 flex-1 rounded-full bg-surface">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${72 + index * 6}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
                      className="h-3 rounded-full bg-accent"
                    />
                  </div>
                  <span className="w-32 text-sm font-semibold text-ink">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Dashboard clarity", "KPI thinking", "Data storytelling", "Business insight"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md border border-line px-3 py-3 text-sm font-semibold text-ink">
                  <CheckCircle2 size={16} className="text-accent" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section-shell py-20">
        <SectionIntro
          eyebrow="Skills"
          title="A focused analytics toolkit for Data Analyst and BI Analyst roles."
          text="Tools and techniques used to clean data, analyze performance, build dashboards, and communicate insights to business stakeholders."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-soft"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-semibold text-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="border-y border-line bg-surface py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Projects"
              title="Business intelligence project work with room for future case studies."
              text="The completed Power BI project is available now. Excel, SQL, and Python projects are intentionally marked as coming soon until their case studies are ready."
            />
            <div className="flex flex-wrap gap-2" aria-label="Project filters">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`focus-ring h-10 rounded-md border px-4 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "border-accent bg-accent text-white"
                      : "border-line bg-white text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="dashboards" className="section-shell py-20">
        <SectionIntro
          eyebrow="Dashboard Showcase"
          title="Power BI dashboard designed for sales performance review."
          text="A focused dashboard showcase for the completed e-commerce analytics project, with placeholders ready for dashboard screenshots or embeds."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-1">
          {dashboards.map((dashboard, index) => (
            <motion.article key={dashboard.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <DashboardPreview title={dashboard.title} embedUrl={dashboard.embedUrl} />
              <h3 className="mt-5 text-lg font-bold text-ink">{dashboard.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{dashboard.objective}</p>
              <div className="mt-5">
                <p className="text-sm font-bold text-ink">Key KPIs</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {dashboard.kpis.map((kpi) => (
                    <span key={kpi} className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-accent">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold text-muted">Tools: {dashboard.tools.join(", ")}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certifications" className="border-y border-line bg-surface py-20">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Certification"
            title="Relevant data analysis training."
            text="A concise certification section focused on Andrew's current data analysis credential."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {certifications.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-soft"
              >
                <div className="grid aspect-[4/3] place-items-center rounded-md border border-line bg-surface">
                  <div className="text-center">
                    <Award className="mx-auto text-accent" size={44} aria-hidden="true" />
                    <p className="mt-3 text-sm font-bold text-ink">Certificate Upload Placeholder</p>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{certificate.title}</h3>
                <p className="mt-2 text-sm text-muted">{certificate.organization}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{certificate.date}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...fadeUp}>
            <SectionLabel>Resume</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink md:text-4xl">
              A concise profile for Data Analyst and BI Analyst opportunities.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Andrew brings a strong analytical foundation, practical dashboard development skills, and a business-focused approach to insight generation.
            </p>
            <a href={`${basePath}/resume.pdf`} className="focus-ring mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accentDark">
              <ArrowDownToLine size={17} aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {resumeHighlights.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.article key={section.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{section.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                        <CheckCircle2 className="mt-1 shrink-0 text-accent" size={16} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-ink py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeUp}>
            <p className="text-sm font-bold uppercase text-blue-200">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">
              Let&apos;s talk about data analyst and business intelligence opportunities.
            </h2>
            <p className="mt-4 text-base leading-7 text-blue-100">
              I&apos;m open to roles where I can contribute through dashboard development, SQL analysis, data visualization, and practical business insight.
            </p>
            <div className="mt-8 grid gap-3">
              <SocialLink href="#contact" icon={Mail} label="Use contact form" />
              <SocialLink href="https://www.linkedin.com/in/andrewudokang" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://github.com/andrewudokang" icon={Github} label="GitHub" />
            </div>
          </motion.div>

          <motion.form {...fadeUp} transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }} onSubmit={handleSubmit} className="rounded-lg border border-white/15 bg-white p-6 text-ink shadow-soft">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-ink">
                Name
                <input name="from_name" required className="mt-2 h-12 w-full rounded-md border border-line px-3 text-sm outline-none transition focus:border-accent" placeholder="Your name" />
              </label>
              <label className="text-sm font-semibold text-ink">
                Email
                <input name="reply_to" type="email" required className="mt-2 h-12 w-full rounded-md border border-line px-3 text-sm outline-none transition focus:border-accent" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold text-ink">
              Message
              <textarea name="message" required rows={5} className="mt-2 w-full rounded-md border border-line px-3 py-3 text-sm outline-none transition focus:border-accent" placeholder="Tell me about the role or opportunity." />
            </label>
            <button type="submit" disabled={formState === "sending"} className="focus-ring mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accentDark disabled:cursor-not-allowed disabled:opacity-70">
              <Send size={17} aria-hidden="true" />
              {formState === "sending" ? "Sending..." : "Send Message"}
            </button>
            {formState === "sent" && <p className="mt-3 text-sm font-semibold text-green-500">Message sent successfully.</p>}
            {formState === "error" && (
              <p className="mt-3 text-sm font-semibold text-orange-300">
                EmailJS is not configured yet. Please use the email link for now.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="focus-ring text-sm font-bold uppercase text-ink">
          Andrew Udokang
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`/#${item.toLowerCase()}`} className="focus-ring text-sm font-medium text-muted transition hover:text-accent">
              {item}
            </a>
          ))}
        </div>
        <a href={`${basePath}/resume.pdf`} className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accentDark">
          <ArrowDownToLine size={16} aria-hidden="true" />
          Resume
        </a>
      </nav>
      <div className="section-shell flex h-11 items-center gap-5 overflow-x-auto border-t border-line lg:hidden">
        {navItems.map((item) => (
          <a key={item} href={`/#${item.toLowerCase()}`} className="focus-ring shrink-0 text-sm font-semibold text-muted transition hover:text-accent">
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Andrew Udokang. Data Analyst portfolio for business intelligence and analytics roles.</p>
        <div className="flex items-center gap-2 text-ink">
          <BookOpen size={16} aria-hidden="true" />
          <span>Power BI, SQL, Excel, Python</span>
        </div>
      </div>
    </footer>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: isComingSoon ? 0.58 : 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      whileHover={isComingSoon ? undefined : { y: -5 }}
      className={`overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow ${isComingSoon ? "grayscale" : "hover:shadow-soft"}`}
    >
      <ProjectPreview title={project.title} values={project.chart} />
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold text-accent">{project.category}</span>
          {isComingSoon && (
            <span className="inline-flex items-center gap-1 rounded-md border border-line px-3 py-1.5 text-xs font-bold text-muted">
              <Lock size={13} aria-hidden="true" />
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5">
          <p className="text-sm font-bold text-ink">Tech Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          {isComingSoon ? (
            <button disabled className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-line px-4 text-sm font-semibold text-muted opacity-70">
              <Lock size={16} aria-hidden="true" />
              See Details
            </button>
          ) : (
            <Link href={project.href} className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accentDark">
              See Details
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-sm font-bold uppercase text-accent">{children}</p>;
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div {...fadeUp} className="max-w-2xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted">{text}</p>
    </motion.div>
  );
}

function ProjectPreview({ title, values }: { title: string; values: number[] }) {
  return (
    <div className="border-b border-line bg-white p-5" role="img" aria-label={`${title} project image placeholder`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-muted">Project Preview</p>
          <p className="mt-1 text-sm font-semibold text-ink">{title}</p>
        </div>
        <PieChart className="text-accent" size={24} aria-hidden="true" />
      </div>
      <div className="mt-5 flex h-36 items-end gap-2 rounded-md bg-surface p-4">
        {values.map((value, index) => (
          <motion.span
            key={`${title}-${value}-${index}`}
            initial={{ height: 0 }}
            whileInView={{ height: `${value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.05, ease: "easeOut" }}
            className="w-full rounded-t-sm bg-accent"
            style={{ opacity: 0.42 + index * 0.08 }}
          />
        ))}
      </div>
    </div>
  );
}

function DashboardPreview({ title, embedUrl }: { title: string; embedUrl: string }) {
  if (embedUrl) {
    return (
      <iframe
        title={title}
        src={embedUrl}
        className="aspect-video w-full rounded-md border border-line"
        loading="lazy"
        allowFullScreen
      />
    );
  }

  return (
    <div className="aspect-video rounded-md border border-line bg-surface p-4" role="img" aria-label={`${title} Power BI dashboard preview placeholder`}>
      <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-3">
        <div className="grid gap-3">
          <div className="rounded-md bg-white p-3">
            <p className="text-xs font-bold text-muted">Sales</p>
            <p className="mt-2 text-xl font-bold text-accent">2022-2024</p>
          </div>
          <div className="rounded-md bg-white p-3">
            <p className="text-xs font-bold text-muted">Trend</p>
            <div className="mt-3 h-12 rounded-sm bg-blue-50" />
          </div>
        </div>
        <div className="flex items-end gap-1 rounded-md bg-white p-3">
          {[54, 70, 46, 82, 76, 90].map((height, index) => (
            <span key={`${title}-${height}-${index}`} className="w-full rounded-t-sm bg-accent" style={{ height: `${height}%`, opacity: 0.45 + index * 0.08 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: typeof Mail; label: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 4 }}
      className="focus-ring inline-flex h-12 items-center gap-3 rounded-md border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-blue-200 hover:bg-white/10"
    >
      <Icon size={18} aria-hidden="true" />
      {label}
    </motion.a>
  );
}
