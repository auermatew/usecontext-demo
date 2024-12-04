import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggler: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { translations, language } = useContext(LanguageContext);

  return (
    <div className="theme-toggler">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {isDarkMode ? (
          <>
            <Sun className="mr-2" />
            {translations[language].lightMode}
          </>
        ) : (
          <>
            <Moon className="mr-2" />
            {translations[language].darkMode}
          </>
        )}
      </button>
    </div>
  );
};
