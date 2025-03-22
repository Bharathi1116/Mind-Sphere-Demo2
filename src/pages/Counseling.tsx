import React from 'react';
import { ArrowLeft, Video, MessageSquare, Calendar, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Counseling() {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Online Counseling Services</h1>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <Video className="w-6 h-6 text-purple-600 mb-3" />
                <h2 className="text-xl font-semibold mb-2">Video Sessions</h2>
                <p className="text-gray-600">
                  Connect face-to-face with licensed therapists from the comfort of your home.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-600 mb-3" />
                <h2 className="text-xl font-semibold mb-2">Text Therapy</h2>
                <p className="text-gray-600">
                  Message your therapist anytime and receive responses within 24 hours.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Our Licensed Therapists</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Licensed Clinical Psychologists</li>
                <li>• Licensed Marriage and Family Therapists</li>
                <li>• Licensed Clinical Social Workers</li>
                <li>• Licensed Professional Counselors</li>
                <li>• Licensed Mental Health Counselors</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-semibold mr-3">1</span>
                  <div>
                    <h3 className="font-semibold">Complete Brief Assessment</h3>
                    <p className="text-gray-600">Help us understand your needs and preferences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-semibold mr-3">2</span>
                  <div>
                    <h3 className="font-semibold">Match with a Therapist</h3>
                    <p className="text-gray-600">We'll pair you with a therapist who fits your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-semibold mr-3">3</span>
                  <div>
                    <h3 className="font-semibold">Schedule First Session</h3>
                    <p className="text-gray-600">Book a time that works best for you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Book sessions at times that suit your schedule</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Shield className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Secure & Confidential</h3>
                <p className="text-gray-600">HIPAA-compliant platform for your privacy</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}