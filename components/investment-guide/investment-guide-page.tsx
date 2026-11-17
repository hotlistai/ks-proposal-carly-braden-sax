import Image from "next/image";
import guide from "@/content/investment-guide.json";
import { GlassVideoPreview } from "./glass-video-preview";

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="guide-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function InvestmentGuidePage() {
  return (
    <main className="wedding-guide">
      <section className="guide-hero" aria-labelledby="guide-title">
        <Image
          className="guide-hero__image"
          src="/images/collection-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="guide-hero__overlay">
          <header className="guide-brand">
            <a href="https://pr.knoxsignature.com" className="guide-wordmark">
              {guide.brand}
            </a>
            <p className="guide-eyebrow">Weddings · Dallas + Destination</p>
          </header>
          <div className="guide-hero__main">
            <h1 id="guide-title">
              <span>Wedding</span>
              <span>Investment Guide</span>
            </h1>
            <p className="guide-hero__copy">
              Live music. Thoughtful production. An atmosphere that feels
              entirely yours.
            </p>
          </div>
          <div className="guide-hero__footer">
            <p className="guide-eyebrow">For couples &amp; their planners</p>
            <a className="guide-button" href="#investment">
              Explore the investment <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="guide-overview guide-paper"
        id="investment"
        aria-labelledby="overview-title"
      >
        <div className="guide-section-heading">
          <p className="guide-eyebrow">The investment, at a glance</p>
          <div>
            <h2 id="overview-title">
              One signature sound.
              <br />
              <em>Your kind of celebration.</em>
            </h2>
            <p className="guide-copy">
              A starting point for your wedding plans. Begin with Signature,
              then add ceremony coverage and the live instruments that feel
              right for your day.
            </p>
          </div>
        </div>
        <dl className="guide-prices">
          <div>
            <dt>
              Signature <span>Cocktail hour + reception</span>
            </dt>
            <dd>
              <small>Starting at</small>
              {guide.primaryOffer.startingAt}
            </dd>
          </div>
          <div>
            <dt>
              Ceremony <span>Sound, microphones + music cueing</span>
            </dt>
            <dd>
              <small>Add-on</small>
              {guide.ceremony.addOnInvestment}
            </dd>
          </div>
          <div>
            <dt>
              Violin <span>Ceremony only / full night</span>
            </dt>
            <dd>
              <small>Add-on</small>
              {guide.enhancements.violin.ceremonyOnly} /{" "}
              {guide.enhancements.violin.fullNight}
            </dd>
          </div>
          <div>
            <dt>
              Drums <span>Live percussion enhancement</span>
            </dt>
            <dd>
              <small>Starting at</small>
              {guide.enhancements.drums.startingAt}
            </dd>
          </div>
        </dl>
        <p className="guide-note">
          Enhancements are added to your selected coverage. Final investment is
          tailored to your venue, timeline, and event details.
        </p>
      </section>

      <section
        className="guide-signature guide-section"
        id="signature"
        aria-labelledby="signature-title"
      >
        <div className="guide-feature">
          <div className="guide-feature__media">
            <video
              controls
              playsInline
              preload="none"
              poster={guide.media.firstVideo.poster}
              aria-label="Watch Knox Signature perform"
            >
              <source src={guide.media.firstVideo.src} />
              Your browser does not support the video tag.
            </video>
            <p className="guide-eyebrow guide-caption">
              The original KNOX · Live piano, saxophone + DJ
            </p>
          </div>
          <div className="guide-feature__copy">
            <p className="guide-eyebrow">01 / The foundation</p>
            <h2 id="signature-title">Signature</h2>
            <p className="guide-instrumentation">Cocktail hour + reception</p>
            <p className="guide-copy">
              Live piano and saxophone welcome your guests. Curated DJ direction
              and live saxophone carry the evening from dinner to the final
              song.
            </p>
            <p className="guide-coverage">{guide.primaryOffer.coverage}</p>
            <p className="guide-price">
              <small>Starting at</small>
              {guide.primaryOffer.startingAt}
            </p>
          </div>
        </div>
        <div className="guide-inclusions">
          {guide.primaryOffer.sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              <ItemList items={section.items} />
            </section>
          ))}
        </div>
      </section>

      <section
        className="guide-ceremony guide-paper guide-section"
        id="ceremony"
        aria-labelledby="ceremony-title"
      >
        <div>
          <p className="guide-eyebrow">02 / The first moment</p>
          <h2 id="ceremony-title">Ceremony</h2>
          <p className="guide-copy">
            Every word heard. Every entrance considered. Discreet sound and
            music direction for the moments that begin it all.
          </p>
          <p className="guide-price">
            <small>Coverage add-on</small>
            {guide.ceremony.addOnInvestment}
          </p>
          <p className="guide-note">
            Add live violin for your ceremony for{" "}
            {guide.enhancements.violin.ceremonyOnly}.
          </p>
        </div>
        <div>
          <h3 className="guide-eyebrow">Ceremony coverage includes</h3>
          <ItemList items={guide.ceremony.items} />
          <p className="guide-note">
            Live violin is an additional enhancement; ceremony sound and
            technical coverage are priced separately.
          </p>
        </div>
      </section>

      <section
        className="guide-enhancements guide-section"
        id="enhancements"
        aria-labelledby="enhancements-title"
      >
        <div className="guide-section-heading">
          <p className="guide-eyebrow">03 / Make it your own</p>
          <h2 id="enhancements-title">A richer live layer.</h2>
        </div>
        <article className="guide-enhancement">
          <div>
            <p className="guide-eyebrow">The elevated KNOX</p>
            <h3>
              Lux <em>/ Violin</em>
            </h3>
            <p className="guide-instrumentation">DJ + Saxophone + Violin</p>
          </div>
          <div>
            <p className="guide-copy">
              Violin woven into your celebration adds warmth, emotion, and
              presence. Choose a ceremony-only performance, or bring the Lux
              experience to the full night.
            </p>
            <dl className="guide-addon-prices">
              <div>
                <dt>Ceremony only</dt>
                <dd>{guide.enhancements.violin.ceremonyOnly}</dd>
              </div>
              <div>
                <dt>Full night</dt>
                <dd>{guide.enhancements.violin.fullNight}</dd>
              </div>
            </dl>
            <p className="guide-note">
              Violin enhancement pricing is in addition to your selected
              coverage.
            </p>
          </div>
        </article>
        <article className="guide-enhancement">
          <div>
            <p className="guide-eyebrow">Bring the rhythm</p>
            <h3>Drums</h3>
            <p className="guide-instrumentation">Live percussion enhancement</p>
          </div>
          <div>
            <p className="guide-copy">
              An added pulse for the dance floor. Live drums bring a fuller,
              more energetic performance alongside the KNOX sound.
            </p>
            <dl className="guide-addon-prices">
              <div>
                <dt>Starting at</dt>
                <dd>{guide.enhancements.drums.startingAt}</dd>
              </div>
            </dl>
            <p className="guide-note">
              Add drums to Signature or pair them with Lux for DJ, saxophone,
              violin, and drums.
            </p>
          </div>
        </article>
      </section>

      <section
        className="guide-production guide-paper guide-section"
        aria-labelledby="production-title"
      >
        <Image
          src={guide.media.setupImage.src}
          alt={guide.media.setupImage.alt}
          width={1400}
          height={900}
          className="guide-setup-image"
        />
        <div>
          <p className="guide-eyebrow">Designed for the room</p>
          <h2 id="production-title">
            Considered.
            <br />
            <em>From every angle.</em>
          </h2>
          <p className="guide-copy">
            A minimal white DJ command center, refined sound, and architectural
            lighting. Every element supports the setting and the celebration.
          </p>
          <p className="guide-copy">
            Your music planning session, site visit, and KNOX planning portal
            keep the details connected from the first conversation to the final
            song.
          </p>
        </div>
      </section>

      <section
        className="guide-film guide-section"
        aria-labelledby="film-title"
      >
        <div>
          <p className="guide-eyebrow">The atmosphere, in motion</p>
          <h2 id="film-title">Feel the evening.</h2>
          <p className="guide-copy">
            A glimpse of the live energy, the quiet moments, and the dance floor
            in between.
          </p>
        </div>
        <div className="guide-portrait-film">
          <GlassVideoPreview
            src={guide.media.secondVideo.src}
            poster={guide.media.secondVideo.poster}
          />
        </div>
      </section>

      <footer className="guide-closing guide-section" id="inquire">
        <p className="guide-eyebrow">Your date. Your setting. Your sound.</p>
        <h2>
          Let’s shape
          <br />
          <em>your celebration.</em>
        </h2>
        <p className="guide-copy">
          Share your date, venue, and the coverage you have in mind. We’ll
          confirm availability and put together an investment tailored to your
          plans.
        </p>
        <div className="guide-actions">
          <a
            className="guide-button guide-button--filled"
            href={guide.inquiry.href}
          >
            {guide.inquiry.label} <span aria-hidden="true">↗</span>
          </a>
          <a className="guide-button" href={guide.cta.href}>
            Prefer a conversation? Book a call <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="guide-note">{guide.investmentNotes}</p>
        <div className="guide-footer-line">
          <a href="https://pr.knoxsignature.com" className="guide-wordmark">
            {guide.brand}
          </a>
          <p className="guide-eyebrow">
            Wedding Investment Guide · Dallas + Destination
          </p>
        </div>
      </footer>
    </main>
  );
}
