"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowLeft,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Github,
  ImagePlus,
  Layers3,
  Linkedin,
  Mail,
  PieChart,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wrench
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" }
} as const;

const navItems = ["About", "Skills", "Projects", "Dashboards", "Resume", "Contact"];

const kpis = ["Total Sales", "Total Profit", "Total Orders", "Profit Margin", "Average Order Value", "Top Products"];

const tools = ["Power BI", "Power Query", "DAX", "Excel"];

const skills = [
  "Dashboard Development",
  "Data Cleaning",
  "Data Transformation",
  "KPI Analysis",
  "Trend Analysis",
  "Data Visualization",
  "Business Insight Communication"
];

const sections = [
  {
    title: "Project Overview",
    icon: BarChart3,
    text:
      "The Interactive E-commerce Sales Analytics Dashboard (2022-2024) is a Power BI project built to analyze sales performance, profitability, customer behavior, and product trends across multiple years. The dashboard is designed for business users who need a clear view of performance drivers and opportunities."
  },
  {
    title: "Business Problem",
    icon: Target,
    text:
      "E-commerce teams often collect sales data across products, customers, dates, and categories, but struggle to turn that raw data into timely business decisions. The project addresses the need for a centralized dashboard that makes revenue trends, profit performance, and operational priorities easier to understand."
  },
  {
    title: "Dataset Description",
    icon: Database,
    text:
      "The dataset covers e-commerce sales activity from 2022 to 2024, including order-level information, sales values, product/category fields, customer-related attributes, dates, and profitability measures used to build executive KPIs and trend analysis."
  },
  {
    title: "Data Cleaning Process",
    icon: ShieldCheck,
    text:
      "The cleaning process involved checking field consistency, reviewing missing or invalid values, correcting data types, standardizing date fields, validating sales and profit columns, and preparing the data for reliable analysis in Power BI."
  },
  {
    title: "Data Transformation Process",
    icon: Layers3,
    text:
      "Power Query was used to shape the dataset for reporting. Transformations included renaming columns, formatting dates, creating analysis-ready fields, preparing relationships, and structuring the model for clean KPI calculations and interactive filtering."
  },
  {
    title: "Analysis Performed",
    icon: TrendingUp,
    text:
      "The analysis focused on year-over-year sales trends, profit movement, product performance, category contribution, customer behavior, and KPI patterns across the 2022-2024 reporting period."
  }
];

const objectives = [
  "Track e-commerce sales and profitability across 2022-2024",
  "Identify products, categories, and periods driving performance",
  "Create an interactive Power BI dashboard for business review",
  "Translate raw sales data into clear KPIs and recommendations"
];

const dashboardFeatures = [
  "Executive KPI cards for quick performance scanning",
  "Sales and profit trend visuals across multiple years",
  "Product and category performance breakdowns",
  "Interactive filters for exploring business segments",
  "Clean visual hierarchy for recruiter and stakeholder review"
];

const insights = [
  "Sales performance can be understood more clearly when revenue, profit, and product trends are viewed together.",
  "Interactive filtering helps reveal which products and periods contribute most to business results.",
  "Profit-focused analysis adds stronger decision value than sales volume alone.",
  "A clean dashboard layout helps stakeholders move from observation to action faster."
];

const recommendations = [
  "Monitor high-performing products and prioritize them in promotional planning.",
  "Review low-margin products to identify pricing, cost, or inventory issues.",
  "Use year-over-year trend tracking to support forecasting and sales planning.",
  "Continue improving the dashboard with real-time refresh and deeper customer segmentation."
];

const challenges = [
  "Designing the dashboard to remain clear while showing multiple business metrics.",
  "Transforming raw sales fields into a model suitable for KPI analysis.",
  "Balancing visual polish with practical recruiter and stakeholder readability."
];

