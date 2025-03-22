import React from 'react';
import { ArrowLeft, Heart, Brain, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SelfCare() {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Self-Care Tools & Resources</h1>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <Sun className="w-6 h-6 text-purple-600 mb-3" />
                <h2 className="text-xl font-semibold mb-2">Daily Wellness Check</h2>
                <p className="text-gray-600 mb-4">
                  Track your mood and daily activities to maintain mental wellness.
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Start Check-In
                </button>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Moon className="w-6 h-6 text-purple-600 mb-3" />
                <h2 className="text-xl font-semibold mb-2">Sleep Journal</h2>
                <p className="text-gray-600 mb-4">
                  Monitor your sleep patterns and improve your rest quality.
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Track Sleep
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Guided Activities</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">5-Minute Meditation</h3>
                  <p className="text-gray-600 mb-3">
                    A quick mindfulness exercise to center yourself.
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Start Meditation →
                  </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Breathing Exercises</h3>
                  <p className="text-gray-600 mb-3">
                    Simple breathing techniques for stress relief.
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Begin Exercise →
                  </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Gratitude Journal</h3>
                  <p className="text-gray-600 mb-3">
                    Practice daily gratitude for positive mental health.
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Write Entry →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold ml-3">Mood-Boosting Activities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Physical Exercise</h3>
                  <p className="text-gray-600">
                    Simple exercises you can do at home to boost your mood.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Creative Expression</h3>
                  <p className="text-gray-600">
                    Art and writing activities for emotional release.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Nature Connection</h3>
                  <p className="text-gray-600">
                    Activities to help you connect with nature.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Social Connection</h3>
                  <p className="text-gray-600">
                    Ways to maintain meaningful relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold ml-3">Self-Care Tips</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Morning Routine</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Gentle stretching</li>
                    <li>• Mindful breathing</li>
                    <li>• Healthy breakfast</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Afternoon Break</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Short walk</li>
                    <li>• Meditation</li>
                    <li>• Healthy snack</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Evening Routine</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Digital sunset</li>
                    <li>• Relaxing activity</li>
                    <li>• Gratitude practice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}