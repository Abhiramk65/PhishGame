import React, { useState, useEffect, useRef } from 'react';
import { Paperclip, AlertTriangle, Shield, ThumbsUp, ThumbsDown } from 'lucide-react';
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import { Email } from '../types';
import { useGameContext } from '../context/GameContext';

// Add CSS for custom tooltip
const tooltipStyles = {
  tooltipWrapper: {
    position: 'relative',
    display: 'inline-block',
  } as React.CSSProperties,
  tooltip: {
    visibility: 'hidden',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    zIndex: 100,
    opacity: 0,
    transition: 'opacity 0.3s',
    pointerEvents: 'none',
    marginBottom: '5px',
  } as React.CSSProperties,
  linkHover: {
    visibility: 'visible',
    opacity: 1,
  } as React.CSSProperties,
  // Arrow pointing down
  arrow: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#333 transparent transparent transparent',
  } as React.CSSProperties,
};

interface EmailDetailProps {
  email: Email | null;
  onContinue: () => void;
}

const EmailDetail: React.FC<EmailDetailProps> = ({ email, onContinue }) => {
  const { identifyEmail, gameState, markEmailAsRead } = useGameContext();
  const [showHints, setShowHints] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Mark email as read when first opened/identified, not just when unread
    // This ensures if we reload state, it reflects correctly
    // The context handles the actual marking now.

    // Scroll to top when a new email is selected
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [email, markEmailAsRead]);

  useEffect(() => {
    if (gameState.feedback.show && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [gameState.feedback.show]);

  if (!email) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center p-8 bg-white">
        <p className="text-gray-500 text-center">
          Select an email to view its contents
        </p>
      </div>
    );
  }

  const handleIdentify = (isPhishing: boolean) => {
    if (email && email.unread) { // Only allow identification if unread
      identifyEmail(email.id, isPhishing);
    }
  };

  const handleContinue = () => {
    identifyEmail(null, false); // Clear global feedback flag
    // Scroll to top before loading next email
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    onContinue(); // Move to next email
  };

  const renderEmailBody = () => {
    // Use html-react-parser for safe rendering and modifications
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.tagName === 'a') {
          const isPhishingLink = email?.isPhishing && domNode.attribs['data-real-url'];
          const realUrl = domNode.attribs['data-real-url'];
          const originalHref = domNode.attribs['href'];
          const linkId = `link-${Math.random().toString(36).substring(2, 11)}`;

          if (isPhishingLink) {
            // For phishing links: prevent click, show real URL on hover via custom tooltip
            return (
              <span style={tooltipStyles.tooltipWrapper}>
                <a 
                  href={originalHref} // Keep potentially fake href visible
                  onClick={(e) => e.preventDefault()} // Prevent navigation
                  className="text-blue-600 hover:text-blue-800 underline cursor-help" // Style to indicate it's interactive but potentially unsafe
                  onMouseEnter={() => setHoveredLink(linkId)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {domToReact(domNode.children as any, options)}
                </a>
                <div style={{
                  ...tooltipStyles.tooltip,
                  ...(hoveredLink === linkId ? tooltipStyles.linkHover : {})
                }}>
                  <span>This link really points to:</span>
                  <br />
                  <strong>{realUrl}</strong>
                  <div style={tooltipStyles.arrow}></div>
                </div>
              </span>
            );
          } else if (originalHref && !originalHref.startsWith('#')) {
             // For legitimate links, ALSO prevent click, but style normally
            return (
              <a 
                href={originalHref}
                onClick={(e) => e.preventDefault()} // Prevent navigation
                // Removed target="_blank" and rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline cursor-not-allowed" // Add cursor-not-allowed to indicate it won't navigate
              >
                {domToReact(domNode.children as any, options)}
              </a>
            ); 
          } else {
            // Handle other cases or return default rendering if needed
            // For example, internal links starting with # might just be returned as is
            // Or if href is missing entirely
            return <>{domToReact(domNode.children as any, options)}</>; // Render content without link if href is invalid/missing
          }
        }
      },
    };

    return parse(email.body, options);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full md:w-2/3 bg-white p-4 overflow-y-auto max-h-[600px]"
    >
      {/* Email Header */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-3">{email.subject}</h2>
        <div className="flex flex-wrap justify-between items-center mb-2">
          <div>
            <p className="text-sm">
              <span className="font-semibold">From:</span> {email.from.name} &lt;{email.from.email}&gt;
            </p>
            <p className="text-sm">
              <span className="font-semibold">To:</span> {email.to}
            </p>
          </div>
          <div className="text-sm text-gray-500">
            {new Date(email.date).toLocaleString()}
          </div>
        </div>
        
        {email.hasAttachment && (
          <div className="mt-2 flex items-center p-2 bg-gray-50 rounded border border-gray-200">
            <Paperclip className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm">{email.attachmentName || 'Attachment.pdf'}</span>
          </div>
        )}
      </div>

      {/* Email Body */}
      <div className="mb-6">
        <div className="prose max-w-none">{renderEmailBody()}</div>
      </div>

      {/* --- Game Controls / Feedback Logic --- */}
      
      {/* Condition 1: Feedback is actively showing for the *last identified* email */}
      {gameState.feedback.show && (
        <div 
          ref={feedbackRef}
          className={`mt-6 p-4 rounded border ${gameState.feedback.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
        >
          <div className="flex items-start">
             {gameState.feedback.isCorrect ? (
                <Shield className="h-6 w-6 text-green-500 mr-3 mt-1" />
             ) : (
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1" />
             )}
             <div>
                <h3 className={`font-semibold text-lg ${gameState.feedback.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                 {gameState.feedback.message}
                </h3>
                <div className="mt-2">
                 {gameState.feedback.details.map((detail, index) => (
                    <p key={index} className="text-sm mb-1">{detail}</p>
                 ))}
                </div>
                {email?.isPhishing && email.phishingIndicators && (
                 <div className="mt-4">
                    <h4 className="font-medium mb-2">Phishing indicators:</h4>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                     {email.phishingIndicators.map((indicator, index) => (
                        <li key={index}>{indicator.description}</li>
                     ))}
                    </ul>
                 </div>
                )}
                <button 
                 onClick={handleContinue}
                 className={`mt-4 px-4 py-2 rounded font-medium ${
                    gameState.feedback.isCorrect 
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-red-600 hover:bg-red-700'
                 } text-white transition`}
                >
                 Continue
                </button>
             </div>
          </div>
        </div>
      )}

      {/* Condition 2: Email is selected, unread, and feedback is NOT showing -> Show Identify Buttons */}
      {email && email.unread && !gameState.feedback.show && (
         <div className="flex flex-col mt-8">
           <div className="flex justify-between gap-4">
             <button
               onClick={() => handleIdentify(false)}
               className="flex-1 bg-green-100 hover:bg-green-200 text-green-800 font-medium py-3 px-4 rounded flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
               disabled={!email.unread} // Explicitly disable if already answered
             >
               <ThumbsUp className="h-5 w-5 mr-2" />
               <span>Legitimate Email</span>
             </button>
             <button
               onClick={() => handleIdentify(true)}
               className="flex-1 bg-red-100 hover:bg-red-200 text-red-800 font-medium py-3 px-4 rounded flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
               disabled={!email.unread} // Explicitly disable if already answered
             >
               <ThumbsDown className="h-5 w-5 mr-2" />
               <span>Phishing Attempt</span>
             </button>
           </div>
           <button 
             onClick={() => setShowHints(!showHints)}
             className="mt-4 text-blue-600 hover:text-blue-800 text-sm underline self-center"
           >
             {showHints ? 'Hide hint' : 'Need a hint?'}
           </button>
           {showHints && (
             <div className="mt-2 p-3 bg-blue-50 text-blue-800 rounded border border-blue-200">
               <p className="text-sm">
                 <span className="font-semibold">Hint:</span> Check the sender's email address carefully and look for suspicious links or urgency in the message.
               </p>
             </div>
           )}
         </div>
      )}
      
      {/* Condition 3: Email is selected, already read (!unread), and feedback is NOT showing -> Show Already Answered Message */}
      {email && !email.unread && !gameState.feedback.show && (
        <div className="mt-8 p-4 bg-gray-100 border border-gray-200 rounded text-center">
            <p className="text-gray-600 font-medium">You have already reviewed this email.</p>
             {/* Optional: Add a button to explicitly move to the next unread email? */}
             {/* <button onClick={onContinue} className="mt-2 text-blue-600 hover:underline text-sm">Next Unread Email</button> */}
        </div>
      )}

    </div>
  );
};

export default EmailDetail;