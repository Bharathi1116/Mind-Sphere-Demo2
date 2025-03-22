import React from 'react';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Support() {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Get Support Now</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Immediate Support Options</h2>
          
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-purple-50 rounded-lg">
              <Phone className="w-6 h-6 text-purple-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-medium">24/7 Crisis Hotline</h3>
                <p className="text-gray-600 mb-2">Speak with a trained counselor immediately</p>
                <a href="tel:1-800-273-8255" className="text-purple-600 font-semibold text-lg">
                  1-800-273-8255
                </a>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-purple-50 rounded-lg">
              <MessageCircle className="w-6 h-6 text-purple-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-medium">Crisis Text Line</h3>
                <p className="text-gray-600 mb-2">Text with a crisis counselor 24/7</p>
                <p className="text-purple-600 font-semibold">Text HOME to 741741</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Schedule a Consultation</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Time
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
                <option>Morning (9AM - 12PM)</option>
                <option>Afternoon (12PM - 5PM)</option>
                <option>Evening (5PM - 8PM)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}