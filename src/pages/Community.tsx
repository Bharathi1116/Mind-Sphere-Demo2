import React from 'react';
import { ArrowLeft, Users, MessageCircle, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Community() {
  const discussions = [
    {
      title: "Coping with Anxiety During Work",
      replies: 23,
      category: "Anxiety",
      lastActive: "10 minutes ago"
    },
    {
      title: "Self-Care Routines That Work",
      replies: 45,
      category: "Self-Care",
      lastActive: "1 hour ago"
    },
    {
      title: "Finding Hope in Difficult Times",
      replies: 32,
      category: "Depression",
      lastActive: "2 hours ago"
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Start Discussion
            </button>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">5,234</div>
                <div className="text-gray-600">Community Members</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">1,892</div>
                <div className="text-gray-600">Active Discussions</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">12,445</div>
                <div className="text-gray-600">Supportive Messages</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Active Discussions</h2>
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-2">{discussion.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{discussion.replies} replies</span>
                          <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded">
                            {discussion.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{discussion.lastActive}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Be Respectful</h3>
                  <p className="text-gray-600">
                    Treat all members with kindness and respect. We're here to support each other.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Maintain Privacy</h3>
                  <p className="text-gray-600">
                    Protect your personal information and respect others' privacy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stay On Topic</h3>
                  <p className="text-gray-600">
                    Keep discussions relevant to mental health and support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Report Concerns</h3>
                  <p className="text-gray-600">
                    Alert moderators about any inappropriate content or behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold ml-3">Safe Space Commitment</h2>
              </div>
              
              <p className="text-gray-600">
                Our community is moderated 24/7 to ensure a safe, supportive environment for all members.
                Professional moderators and peer supporters are always available to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}