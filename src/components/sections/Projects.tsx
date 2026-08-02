import { LangProvider, useLang } from '../../i18n/LangProvider';
import Nav from '../Nav';
import Footer from '../Footer';

function ProjectsContent() {
  const { t } = useLang();
  return (
    <main className="page">
      <section className="page-head">
        <h1>{t.projects.title}</h1>
        <p>{t.projects.subtitle}</p>
      </section>

      <div className="card-grid">
        {t.projects.items.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="card-head">
              <h3>{p.title}</h3>
              <span className="year">{p.year}</span>
            </div>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="card-links">
              <a href={p.link}>{t.projects.live}</a>
              <a href={p.code}>{t.projects.source}</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default function Projects() {
  return (
    <LangProvider>
      <Nav />
      <ProjectsContent />
      <Footer />
    </LangProvider>
  );
}