export default function ProjectDetailsPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <Header />

      <section className="section-shell py-14 lg:py-20">
        <motion.div {...fadeUp}>
          <Link href="/#projects" className="focus-ring inline-flex h-11 items-center gap-2 rounded-md border border-line px-4 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Projects
          </Link>
          <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-accent">
            <Sparkles size={16} aria-hidden="true" />
            Power BI Case Study
          </div>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Interactive E-commerce Sales Analytics Dashboard (2022-2024)
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            A business intelligence dashboard built to help stakeholders analyze sales trends, profitability, product performance, and actionable opportunities across three years of e-commerce activity.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-semibold text-muted">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-y border-line bg-surface py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article key={section.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{section.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div {...fadeUp}>
          <SectionLabel>Objectives</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink md:text-4xl">
            What the dashboard was built to answer.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            The project is framed around practical business questions: how sales are performing, what is driving profit, and where decision makers should focus attention.
          </p>
        </motion.div>
        <ListCard items={objectives} />
      </section>

      <section className="border-y border-line bg-surface py-20">
        <div className="section-shell">
          <SectionIntro
            eyebrow="KPIs"
            title="Core performance indicators used in the dashboard."
            text="The dashboard focuses on metrics that allow fast executive scanning and deeper performance review."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kpis.map((kpi, index) => (
              <motion.div key={kpi} {...fadeUp} transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-5">
                <p className="text-2xl font-bold text-accent">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm font-bold text-ink">{kpi}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionIntro
          eyebrow="Dashboard Preview"
          title="Screenshot gallery placeholders."
          text="Upload dashboard screenshots later and replace these placeholders while keeping the same polished gallery layout."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {["Executive Overview", "Sales Trends", "Product Performance"].map((title, index) => (
            <motion.div key={title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-4 shadow-sm">
              <div className="grid aspect-video place-items-center rounded-md border border-line bg-surface">
                <div className="text-center">
                  <ImagePlus className="mx-auto text-accent" size={42} aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-ink">{title}</p>
                  <p className="mt-1 text-xs text-muted">Dashboard screenshot placeholder</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <ContentPanel title="Dashboard Features" icon={PieChart} items={dashboardFeatures} />
          <ContentPanel title="Key Insights" icon={TrendingUp} items={insights} />
          <ContentPanel title="Recommendations" icon={Target} items={recommendations} />
          <ContentPanel title="Challenges Encountered" icon={Wrench} items={challenges} />
        </div>
      </section>

      <section className="section-shell grid gap-10 py-20 lg:grid-cols-2">
        <motion.article {...fadeUp} className="rounded-lg border border-line bg-white p-6 shadow-sm">
          <SectionLabel>Tools Used</SectionLabel>
          <div className="mt-5 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-semibold text-muted">
                {tool}
              </span>
            ))}
          </div>
        </motion.article>
        <motion.article {...fadeUp} transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-6 shadow-sm">
          <SectionLabel>Skills Demonstrated</SectionLabel>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-semibold text-muted">
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      </section>

      <section className="border-t border-line bg-ink py-20 text-white">
        <div className="section-shell">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-blue-200">Conclusion</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal md:text-4xl">
              A practical Power BI case study for business decision support.
            </h2>
            <p className="mt-4 text-base leading-7 text-blue-100">
              This project demonstrates Andrew Udokang&apos;s ability to clean and transform sales data, create meaningful KPIs, design an interactive Power BI dashboard, and communicate insights in a way that supports business action.
            </p>
          </motion.div>
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
            <Link key={item} href={`/#${item.toLowerCase()}`} className="focus-ring text-sm font-medium text-muted transition hover:text-accent">
              {item}
            </Link>
          ))}
        </div>
        <a href={`${basePath}/resume.pdf`} className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accentDark">
          <ArrowDownToLine size={16} aria-hidden="true" />
          Resume
        </a>
      </nav>
      <div className="section-shell flex h-11 items-center gap-5 overflow-x-auto border-t border-line lg:hidden">
        {navItems.map((item) => (
          <Link key={item} href={`/#${item.toLowerCase()}`} className="focus-ring shrink-0 text-sm font-semibold text-muted transition hover:text-accent">
            {item}
          </Link>
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
        <div className="flex items-center gap-3 text-ink">
          <BookOpen size={16} aria-hidden="true" />
          <span>Power BI, SQL, Excel, Python</span>
          <a href="https://github.com/andrewudokang" className="focus-ring text-muted transition hover:text-accent" aria-label="Andrew Udokang on GitHub">
            <Github size={17} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/andrewudokang" className="focus-ring text-muted transition hover:text-accent" aria-label="Andrew Udokang on LinkedIn">
            <Linkedin size={17} aria-hidden="true" />
          </a>
          <Link href="/#contact" className="focus-ring text-muted transition hover:text-accent" aria-label="Contact Andrew Udokang">
            <Mail size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
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

function ListCard({ items }: { items: string[] }) {
  return (
    <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }} className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <CheckCircle2 className="mt-1 shrink-0 text-accent" size={16} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ContentPanel({ title, icon: Icon, items }: { title: string; icon: typeof BarChart3; items: string[] }) {
  return (
    <motion.article {...fadeUp} className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-accent">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <CheckCircle2 className="mt-1 shrink-0 text-accent" size={16} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
