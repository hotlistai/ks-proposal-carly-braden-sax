import Image from "next/image";
import guide from "@/content/investment-guide.json";

type OfferSection = {
  title: string;
  items: string[];
};

type GuideVideoProps = {
  label: string;
  src: string;
  poster?: string;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-5 text-[11px] font-semibold uppercase"
      style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
    >
      {children}
    </p>
  );
}

function DashList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li
          key={item}
          className="relative mb-3 pl-7 text-[15px] font-light"
          style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
        >
          <span className="absolute left-0" style={{ color: "rgba(255,255,255,0.25)" }}>
            -
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function GuideVideo({ label, src, poster }: GuideVideoProps) {
  const isMov = src.toLowerCase().endsWith(".mov");

  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <video
        className="block w-full bg-black"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <source src={src} type={isMov ? "video/quicktime" : "video/mp4"} />
        {isMov ? <source src={src} type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function SnapshotGrid() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <SectionLabel>Guide Snapshot</SectionLabel>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {guide.snapshots.map((snapshot) => (
          <div
            key={snapshot.label}
            className="h-full px-6 py-6"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.24em", color: "rgba(255,255,255,0.35)" }}
            >
              {snapshot.label}
            </p>
            <p
              className="mt-4 font-medium"
              style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.35, fontSize: "clamp(18px, 2vw, 24px)" }}
            >
              {snapshot.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OfferSectionCard({ section }: { section: OfferSection }) {
  return (
    <div
      className="h-full px-6 py-6"
      style={{ background: "rgba(255,255,255,0.018)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <h3 className="mb-5 text-[18px] font-semibold" style={{ color: "#ffffff", letterSpacing: "-0.01em" }}>
        {section.title}
      </h3>
      <DashList items={section.items} />
    </div>
  );
}

function PrimaryOffer() {
  return (
    <section
      id="investment"
      className="mx-auto max-w-[1040px] px-9 py-[84px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <SectionLabel>{guide.primaryOffer.eyebrow}</SectionLabel>
      <div
        className="px-7 py-8 md:px-10 md:py-10"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#ffffff",
              }}
            >
              {guide.primaryOffer.title}
            </h2>
            <p
              className="mt-4 text-[12px] font-semibold uppercase"
              style={{ letterSpacing: "0.24em", color: "rgba(255,255,255,0.42)" }}
            >
              Starting at
            </p>
          </div>
          <p
            className="font-extrabold"
            style={{ fontSize: "clamp(38px, 5vw, 64px)", letterSpacing: "-0.055em", lineHeight: 0.95 }}
          >
            {guide.primaryOffer.startingAt}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {guide.primaryOffer.sections.map((section) => (
            <OfferSectionCard key={section.title} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductionBreak() {
  return (
    <section className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]">
      <SectionLabel>Production & Design</SectionLabel>
      <Image
        src={guide.media.setupImage.src}
        alt={guide.media.setupImage.alt}
        width={1400}
        height={900}
        className="block h-auto w-full"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      />
    </section>
  );
}

function CeremonyCoverage() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[84px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div>
          <SectionLabel>{guide.ceremony.title}</SectionLabel>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-0.045em", lineHeight: 0.98 }}
          >
            {guide.ceremony.heading}
          </h2>
          <p
            className="mt-5 font-extrabold"
            style={{ fontSize: "clamp(36px, 5vw, 62px)", letterSpacing: "-0.055em", color: "#ffffff" }}
          >
            {guide.ceremony.addOnInvestment}
          </p>
        </div>
        <div
          className="px-7 py-7 md:px-8"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <DashList items={guide.ceremony.items} />
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[84px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <SectionLabel>{guide.difference.title}</SectionLabel>
      <p
        className="max-w-[72ch] font-light"
        style={{ fontSize: "clamp(20px, 2.1vw, 28px)", color: "rgba(255,255,255,0.82)", lineHeight: 1.55 }}
      >
        {guide.difference.copy}
      </p>
    </section>
  );
}

function InvestmentNotes() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div
        className="px-7 py-7"
        style={{ background: "rgba(255,255,255,0.025)", borderLeft: "2px solid rgba(255,255,255,0.18)" }}
      >
        <SectionLabel>Investment Notes</SectionLabel>
        <p className="m-0 max-w-[72ch] font-light" style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}>
          {guide.investmentNotes}
        </p>
      </div>
    </section>
  );
}

function NextSteps() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[96px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <SectionLabel>{guide.cta.title}</SectionLabel>
      <h2
        className="max-w-[720px] font-extrabold"
        style={{ fontSize: "clamp(34px, 4.8vw, 62px)", letterSpacing: "-0.05em", lineHeight: 0.98 }}
      >
        If this feels aligned with your vision, we would love to learn more.
      </h2>
      <p className="mt-7 max-w-[62ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
        {guide.cta.copy}
      </p>
      <a
        href={guide.cta.href}
        className="mt-9 inline-flex items-center justify-center px-7 py-4 text-[12px] font-semibold uppercase"
        style={{
          background: "#ffffff",
          color: "#0a0a0a",
          letterSpacing: "0.22em",
          textDecoration: "none",
        }}
      >
        {guide.cta.label}
      </a>
    </section>
  );
}

export function InvestmentGuidePage() {
  return (
    <main>
      <Image
        src={guide.media.bannerImage.src}
        alt={guide.media.bannerImage.alt}
        width={1920}
        height={600}
        priority
        className="block h-auto w-full"
      />
      <section className="mx-auto max-w-[1040px] px-9 pb-10 pt-20 md:px-[72px]">
        <p
          className="mb-4 text-[10px] font-semibold uppercase"
          style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
        >
          {guide.brand}
        </p>
        <h1
          className="max-w-[760px] text-balance font-extrabold"
          style={{
            fontSize: "clamp(38px, 6vw, 68px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.96,
            color: "#ffffff",
          }}
        >
          {guide.title}
        </h1>
        <div
          className="mt-7 max-w-[66ch] space-y-5 font-light"
          style={{ fontSize: "clamp(17px, 1.6vw, 20px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
        >
          {guide.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 max-w-[760px]">
          <GuideVideo {...guide.media.firstVideo} />
        </div>
      </section>
      <SnapshotGrid />
      <PrimaryOffer />
      <ProductionBreak />
      <CeremonyCoverage />
      <section className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]">
        <GuideVideo {...guide.media.secondVideo} />
      </section>
      <DifferenceSection />
      <InvestmentNotes />
      <NextSteps />
    </main>
  );
}
