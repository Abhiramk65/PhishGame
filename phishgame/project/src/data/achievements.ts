import { Achievement } from '../types';

export const achievementsList: Achievement[] = [
  {
    id: '1',
    name: 'First Steps',
    description: 'Identify your first phishing email',
    icon: 'award',
    unlocked: false
  },
  {
    id: '2',
    name: 'Perfect Beginner',
    description: 'Correctly identify all emails in the beginner level',
    icon: 'thumbs-up',
    unlocked: false
  },
  {
    id: '3',
    name: 'Speed Reader',
    description: 'Correctly identify 5 emails in less than 2 minutes',
    icon: 'zap',
    unlocked: false
  },
  {
    id: '4',
    name: 'Cautious Mind',
    description: 'Correctly identify 3 phishing emails in a row',
    icon: 'shield',
    unlocked: false
  },
  {
    id: '5',
    name: 'Expert Eye',
    description: 'Identify an expert-level phishing email correctly',
    icon: 'eye',
    unlocked: false
  },
  {
    id: '6',
    name: 'Security Specialist',
    description: 'Reach level 5 in the game',
    icon: 'lock',
    unlocked: false
  },
  {
    id: '7',
    name: 'Top Defender',
    description: 'Score over 1000 points',
    icon: 'shield-check',
    unlocked: false
  },
  {
    id: '8',
    name: 'Perfect Streak',
    description: 'Correctly identify 10 emails in a row',
    icon: 'trending-up',
    unlocked: false
  }
];