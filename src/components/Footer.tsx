import { useLang } from '../i18n/LangProvider';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <p>{t.footer.rights}</p>
    </footer>
  );
}
