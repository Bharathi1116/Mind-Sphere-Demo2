import React from 'react';
import { BookOpen, Brain, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Learn() {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Learn About Mental Health</h1>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-semibold ml-4">Understanding Mental Health</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act as we cope with life. It also helps determine how we handle stress, relate to others, and make choices.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Common Conditions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Depression</li>
                  <li>• Anxiety Disorders</li>
                  <li>• Bipolar Disorder</li>
                  <li>• PTSD</li>
                  <li>• OCD</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Warning Signs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Eating or sleeping too much or too little</li>
                  <li>• Pulling away from people and activities</li>
                  <li>• Having low or no energy</li>
                  <li>• Feeling helpless or hopeless</li>
                  <li>• Experiencing severe mood swings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-semibold ml-4">Mental Health Tips</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Connect with Others</h3>
                <p className="text-gray-600">Building strong relationships and talking with people you trust can improve your mental health.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Stay Active</h3>
                <p className="text-gray-600">Regular physical activity can help reduce stress, anxiety, and depression while improving self-esteem.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Practice Mindfulness</h3>
                <p className="text-gray-600">Being mindful of the present moment can help reduce stress and improve overall well-being.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-semibold ml-4">Self-Care Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/resources"
                className="block p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2">Educational Materials</h3>
                <p className="text-gray-600">Access our library of articles, videos, and worksheets.</p>
              </Link>
              <Link
                to="/community"
                className="block p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2">Support Community</h3>
                <p className="text-gray-600">Connect with others who understand what you're going through.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}