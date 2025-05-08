import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { User, Email, GameState, Achievement } from '../types';
import { emails } from '../data/emails';
import { mockUser } from '../data/users';
import { achievementsList } from '../data/achievements';

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
  const [availableEmails, setAvailableEmails] = useState<Email[]>(emails); // Initially, all emails are available

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
    setAvailableEmails(emails.map(email => ({ ...email, unread: true })));
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
    
    // Update user stats
    setUser(prev => {
      const updatedUser = {
        ...prev,
        totalEmailsReviewed: prev.totalEmailsReviewed + 1,
        correctIdentifications: isCorrect ? prev.correctIdentifications + 1 : prev.correctIdentifications,
        incorrectIdentifications: !isCorrect ? prev.incorrectIdentifications + 1 : prev.incorrectIdentifications,
      };
      
      // Update achievements (Level/Score based checks removed)
      const achievements = [...prev.achievements];
      // First identification achievement
      if (isCorrect && identifiedEmail.isPhishing && !achievements[0].unlocked) {
        achievements[0] = {
          ...achievements[0],
          unlocked: true,
          unlockedAt: new Date().toISOString()
        };
      }
      // Phishing Spotter (e.g., 5 correct phishing IDs)
      if (isCorrect && identifiedEmail.isPhishing && updatedUser.correctIdentifications >= 5 && !achievements[1].unlocked) {
        achievements[1] = {
            ...achievements[1],
            unlocked: true,
            unlockedAt: new Date().toISOString()
        };
      }
      // Accuracy Award (e.g., 90% accuracy after 10 emails)
      if (updatedUser.totalEmailsReviewed >= 10 && (updatedUser.correctIdentifications / updatedUser.totalEmailsReviewed) >= 0.9 && !achievements[2].unlocked) {
        achievements[2] = {
            ...achievements[2],
          unlocked: true,
          unlockedAt: new Date().toISOString()
        };
      }
      // Remove Achievement checks based on level/score
      /*
      // Security specialist achievement (Level based)
      if (updatedUser.level >= 5 && !achievements[5].unlocked) {
        achievements[5] = {
          ...achievements[5],
          unlocked: true,
          unlockedAt: new Date().toISOString()
        };
      }
      // Top defender achievement (Score based)
      if (updatedUser.score >= 1000 && !achievements[6].unlocked) {
        achievements[6] = {
          ...achievements[6],
          unlocked: true,
          unlockedAt: new Date().toISOString()
        };
      }
      */
      // Add other non-score/level achievement checks here...
      
      return {
        ...updatedUser,
        achievements
      };
    });
    
  }, [markEmailAsRead, availableEmails]); // Removed trackChallengeProgress from dependencies

  // Removed calculatePoints function (using fixed value now)
  
  // Helper function to generate feedback details (remains the same)
  const getFeedbackDetails = (email: Email, isCorrect: boolean): string[] => {
    if (isCorrect) {
      if (email.isPhishing) {
        return ["Good catch! This email shows signs of being a phishing attempt."];
      } else {
        return ["Correct! This is a legitimate email."];
      }
    } else {
      if (email.isPhishing) {
        return ["This is a phishing email. Always be cautious of suspicious emails."];
      } else {
        return ["This is actually a legitimate email. Be careful not to mark real emails as phishing."];
      }
    }
  };
  
  return (
    <GameContext.Provider 
      value={{
        user,
        gameState,
        emails: availableEmails,
        identifyEmail,
        startGame,
        pauseGame,
        resetGame,
        markEmailAsRead,
        clearFeedback,
        // Removed challenge functions from value
      }}
    >
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