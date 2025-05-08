export interface Email {
  id: string;
  from: {
    name: string;
    email: string;
  };
  to: string;
  subject: string;
  body: string;
  date: string;
  hasAttachment: boolean;
  attachmentName?: string;
  isPhishing: boolean;
  phishingIndicators?: PhishingIndicator[];
  unread: boolean;
}

export interface PhishingIndicator {
  type: 'sender' | 'subject' | 'link' | 'attachment' | 'urgency' | 'grammar' | 'domain' | 'generic_greeting' | 'request_sensitivity';
  description: string;
  location?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  correctIdentifications: number;
  incorrectIdentifications: number;
  totalEmailsReviewed: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface GameState {
  isActive: boolean;
  isPaused: boolean;
  isCompleted: boolean;
  feedback: {
    show: boolean;
    isCorrect: boolean;
    message: string;
    details: string[];
  };
}

export interface GameSettings {
  showHints: boolean;
}