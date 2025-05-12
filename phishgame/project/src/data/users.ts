import { User, Email } from '../types';
import { achievementsList } from './achievements';
import { emails } from './emails'; // Import emails data

export const mockUser: User = {
  id: '1',
  name: 'Guest User',
  email: 'guest@example.com',
  correctIdentifications: 0,
  incorrectIdentifications: 0,
  totalEmailsReviewed: 0,
  achievements: achievementsList.map(a => ({ ...a })),
};