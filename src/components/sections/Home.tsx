import { LangProvider, useLang } from '../../i18n/LangProvider';
import Nav from '../Nav';
import Footer from '../Footer';

function HomeContent() {
  const { t } = useLang();
  return (
    <main className="page">
      <section className="hero">
        <p className="hero-greeting">{t.hero.greeting}</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <p className="hero-role">{t.hero.role}</p>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/projects">
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn-ghost" href="/contact">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </section>

      <section className="intro">
        <h2>{t.home.introTitle}</h2>
        <p>{t.home.intro1}</p>
        <p>{t.home.intro2}</p>
      </section>

      <section className="skills">
        <h2>{t.home.skillsTitle}</h2>
        <div className="chips">
          {t.home.skillList.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="featured">
        <h2>{t.home.featuredTitle}</h2>
        <div className="card-grid">
          {t.projects.items.slice(0, 3).map((p) => (
            <a className="project-card" href={p.link} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <a className="btn btn-ghost" href="/projects">
          {t.home.viewAllProjects}
        </a>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <HomeContent />
      <Footer />
    </LangProvider>
  );
}
