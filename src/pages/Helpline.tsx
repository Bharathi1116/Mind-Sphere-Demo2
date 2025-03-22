import React from 'react';
import { Phone, MessageCircle, ArrowLeft, Clock, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Helpline() {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">24/7 Helpline Support</h1>

          <div className="space-y-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold ml-3">Crisis Hotline</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our trained counselors are here to listen and provide immediate support, 24 hours a day.
              </p>
              <a href="tel:1-800-273-8255" className="text-2xl font-bold text-purple-600 hover:text-purple-700">
                1-800-273-8255
              </a>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold ml-3">Text Support</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Prefer to text? Message with a crisis counselor anytime.
              </p>
              <p className="text-xl font-bold">Text HOME to 741741</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Always Available</h3>
                <p className="text-gray-600">24/7, 365 days a year support</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Globe className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Multiple Languages</h3>
                <p className="text-gray-600">Support in over 150 languages</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Heart className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Confidential</h3>
                <p className="text-gray-600">Private and secure support</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">1.</span>
                  A caring counselor will answer your call or message
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2.</span>
                  They'll listen to you without judgment
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">3.</span>
                  Together, you'll discuss your concerns and feelings
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">4.</span>
                  They'll help you develop a safety plan if needed
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">5.</span>
                  You'll be connected with additional resources
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}