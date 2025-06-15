import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const flags = {
  fr: '🇫🇷',
  en: '🇬🇧',
};

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'ENG' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const currentLang = i18n.language.startsWith('en') ? 'en' : 'fr';

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-md hover:bg-white/60 shadow-lg border border-white/30 font-semibold text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 drop-shadow-lg"
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{ minWidth: 60 }}
      >
        <span className="font-inter text-base font-bold">{languages.find(l => l.code === currentLang)?.label}</span>
        <svg className="w-4 h-4 ml-1 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-28 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 py-2 animate-slide-up origin-top-right" role="listbox" style={{zIndex:99}}>
          {languages.map((lang) => (
            <li key={lang.code}>
      <button
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-2 text-left rounded-xl transition-all font-inter text-base hover:bg-purple-100/80 hover:text-purple-700 ${currentLang === lang.code ? 'bg-purple-200/80 font-bold text-purple-900' : 'text-gray-800'}`}
                role="option"
                aria-selected={currentLang === lang.code}
      >
                <span>{lang.label}</span>
      </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
