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
  Mail,
  PieChart,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound
} from "lucide-react";
import { useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" }
} as const;

const navItems = ["About", "Skills", "Projects", "Dashboards", "Resume", "Contact"];

const heroStats = [
  { label: "Projects Completed", value: "8+", detail: "case-study ready" },
  { label: "Dashboards Built", value: "5+", detail: "Power BI and Excel" },
  { label: "Technologies Used", value: "7", detail: "analytics stack" }
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
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
  {
    title: "Sales Performance Dashboard",
    problem: "Sales leaders needed a faster way to monitor revenue, product performance, and regional gaps without manually combining monthly spreadsheets.",
    insights: "Identified underperforming product categories, highlighted regions with margin pressure, and created an executive KPI view for weekly reviews.",
    tools: ["Power BI", "Excel", "DAX"],
    github: "https://github.com",
    live: "https://app.powerbi.com",
    chart: [64, 78, 52, 88, 74, 92]
  },
  {
    title: "Customer Churn SQL Analysis",
    problem: "A subscription business needed to understand which customer segments were most likely to churn and where retention campaigns should focus.",
    insights: "Segmented churn by tenure and plan type, surfaced retention risk patterns, and recommended targeted follow-up for high-value cohorts.",
    tools: ["SQL", "MySQL", "Power BI"],
    github: "https://github.com",
    live: "https://app.powerbi.com",
    chart: [42, 48, 60, 57, 69, 76]
  },
  {
    title: "Retail Inventory Analysis",
    problem: "Store managers lacked visibility into slow-moving products, stockouts, and reorder priorities across multiple retail locations.",
    insights: "Ranked inventory risk, compared sell-through trends, and built recommendations to reduce overstock while protecting high-demand items.",
    tools: ["Python", "Excel", "SQL"],
    github: "https://github.com",
    live: "https://example.com",
    chart: [72, 61, 83, 68, 91, 80]
  },
  {
    title: "Operations KPI Tracker",
    problem: "Operations managers needed a single view of SLA performance, backlog movement, and weekly variance across service teams.",
    insights: "Created a repeatable Excel dashboard that reduced manual reporting time and made SLA exceptions visible before review meetings.",
    tools: ["Excel", "Power Query", "KPI Analysis"],
    github: "https://github.com",
    live: "https://example.com",
    chart: [58, 66, 70, 82, 85, 89]
  }
];

const dashboards = [
  {
    title: "Executive Revenue Dashboard",
    objective: "Help leadership track revenue, margin, and regional sales performance in one weekly view.",
    kpis: ["Revenue", "Gross Margin", "Regional Growth", "Top Products"],
    tools: ["Power BI", "DAX", "Excel"],
    embedUrl: ""
  },
  {
    title: "Customer Retention Dashboard",
    objective: "Monitor churn indicators, customer cohorts, and retention opportunities across subscription plans.",
    kpis: ["Churn Rate", "Retention", "Customer Lifetime Value", "Cohort Health"],
    tools: ["Power BI", "SQL", "MySQL"],
    embedUrl: ""
  },
  {
    title: "Operations Performance Dashboard",
    objective: "Track SLA performance, backlog, team productivity, and service quality for operational decision-making.",
    kpis: ["SLA Rate", "Backlog", "Resolution Time", "Quality Score"],
    tools: ["Power BI", "Excel", "Power Query"],
    embedUrl: ""
  }
];

const certifications = [
  {
    title: "Data Analytics Professional Certificate",
    organization: "Google Career Certificates",
    date: "2026",
    verification: "https://www.coursera.org"
  },
  {
    title: "Power BI Data Analyst Associate",
    organization: "Microsoft",
    date: "2026",
    verification: "https://learn.microsoft.com"
  },
  {
    title: "SQL for Data Analysis",
    organization: "Analytics Training Platform",
    date: "2026",
    verification: "https://example.com"
  }
];

