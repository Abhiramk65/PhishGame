import React from 'react';
import { Shield, Mail, BookOpen, Clock, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Learn to Identify Phishing Emails
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Train your cybersecurity skills through our interactive email inbox simulation.
                Protect yourself and your organization from phishing attacks.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate('inbox')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition flex items-center"
                >
                  Go to Inbox
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button 
                  onClick={() => onNavigate('tutorial')}
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium py-3 px-6 transition"
                >
                  Learn How to Play
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">Email Inbox Simulation</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 border border-yellow-200 bg-yellow-50 rounded flex items-start">
                    <div className="bg-yellow-200 p-1 rounded mr-3">
                      <Mail className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Suspicious Email Example</p>
                      <p className="text-xs text-gray-500 truncate">Verify your account immediately...</p>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-green-200 bg-green-50 rounded flex items-start">
                    <div className="bg-green-200 p-1 rounded mr-3">
                      <Mail className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Legitimate Email Example</p>
                      <p className="text-xs text-gray-500 truncate">Your order has shipped...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Realistic Inbox</h3>
                <p className="text-gray-600">
                  Review a mix of legitimate and phishing emails designed to mimic real-world threats.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Identify Emails</h3>
                <p className="text-gray-600">
                  Decide if each email is legitimate or a phishing attempt. Receive immediate feedback on your choice.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Learn & Improve</h3>
                <p className="text-gray-600">
                  See detailed explanations for phishing indicators and track your accuracy over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Sharpen Your Skills?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Practice identifying phishing attempts in our simulated inbox environment.
            </p>
            <button
              onClick={() => onNavigate('inbox')}
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition"
            >
              Go to Inbox
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Phishing Defender. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;