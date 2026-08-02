import { LangProvider, useLang } from '../../i18n/LangProvider';
import Nav from '../Nav';
import Footer from '../Footer';

function ContactContent() {
  const { t } = useLang();
  return (
    <main className="page">
      <section className="page-head">
        <h1>{t.contact.title}</h1>
        <p>{t.contact.subtitle}</p>
      </section>

      <section className="contact-grid">
        <div>
          <h2>{t.contact.emailLabel}</h2>
          <a className="contact-link" href={`mailto:${t.contact.email}`}>
            {t.contact.email}
          </a>
          <h2>{t.contact.socialLabel}</h2>
          <div className="social-list">
            {t.contact.socials.map((s) => (
              <a key={s.label} className="btn btn-ghost" href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="form-wrap">
          <h2>{t.contact.formTitle}</h2>
          <p className="form-note">{t.contact.formNote}</p>
          <iframe
            className="gform"
            src={t.contact.formSrc}
            width="100%"
            height="520"
            style={{ border: 'none' }}
            title={t.contact.formTitle}
          >
            Loading…
          </iframe>
        </div>
      </section>
    </main>
  );
}

export default function Contact() {
  return (
    <LangProvider>
      <Nav />
      <ContactContent />
      <Footer />
    </LangProvider>
  );
}
