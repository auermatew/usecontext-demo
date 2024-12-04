import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';

export const UserProfile: React.FC = () => {
  const { user, permissions, login, logout } = useContext(AuthContext);
  const { translations, language } = useContext(LanguageContext);

  return (
    <div className="user-profile">
      <h2>{translations[language].welcome}</h2>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Role: {user.role}</p>
          {permissions.canManageUsers && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              {translations[language].manageUsers}
            </button>
          )}
          <button
            onClick={logout}
            className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            {translations[language].logout}
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => login('user', 'user')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {translations[language].login} (User)
          </button>
          <button
            onClick={() => login('admin', 'admin')}
            className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            {translations[language].login} (Admin)
          </button>
        </>
      )}
    </div>
  );
};
