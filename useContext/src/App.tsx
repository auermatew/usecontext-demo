import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProfile } from './components/UserProfile';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggler } from './components/ThemeToggler';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-dark-background text-black dark:text-white transition-all duration-300">
            <div className="container mx-auto p-6">
              <h1 className="text-4xl font-bold mb-4 text-center">UseContext Demo</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <LanguageSelector />
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <ThemeToggler />
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <UserProfile />
                </div>
              </div>
              <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Dashboard />
              </div>
            </div>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
