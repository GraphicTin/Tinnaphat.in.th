import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { en, th, type Dict } from './dict';

type Lang = 'en' | 'th';

interface LangContextValue {
  lang: Lang;
  t: Dict;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'th' || saved === 'en') setLangState(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((prev) => (prev === 'en' ? 'th' : 'en'));

  return (
    <LangContext.Provider value={{ lang, t: lang === 'en' ? en : th, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

export default LangProvider;
