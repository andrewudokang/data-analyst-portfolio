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

const kpis = [
  "Total Revenue",
  "Total Profit",
  "Total Quantity Sold",
  "Average Revenue per Transaction",
  "Average Profit per Transaction",
  "YoY Revenue Growth",
  "YoY Profit Growth",
  "YoY Quantity Growth",
  "YoY Average Revenue Growth",
  "YoY Average Profit Growth"
];

const tools = ["Power BI", "Power Query", "DAX", "Data Modeling", "Business Intelligence", "Data Visualization"];

const skills = [
  "Dashboard Development",
  "Data Cleaning",
  "Data Transformation",
  "KPI Analysis",
  "Trend Analysis",
  "Year-over-Year Analysis",
  "Power Query M",
  "Data Modeling",
  "Data Visualization",
  "Business Insight Communication"
];

const sections = [
  {
    title: "Project Overview",
    icon: BarChart3,
    text:
      "This project analyzes the sales performance of an e-commerce company over a three-year period from 2022 to 2024. The dashboard explores revenue trends, profitability, product performance, category performance, regional performance, and year-over-year growth to identify key business drivers and areas requiring improvement."
  },
  {
    title: "Business Problem",
    icon: Target,
    text:
      "Understanding sales performance is essential for business growth, but raw sales data does not automatically explain which products drive revenue, which categories are most profitable, where regional opportunities exist, or why performance changes over time. This dashboard turns historical sales records into actionable insight for strategy, marketing, and profitability decisions."
  },
  {
    title: "Dataset Description",
    icon: Database,
    text:
      "The dataset was sourced from Kaggle and contains approximately 3,500 sales records spanning 2022 to 2024. Main fields include Order Date, Product Name, Product Category, Region, Quantity Sold, Revenue, and Profit, representing orders, products, categories, regions, sales transactions, and calendar dates."
  },
  {
    title: "Data Cleaning Process",
    icon: ShieldCheck,
    text:
      "Power Query was used to prepare the sales data for analysis by assigning appropriate data types, checking field consistency, validating revenue and profit columns, standardizing dates, and preparing the model for reliable KPI and time intelligence calculations."
  },
  {
    title: "Data Transformation Process",
    icon: Layers3,
    text:
      "A simple flat table model was implemented because of the dataset size. A custom Date Table was created using Power Query M Language, then connected to the sales fact table through a one-to-many relationship to support time intelligence and year-over-year DAX measures."
  },
  {
    title: "Analysis Performed",
    icon: TrendingUp,
    text:
      "The analysis evaluated monthly revenue and profit trends, revenue and profit by region, product category performance, revenue and average quantity sold by product, yearly business performance, and year-over-year growth in revenue, profit, quantity, average revenue, and average profit."
  }
];

const objectives = [
  "Identify the months generating the highest revenue and profit",
  "Determine the best-performing products by revenue",
  "Evaluate product category performance",
  "Compare product quantity sold across products",
  "Analyze regional sales performance",
  "Compare yearly business performance across the three-year period",
  "Evaluate year-over-year growth in key business metrics"
];

const dashboardFeatures = [
  "Executive-style one-page analytical dashboard",
  "Dynamic KPI cards displaying year-over-year growth",
  "Monthly revenue and profit trend analysis",
  "Revenue and profit by region",
  "Revenue and average profit by product category",
  "Revenue and average quantity sold by product",
  "Dynamic year slicer for interactive filtering",
  "Clustered column charts, line charts, combo charts, KPI cards, and slicers"
];

const insights = [
  "2023 recorded the strongest business performance, achieving the highest revenue, profit, and quantity sold across the three-year period.",
  "Despite a slight increase in quantity sold, 2024 experienced a 4.26% decline in revenue and a 9.29% decline in profit, indicating possible pricing or cost-related challenges.",
  "May consistently emerged as the strongest sales month, while February showed the weakest performance across multiple years.",
  "January generated the highest profit, suggesting stronger profit margins despite lower sales volume compared to May.",
  "The West region generated the highest overall revenue and profit, although the performance gap between regions remained relatively small.",
  "Electronics significantly outperformed other categories in profitability, making it the company's strongest product category.",
  "Office Products recorded the highest average revenue per transaction but the lowest overall profit, suggesting premium pricing but weak purchase frequency.",
  "Camera sales generated the highest revenue among products, demonstrating strong customer demand for premium electronics despite relatively low purchase quantities."
];

const recommendations = [
  "Increase marketing investment in the Electronics category to maximize revenue and profitability.",
  "Reassess the Office Products strategy by improving promotional campaigns or expanding product variety to increase purchase frequency.",
  "Investigate February's consistently weak performance and implement seasonal promotions to improve sales.",
  "Replicate successful sales strategies from the West region across other regions.",
  "Investigate the decline in 2024 revenue and profit despite stable sales volume to identify pricing, cost, or product mix issues."
];

const challenges = [
  "Keeping the dashboard executive-friendly while still covering products, categories, regions, monthly trends, and year-over-year performance.",
  "Creating a custom Date Table and preparing the model for time intelligence calculations.",
  "Designing KPI cards and visuals that communicate both historical performance and business implications clearly."
];

const businessQuestions = [
  "Which products generate the highest revenue?",
  "Which product categories contribute the most to company revenue?",
  "Are revenue and profits increasing over time?",
  "Which products generate the highest average sales value?",
  "What are the monthly sales trends?",
  "Which region performs best in terms of revenue and profit?"
];

const futureImprovements = [
  "Incorporate additional years of sales data",
  "Add customer demographics and segmentation",
  "Build a star schema data model",
  "Integrate predictive sales forecasting",
  "Add drill-through analysis pages",
  "Include geographical map visualizations",
  "Use larger, less-clean datasets to simulate real-world data preparation scenarios"
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
            An interactive Power BI dashboard analyzing e-commerce sales performance across products, categories, regions, and time to uncover trends, evaluate profitability, and support data-driven business decisions.
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
            What the dashboard was built to achieve.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            The project focuses on identifying the highest-performing products, categories, and regions while uncovering opportunities for strategic business improvement.
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
          title="Dashboard screenshot gallery."
          text="The repository includes screenshots for the overall dashboard and yearly views. These placeholders are ready for the 2022, 2023, and 2024 dashboard screenshots."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {["Overall Dashboard", "2022 Performance", "2023 Performance", "2024 Performance"].map((title, index) => (
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
          <ContentPanel title="Business Questions Answered" icon={Target} items={businessQuestions} />
          <ContentPanel title="Key Insights" icon={TrendingUp} items={insights} />
          <ContentPanel title="Recommendations" icon={Target} items={recommendations} />
          <ContentPanel title="Challenges Encountered" icon={Wrench} items={challenges} />
          <ContentPanel title="Future Improvements" icon={Layers3} items={futureImprovements} />
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
          <SectionLabel>How to Use</SectionLabel>
          <ul className="mt-5 space-y-3">
            {[
              "Download the Power BI (.pbix) file from the project repository.",
              "Open the file using Power BI Desktop.",
              "Use the Year slicer to filter dashboard insights.",
              "Explore trends across products, categories, regions, and time."
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <CheckCircle2 className="mt-1 shrink-0 text-accent" size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
              This project demonstrates Andrew Udokang&apos;s ability to transform raw e-commerce sales data into actionable business insights using Power BI, Power Query, DAX, data modeling, and clear executive dashboard design.
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
