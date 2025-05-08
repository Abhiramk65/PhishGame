import React, { useState, useEffect } from 'react';
import EmailList from '../components/EmailList';
import EmailDetail from '../components/EmailDetail';
import GameStatus from '../components/GameStatus';
import { useGameContext } from '../context/GameContext';
import { Email } from '../types';
import { ArrowLeft, Trophy } from 'lucide-react';

interface InboxPageProps {
  onNavigate: (path: string) => void;
}

const InboxPage: React.FC<InboxPageProps> = ({ onNavigate }) => {
  const { emails, identifyEmail, user, resetGame, clearFeedback } = useGameContext();
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [showEmailDetail, setShowEmailDetail] = useState(false); // For mobile view toggling
  
  useEffect(() => {
    // Select the first unread email if available when emails from context change
    const firstUnread = emails.find(email => email.unread);
    // Only set if selectedEmailId is currently null to avoid resetting selection unnecessarily
    if (selectedEmailId === null) {
        setSelectedEmailId(firstUnread ? firstUnread.id : emails[0]?.id || null);
    }
  }, [emails, selectedEmailId]);

  useEffect(() => {
    // Check if all emails have been read (identified)
    // Use 'emails' directly from context
    const allRead = emails.length > 0 && emails.every(email => !email.unread);
    if (allRead) {
      setShowCompletionMessage(true);
    } else {
      setShowCompletionMessage(false);
    }
  }, [emails]);
  
  const selectedEmail = emails.find(email => email.id === selectedEmailId) || null;
    
  const handleSelectEmail = (emailId: string) => {
    if (emailId !== selectedEmailId) { // Only clear feedback if selecting a DIFFERENT email
        clearFeedback(); // Clear feedback when a new email is selected
    }
    setSelectedEmailId(emailId);
    setShowEmailDetail(true); // Show email detail view on mobile when an email is selected
  };

  const handleBackToInbox = () => {
    setShowEmailDetail(false); // Hide email detail and show inbox list on mobile
  };

  const handleContinue = () => {
    // Clear any existing feedback
    clearFeedback();
    
    // Use emails directly from context
    const currentIndex = emails.findIndex(email => email.id === selectedEmailId);
    let nextEmailId: string | null = null;

    // Find the next unread email AFTER the current one
    for (let i = currentIndex + 1; i < emails.length; i++) {
      if (emails[i].unread) {
        nextEmailId = emails[i].id;
        break;
      }
    }
    // If no subsequent unread email, try from the beginning UP TO the current one
    if (!nextEmailId) {
      for (let i = 0; i < currentIndex; i++) {
        if (emails[i].unread) {
          nextEmailId = emails[i].id;
          break;
        }
      }
    }

    // If there are absolutely no unread emails left (including the current one if it was last)
    // Stay on the current email or handle as completed (useEffect handles completion message)
    // If there was an unread email found, select it.
    if (nextEmailId) {
        // On mobile, when we continue to the next email, ensure we're still in detail view
        if (window.innerWidth < 768) { // 768px is the md breakpoint in Tailwind
            setShowEmailDetail(true);
        }
        
        // Update the selected email - this will trigger the scroll in EmailList component
        setSelectedEmailId(nextEmailId);
      } else {
        // Optional: If no *other* unread email exists, maybe select the next email regardless of read status
        // to allow reviewing already-read emails after the last unread one is done.
        // Or just stay on the current one. Let's stay for simplicity.
        // setSelectedEmailId(emails[(currentIndex + 1) % emails.length]?.id || null);
      }

    // No need to check completion here, the useEffect [emails] handles it
  };

  const handleResetInbox = () => {
    setShowCompletionMessage(false);
    resetGame(); // Call the context reset function
    // The useEffect depending on [emails] will run due to resetGame updating context,
    // and the other useEffect [emails, selectedEmailId] will select the first unread email.
    setSelectedEmailId(null); // Reset selection to allow the effect to pick the first unread
    setShowEmailDetail(false); // Go back to inbox view on reset
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inbox</h1>
        </div>
        <GameStatus />
      </div>
      
      {showCompletionMessage ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Trophy className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Inbox Cleared!</h2>
          <p className="text-gray-600 mb-6">
            You've reviewed all emails in your inbox.
            Great job staying vigilant!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleResetInbox}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition"
            >
              Start Over
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition"
            >
              Go Home
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4 min-h-[calc(100vh-200px)] md:h-[calc(100vh-180px)]">
          {/* Email List - Always display on desktop, but conditionally on mobile */}
          <div className={`w-full md:w-1/3 md:block ${showEmailDetail ? 'hidden' : 'block'}`}>
                <EmailList 
              emails={emails}
                  selectedEmailId={selectedEmailId}
                  onSelectEmail={handleSelectEmail}
                />
          </div>
          
          {/* Email Detail - Always display on desktop, but conditionally on mobile */}
          <div className={`w-full md:w-2/3 md:block ${showEmailDetail ? 'block' : 'hidden'}`}>
            {/* Mobile back button */}
            {selectedEmail && (
              <div className="md:hidden bg-white p-2 border-b border-gray-200">
                <button 
                  onClick={handleBackToInbox}
                  className="flex items-center text-blue-600 space-x-1"
                >
                  <ArrowLeft size={18} />
                  <span>Back to inbox</span>
                </button>
              </div>
            )}
            
                <EmailDetail 
                  email={selectedEmail} 
                  onContinue={handleContinue}
                />
              </div>
            </div>
          )}
    </div>
  );
};

export default InboxPage;