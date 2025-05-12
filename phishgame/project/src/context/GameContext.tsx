import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { User, Email, GameState, Achievement } from '../types';
import { emails } from '../data/emails';
import { mockUser } from '../data/users';
import { achievementsList } from '../data/achievements';

// Function to shuffle array using Fisher-Yates algorithm
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Define the context shape
interface GameContextProps {
  user: User;
  gameState: GameState;
  emails: Email[];
  identifyEmail: (emailId: string | null, userSelectedPhishing: boolean) => void;
  startGame: () => void;
  pauseGame: () => void;
  resetGame: () => void;
  markEmailAsRead: (emailId: string) => void;
  clearFeedback: () => void;
  // Removed challenge-related functions
}

// Create the context
const GameContext = createContext<GameContextProps | undefined>(undefined);

// Create the provider component
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(mockUser);
  const [gameState, setGameState] = useState<GameState>({
  isActive: false,
  isPaused: false,
  isCompleted: false,
  feedback: {
    show: false,
    isCorrect: false,
    message: '',
    details: []
  }
  });
  
  // Initially, randomize all emails
  const [availableEmails, setAvailableEmails] = useState<Email[]>(() => shuffleArray(emails));

  // Function to start the game
  const startGame = () => {
    setGameState(prev => ({ ...prev, isActive: true, isPaused: false }));
  };

  // Function to pause the game
  const pauseGame = () => {
    setGameState(prev => ({ ...prev, isPaused: true }));
  };

  // Function to reset the game
  const resetGame = () => {
    setUser(mockUser);
    // Shuffle emails again when resetting the game
    setAvailableEmails(shuffleArray(emails.map(email => ({ ...email, unread: true }))));
    setGameState({
      isActive: false,
      isPaused: false,
      isCompleted: false,
      feedback: { show: false, isCorrect: false, message: '', details: [] }
    });
  };
  
  // Function to mark an email as read
  const markEmailAsRead = useCallback((emailId: string) => {
    setAvailableEmails(prevEmails => 
      prevEmails.map(email => 
        email.id === emailId ? { ...email, unread: false } : email
      )
    );
  }, []);
  
  // Function to clear the feedback display
  const clearFeedback = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      feedback: { ...prev.feedback, show: false }
    }));
  }, []);

  // Removed trackChallengeProgress function

  // Removed getChallengeProgress function
  
  // Handle email identification
  const identifyEmail = useCallback((emailId: string | null, userSelectedPhishing: boolean) => {
    // If emailId is null, it means we're continuing after feedback
    if (emailId === null) {
      setGameState(prev => ({
        ...prev,
        feedback: {
          ...prev.feedback,
          show: false
        }
      }));
      return;
    }
    
    // Mark the email as read when identifying it
    markEmailAsRead(emailId);
    
    const identifiedEmail = availableEmails.find(email => email.id === emailId);
    
    if (!identifiedEmail) return;
    
    const isCorrect = identifiedEmail.isPhishing === userSelectedPhishing;
    
    // Update game state with feedback
    setGameState(prev => ({
      ...prev,
      feedback: {
        show: true,
        isCorrect,
        message: isCorrect 
          ? `Correct!`
          : `Incorrect. This email is ${identifiedEmail.isPhishing ? 'a phishing attempt' : 'legitimate'}.`,
        details: getFeedbackDetails(identifiedEmail, isCorrect)
      }
    }));
    
    // Update user score
    setUser(prevUser => {
      const newCorrectIdentifications = isCorrect 
        ? prevUser.correctIdentifications + 1 
        : prevUser.correctIdentifications;
      
      const newTotalEmailsReviewed = prevUser.totalEmailsReviewed + 1;
      const newIncorrectIdentifications = !isCorrect
        ? prevUser.incorrectIdentifications + 1
        : prevUser.incorrectIdentifications;
      
      return {
        ...prevUser,
        correctIdentifications: newCorrectIdentifications,
        incorrectIdentifications: newIncorrectIdentifications,
        totalEmailsReviewed: newTotalEmailsReviewed
      };
    });
    
  }, [availableEmails, markEmailAsRead]);
  
  // Function to get feedback details
  const getFeedbackDetails = (email: Email, isCorrect: boolean): string[] => {
    if (email.isPhishing) {
      return email.phishingIndicators?.map(indicator => indicator.description) || [];
    } else {
      return ["This is a legitimate email with no phishing indicators."];
    }
  };
  
  // Wrapped the below in a useEffect to ensure it only runs on mount
  useEffect(() => {
    // Automatically start the game when component mounts
    startGame();
  }, []);

  // Context value object
  const contextValue: GameContextProps = {
    user,
    gameState,
    emails: availableEmails,
    identifyEmail,
    startGame,
    pauseGame,
    resetGame,
    markEmailAsRead,
    clearFeedback
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the context
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};