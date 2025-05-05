import React from 'react';
import { Mail, AlertCircle, Paperclip } from 'lucide-react';
import { Email } from '../types';

interface EmailListProps {
  emails: Email[];
  selectedEmailId: string | null;
  onSelectEmail: (emailId: string) => void;
}

const EmailList: React.FC<EmailListProps> = ({ emails, selectedEmailId, onSelectEmail }) => {
  return (
    <div className="w-full h-full border-r border-gray-200 bg-gray-50 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 bg-gray-100">
        <h2 className="text-lg font-semibold text-gray-700">Inbox</h2>
        <p className="text-sm text-gray-500">{emails.length} messages</p>
      </div>

      <div className="divide-y divide-gray-200">
        {emails.map((email) => (
          <div 
            key={email.id}
            onClick={() => onSelectEmail(email.id)}
            className={`p-4 cursor-pointer transition duration-150 ${
              selectedEmailId === email.id 
                ? 'bg-blue-100 border-l-4 border-blue-500' 
                : 'hover:bg-gray-100 border-l-4 border-transparent'
            } ${email.unread ? 'font-semibold' : ''}`}
            role="button"
            aria-selected={selectedEmailId === email.id}
            tabIndex={0}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                {email.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                )}
                <span className={`text-sm truncate ${email.unread ? '' : 'text-gray-500'}`}>
                  {email.from.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {new Date(email.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center mb-2">
              <p className={`text-sm font-medium truncate ${email.unread ? '' : 'text-gray-500'}`}>
                {email.subject}
              </p>
              {email.hasAttachment && (
                <Paperclip className="h-4 w-4 ml-1 text-gray-400 flex-shrink-0" />
              )}
            </div>
            <p className="text-xs text-gray-500 truncate">
              {email.body.replace(/<[^>]*>/g, '').substring(0, 60)}...
            </p>
            
            {/* Mobile tap indicator */}
            <div className="flex justify-end mt-2 md:hidden">
              <span className="text-xs text-blue-500">Tap to view →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailList;