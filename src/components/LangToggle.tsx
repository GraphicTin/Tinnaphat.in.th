import { useLang } from '../i18n/LangProvider';

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        className={lang === 'th' ? 'active' : ''}
        onClick={() => setLang('th')}
        aria-pressed={lang === 'th'}
      >
        ไทย
      </button>
    </div>
  );
}