const resumeHighlights = [
  {
    title: "Education",
    icon: GraduationCap,
    items: ["Degree or diploma in a data, business, finance, economics, or technology-related field", "Continuous learning through analytics projects and certifications"]
  },
  {
    title: "Technical Skills",
    icon: ShieldCheck,
    items: ["Excel, SQL, Power BI, Python, MySQL", "Data cleaning, KPI analysis, dashboard development, and stakeholder reporting"]
  },
  {
    title: "Projects",
    icon: BriefcaseBusiness,
    items: ["Sales, churn, inventory, and operations analytics projects", "Portfolio case studies structured around business problems and measurable insights"]
  },
  {
    title: "Certifications",
    icon: Award,
    items: ["Data analytics, Power BI, and SQL certifications", "Verification-ready certificate links for recruiter review"]
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
      project.tools.some((tool) => tool.toLowerCase().includes(activeFilter.toLowerCase()))
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
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="focus-ring text-sm font-bold uppercase text-ink">
            Data Analyst
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring text-sm font-medium text-muted transition hover:text-accent">
                {item}
              </a>
            ))}
          </div>
          <a href="#resume" className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accentDark">
            <ArrowDownToLine size={16} aria-hidden="true" />
            Resume
          </a>
        </nav>
        <div className="section-shell flex h-11 items-center gap-5 overflow-x-auto border-t border-line lg:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring shrink-0 text-sm font-semibold text-muted transition hover:text-accent">
              {item}
            </a>
          ))}
        </div>
      </header>

      <section id="top" className="section-shell grid min-h-[calc(100vh-108px)] items-center gap-12 py-14 lg:min-h-[calc(100vh-64px)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div {...fadeUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-accent">
            <Sparkles size={16} aria-hidden="true" />
            Entry-level Data Analyst portfolio
          </div>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Turning Data Into Business Insights
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Data Analyst skilled in Excel, SQL, Power BI and Python.
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
                <p className="text-base font-bold text-ink">Data Analyst</p>
                <p className="mt-2 max-w-56 text-sm leading-6 text-muted">Excel, SQL, Power BI, Python</p>
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
              I connect business questions to clear analysis and practical recommendations.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              <p>
                My data analytics journey is built around curiosity, structure, and a strong interest in how businesses make better decisions. I enjoy taking raw data, cleaning it, finding the patterns that matter, and translating those patterns into insight.
              </p>
              <p>
                I approach problems by first clarifying the decision that needs support, then choosing the right mix of Excel, SQL, Power BI, and Python to explore the data. The goal is not just a clean chart, but a useful answer.
              </p>
              <p>
                My portfolio focuses on data storytelling: dashboards, reports, and case studies that help stakeholders understand what changed, why it matters, and what action to take next.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-ink">Insight Workflow</p>
                <p className="mt-1 text-sm text-muted">Question to decision</p>
              </div>
              <TrendingUp className="text-accent" size={24} aria-hidden="true" />
            </div>
            <div className="space-y-4">
              {["Clean data source", "Analyze trends", "Build dashboard", "Recommend action"].map((step, index) => (
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
                  <span className="w-28 text-sm font-semibold text-ink">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["KPI clarity", "Trend context", "Clean models", "Actionable story"].map((item) => (
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
          title="A focused analytics toolkit for entry-level data analyst roles."
          text="Grouped around the tools and techniques recruiters most often screen for in data analyst and business intelligence roles."
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
              title="Case studies that show business thinking, not just tools."
              text="Each project card is structured for recruiter scanning: business problem, key insight, tools, and links to evidence."
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
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow hover:shadow-soft"
              >
                <ProjectPreview title={project.title} values={project.chart} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink">{project.title}</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <InfoBlock title="Business Problem" text={project.problem} />
                    <InfoBlock title="Key Insights" text={project.insights} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href={project.github} className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent">
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </a>
                    <a href={project.live} className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accentDark">
                      <BarChart3 size={16} aria-hidden="true" />
                      Live Dashboard
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboards" className="section-shell py-20">
        <SectionIntro
          eyebrow="Dashboard Showcase"
          title="Power BI dashboards designed for business review meetings."
          text="Each dashboard connects a business objective to the KPIs and analysis workflow a stakeholder would need for action."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
            eyebrow="Certifications"
            title="Credential cards that give recruiters quick validation."
            text="Relevant analytics credentials that support the technical skills shown in the project work."
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
                <div className="grid aspect-[4/3] place-items-center rounded-md border border-line bg-white">
                  <div className="text-center">
                    <Award className="mx-auto text-accent" size={44} aria-hidden="true" />
                    <p className="mt-3 text-sm font-bold text-ink">{certificate.organization}</p>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{certificate.title}</h3>
                <p className="mt-2 text-sm text-muted">{certificate.organization}</p>
                <p className="mt-1 text-sm font-semibold text-ink">Earned: {certificate.date}</p>
                <a href={certificate.verification} className="focus-ring mt-5 inline-flex h-10 items-center gap-2 rounded-md border border-line px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent">
                  Verify
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
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
              A concise resume section for fast recruiter review.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              This section mirrors what hiring teams need to validate quickly: education, technical skills, projects, and certifications.
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
              Let&apos;s talk about analytics roles, dashboards, and business questions.
            </h2>
            <p className="mt-4 text-base leading-7 text-blue-100">
              I&apos;m ready to contribute to teams that need clean analysis, reliable reporting, and data stories that support better decisions.
            </p>
            <div className="mt-8 grid gap-3">
              <SocialLink href="mailto:hello@example.com" icon={Mail} label="hello@example.com" />
              <SocialLink href="https://www.linkedin.com" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://github.com" icon={Github} label="GitHub" />
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
            {formState === "sent" && <p className="mt-3 text-sm font-semibold text-green-700">Message sent successfully.</p>}
            {formState === "error" && (
              <p className="mt-3 text-sm font-semibold text-red-700">
                EmailJS is not configured yet. Add your EmailJS environment variables or use the email link.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Data Analyst Portfolio. Built for recruiter scanning and business-focused case studies.</p>
          <div className="flex items-center gap-2 text-ink">
            <BookOpen size={16} aria-hidden="true" />
            <span>Excel, SQL, Power BI, Python</span>
          </div>
        </div>
      </footer>
    </main>
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

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-bold text-ink">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </div>
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
            <p className="text-xs font-bold text-muted">KPI</p>
            <p className="mt-2 text-xl font-bold text-accent">92%</p>
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
