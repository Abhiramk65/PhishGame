import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Shield, AlertTriangle, BookMarked, Mail, Link, FileText, Eye, Bell, FileWarning, ExternalLink, Play, ArrowRight, CheckCircle } from 'lucide-react';
import { tutorialSteps, phishingTips } from '../data/tips';

const Tutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTips, setShowTips] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(false);
  
  const goToNextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  // Categorize steps for navigation
  const categories = [
    { name: "Introduction", steps: [0, 1, 2] },
    { name: "Email Analysis", steps: [3, 4, 5, 6] },
    { name: "Security", steps: [7, 8, 9] },
    { name: "Game", steps: [10, 11] }
  ];
  
  // Find the current category
  const getCurrentCategory = () => {
    return categories.find(category => 
      category.steps.includes(currentStep)
    )?.name || "Introduction";
  };

  // Get icon based on step
  const getStepIcon = (step: number) => {
    if (step <= 2) return <Shield className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 3) return <Mail className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 4) return <Link className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 5) return <FileText className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 6) return <Eye className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 7) return <Bell className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 8) return <FileWarning className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 9) return <ExternalLink className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    if (step === 10) return <Play className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
    return <CheckCircle className="h-8 w-8 md:h-8 md:w-8 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />;
  };
  
  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center mb-2 sm:mb-0">
          <BookOpen className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
          {showTips ? "Phishing Tips" : "Phishing Detection Tutorial"}
        </h2>
        <button 
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors self-start sm:self-auto"
          onClick={() => setShowTips(!showTips)}
        >
          {showTips ? "Back to Tutorial" : "View Quick Reference"}
        </button>
      </div>
      
      {!showTips ? (
        <div className="mb-6 sm:mb-8">
          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentStep + 1) / tutorialSteps.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Category Navigation - Mobile Dropdown */}
          <div className="block sm:hidden mb-4">
            <button 
              onClick={() => setExpandedCategory(!expandedCategory)}
              className="w-full flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span className="font-medium">{getCurrentCategory()}</span>
              <ChevronRight className={`h-5 w-5 transition-transform ${expandedCategory ? 'rotate-90' : ''}`} />
            </button>
            
            {expandedCategory && (
              <div className="mt-1 bg-white border border-gray-200 rounded-lg shadow-sm">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      goToStep(category.steps[0]);
                      setExpandedCategory(false);
                    }}
                    className={`w-full text-left py-2 px-3 text-sm ${
                      getCurrentCategory() === category.name
                        ? 'font-medium text-blue-600 bg-blue-50'
                        : 'text-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Navigation - Desktop */}
          <div className="hidden sm:grid grid-cols-4 gap-1 bg-gray-100 p-1 rounded-lg mb-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => goToStep(category.steps[0])}
                className={`text-sm py-2 px-1 rounded-md transition ${
                  getCurrentCategory() === category.name
                    ? 'bg-white shadow-sm font-medium text-blue-600'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Content Card */}
          <div className="mb-6 bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="flex items-center sm:items-start mb-3 sm:mb-0">
                {getStepIcon(currentStep)}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {tutorialSteps[currentStep].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tutorialSteps[currentStep].content}
                </p>
                
                {/* Add examples or visuals based on the current step */}
                {currentStep === 3 && (
                  <div className="mt-4 bg-white p-3 rounded border border-gray-200 overflow-x-auto">
                    <p className="text-sm font-medium text-gray-700 mb-1">Example:</p>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <code className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs sm:text-sm whitespace-nowrap">support@netfl1x-account.com</code>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-green-500 mr-2">✓</span>
                      <code className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs sm:text-sm whitespace-nowrap">support@netflix.com</code>
                    </div>
                  </div>
                )}
                
                {currentStep === 4 && (
                  <div className="mt-4 bg-white p-3 rounded border border-gray-200 overflow-x-auto">
                    <p className="text-sm font-medium text-gray-700 mb-1">Example:</p>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Link appears as: <span className="text-blue-600 underline">paypal.com</span></span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 ml-5">But actually links to:</span>
                    </div>
                    <div className="flex items-center mt-1 ml-5">
                      <code className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs whitespace-nowrap">http://paypal-secure.fakesdomain.com/login</code>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
            <button 
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
              className={`flex items-center px-4 py-2 rounded transition mb-3 sm:mb-0 ${
                currentStep === 0 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Previous
            </button>
            
            <div className="flex space-x-1 overflow-auto py-2 max-w-full sm:py-0 order-3 sm:order-2">
              {tutorialSteps.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`h-2 w-2 rounded-full cursor-pointer transition-colors flex-shrink-0 ${
                    index === currentStep ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNextStep}
              disabled={currentStep === tutorialSteps.length - 1}
              className={`flex items-center px-4 py-2 rounded transition order-2 sm:order-3 ${
                currentStep === tutorialSteps.length - 1
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              Next
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-gray-700 mb-4 sm:mb-6">
            Use this quick reference guide to help you identify phishing attempts in your inbox and in real life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phishingTips.map((tip) => (
              <div 
                key={tip.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 sm:mt-8 p-4 sm:p-6 border-t border-gray-200 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Ready to test your skills?</h3>
        <p className="text-gray-600 mb-4">
          Put your phishing detection abilities to the test in our interactive inbox simulation.
          Apply what you've learned to identify real phishing attempts and earn points!
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition flex items-center">
            Start the Challenge
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;