import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1">
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          currentLang === 'fr'
            ? 'bg-royal-blue text-white'
            : 'text-gray-600 hover:bg-royal-blue/10'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage('ar')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          currentLang === 'ar'
            ? 'bg-royal-blue text-white'
            : 'text-gray-600 hover:bg-royal-blue/10'
        }`}
      >
        AR
      </button>
    </div>
  );
}
