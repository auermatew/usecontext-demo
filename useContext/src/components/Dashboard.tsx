import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';
import chillguy from '../assets/chillguy.jpeg';

export const Dashboard: React.FC = () => {
  const { permissions } = useContext(AuthContext);
  const { translations, language } = useContext(LanguageContext);

  if (!permissions.canAccessDashboard) {
    return <p>{translations[language].accessDenied}</p>;
  }

  return (
    <div className="dashboard flex flex-col items-center">
      <h1>{translations[language].restrictedArea}</h1>
      <img src={chillguy} alt="Chill Guy" className="rounded-full w-32 h-32" />
    </div>
  );
};
