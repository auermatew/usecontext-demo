import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

type LanguageCode = 'en' | 'es';

export const LanguageSelector: React.FC = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext);
  const languages: LanguageCode[] = ['en', 'es'];

  return (
    <div className="language-selector">
      <h2>{translations[language].selectLanguage}</h2>
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-4 py-2 rounded-lg transition-all ${
            language === lang ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-600 text-black dark:text-white'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
