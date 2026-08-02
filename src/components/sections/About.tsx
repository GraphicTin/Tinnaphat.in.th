import { LangProvider, useLang } from '../../i18n/LangProvider';
import Nav from '../Nav';
import Footer from '../Footer';

function AboutContent() {
  const { t } = useLang();
  return (
    <main className="page">
      <section className="page-head">
        <h1>{t.about.title}</h1>
        <p className="page-sub">{t.fullName}</p>
      </section>

      <section className="bio">
        <h2>{t.about.bioTitle}</h2>
        <p>{t.about.bio1}</p>
        <p>{t.about.bio2}</p>
      </section>

      <section className="education">
        <h2>{t.about.educationTitle}</h2>
        {t.about.education.map((e) => (
          <div className="edu-item" key={e.school}>
            <span className="edu-period">{e.period}</span>
            <h3>{e.school}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </section>

      <section className="skills">
        <h2>{t.about.skillsTitle}</h2>
        <div className="skill-list">
          {t.about.skillGroups.map((s) => (
            <div className="skill-row" key={s.name}>
              <div className="skill-label">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function About() {
  return (
    <LangProvider>
      <Nav />
      <AboutContent />
      <Footer />
    </LangProvider>
  );
}
