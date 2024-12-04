export type LanguageCode = 'en' | 'es';

export interface Translations {
  welcome: string;
  login: string;
  logout: string;
  darkMode: string;
  lightMode: string;
  selectLanguage: string;
  manageUsers: string;
  accessDenied: string;
  restrictedArea: string;
}

export interface LanguageContextType {
  language: LanguageCode;
  translations: Record<LanguageCode, Translations>;
  changeLanguage: (lang: LanguageCode) => void;
}
