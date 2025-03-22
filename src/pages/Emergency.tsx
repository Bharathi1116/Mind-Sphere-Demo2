import React from 'react';
import { Phone, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Emergency() {
  return (
    <div className="min-h-screen bg-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900 ml-4">Emergency Support</h1>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">If you're in immediate danger:</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-500" />
                  <p className="ml-4 text-xl font-bold">Call 911 or your local emergency number</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">24/7 Crisis Support:</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">National Suicide Prevention Lifeline</h3>
                  <a href="tel:1-800-273-8255" className="text-2xl font-bold text-purple-600 hover:text-purple-700">
                    1-800-273-8255
                  </a>
                </div>
                <div>
                  <h3 className="font-medium">Crisis Text Line</h3>
                  <p className="text-xl font-bold">Text HOME to 741741</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Warning Signs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Talking about wanting to die</li>
                  <li>• Looking for ways to hurt oneself</li>
                  <li>• Talking about feeling hopeless</li>
                  <li>• Talking about being a burden to others</li>
                  <li>• Increasing alcohol or drug use</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">What to Do</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stay with the person</li>
                  <li>• Remove any dangerous items</li>
                  <li>• Listen without judgment</li>
                  <li>• Call for professional help</li>
                  <li>• Take all threats seriously</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Additional Resources:</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/counseling"
                  className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold">Find a Counselor</h3>
                  <p className="text-gray-600">Connect with a mental health professional</p>
                </Link>
                <Link
                  to="/support"
                  className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold">Support Groups</h3>
                  <p className="text-gray-600">Join a supportive community</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}