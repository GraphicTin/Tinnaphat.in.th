import { useLang } from '../i18n/LangProvider';
import LangToggle from './LangToggle';

export default function Nav() {
  const { t } = useLang();
  const links = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
    { href: '/contact', label: t.nav.contact },
  ];
  return (
    <nav className="site-nav">
      <a href="/" className="brand">
        Tinnaphat
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <LangToggle />
    </nav>
  );
}
