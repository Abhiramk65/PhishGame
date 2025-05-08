import React from 'react';
import { useGameContext } from '../context/GameContext';
import { BarChart, CheckCircle, XCircle } from 'lucide-react';

const GameStatus: React.FC = () => {
  const { user } = useGameContext();

  // Calculate Accuracy
  const accuracy = user.totalEmailsReviewed > 0
    ? Math.round((user.correctIdentifications / user.totalEmailsReviewed) * 100)
    : 0;

  return (
    <div className="flex flex-wrap justify-end gap-3 mb-4">
      {/* Correct Identifications */}
      <div className="flex items-center bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
        <CheckCircle className="h-4 w-4 text-green-600 mr-1.5" />
        <span className="text-sm font-medium text-gray-700">Correct: {user.correctIdentifications}</span>
      </div>

      {/* Incorrect Identifications */}
      <div className="flex items-center bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
        <XCircle className="h-4 w-4 text-red-600 mr-1.5" />
        <span className="text-sm font-medium text-gray-700">Incorrect: {user.incorrectIdentifications}</span>
      </div>
      
      {/* Accuracy */}
      <div className="flex items-center bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
        <BarChart className="h-4 w-4 text-blue-600 mr-1.5" />
        <span className="text-sm font-medium text-gray-700">Accuracy: {accuracy}%</span>
      </div>
      
    </div>
  );
};

export default GameStatus;