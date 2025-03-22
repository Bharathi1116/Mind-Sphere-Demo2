import React from 'react';
import { ArrowLeft, Users, Calendar, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Groups() {
  const upcomingGroups = [
    {
      title: "Anxiety Support",
      date: "Every Monday, 7:00 PM EST",
      type: "Virtual",
      spaces: "5 spots left"
    },
    {
      title: "Depression Recovery",
      date: "Every Wednesday, 6:30 PM EST",
      type: "Virtual",
      spaces: "3 spots left"
    },
    {
      title: "Stress Management",
      date: "Every Thursday, 8:00 PM EST",
      type: "Virtual",
      spaces: "7 spots left"
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Support Groups</h1>

          <div className="space-y-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Upcoming Groups</h2>
              <div className="space-y-4">
                {upcomingGroups.map((group, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">{group.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {group.date}
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {group.type}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-purple-600 font-medium">{group.spaces}</span>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                        Join Group
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Small Groups</h3>
                <p className="text-gray-600">8-12 members per group for meaningful connections</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Heart className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Safe Space</h3>
                <p className="text-gray-600">Confidential and judgment-free environment</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Regular Meetings</h3>
                <p className="text-gray-600">Weekly sessions for consistent support</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Professional facilitation by licensed therapists
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Structured discussions and coping strategies
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Peer support and shared experiences
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Tools and resources for personal growth
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Group Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Anxiety & Depression
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Grief & Loss
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Stress Management
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  LGBTQ+ Support
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Trauma Recovery
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Family Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}