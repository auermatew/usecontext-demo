import React, { createContext, useState, ReactNode } from 'react';
import { LanguageCode, Translations, LanguageContextType } from '../types/language';

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  translations: {
    en: {
      welcome: 'Welcome',
      login: 'Login',
      logout: 'Logout',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      selectLanguage: 'Select Language',
      manageUsers: 'Manage Users',
      accessDenied: 'Access Denied',
      restrictedArea: 'Welcome to the restricted area!',
    },
    es: {
      welcome: 'Bienvenido',
      login: 'Iniciar Sesión',
      logout: 'Cerrar Sesión',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      selectLanguage: 'Seleccionar Idioma',
      manageUsers: 'Gestionar Usuarios',
      accessDenied: 'Acceso Denegado',
      restrictedArea: '¡Bienvenido al área restringida!',
    },
  },
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  const translations: Record<LanguageCode, Translations> = {
    en: {
      welcome: 'Welcome',
      login: 'Login',
      logout: 'Logout',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      selectLanguage: 'Select Language',
      manageUsers: 'Manage Users (not implemented)',
      accessDenied: 'Access Denied',
      restrictedArea: 'Welcome to the restricted area!',
    },
    es: {
      welcome: 'Bienvenido',
      login: 'Iniciar Sesión',
      logout: 'Cerrar Sesión',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      selectLanguage: 'Seleccionar Idioma',
      manageUsers: 'Gestionar Usuarios (no implementado)',
      accessDenied: 'Acceso Denegado',
      restrictedArea: '¡Bienvenido al área restringida!',
    },
  };

  const changeLanguage = (newLanguage: LanguageCode) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
