import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import InboxPage from './pages/InboxPage';
import Tutorial from './components/Tutorial';
import { GameProvider, useGameContext } from './context/GameContext';

function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const { user } = useGameContext();
  
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header onNavigate={handleNavigate} currentPath={currentPath} />
      
      <main className="min-h-[calc(100vh-64px)]">
        {currentPath === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        
        {currentPath === 'inbox' && (
          <InboxPage onNavigate={handleNavigate} />
        )}
        
        {currentPath === 'tutorial' && (
          <div className="container mx-auto px-4 py-8">
            <Tutorial onNavigate={handleNavigate} />
          </div>
        )}
      </main>
      
      {/* Only show footer on non-home pages since HomePage has its own footer */}
      {currentPath !== 'home' && (
        <footer className="bg-gray-800 text-white py-4 text-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p>&copy; 2025 Phishing Awareness Game</p>
              <a 
                href="https://www.linkedin.com/in/abhiram-koushik-komanduri/" 
                className="text-blue-300 hover:text-blue-200 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

// This is a comment line
