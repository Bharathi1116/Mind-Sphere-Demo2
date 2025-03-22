import React from 'react';
import { ArrowLeft, BookOpen, Video, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Resources() {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Educational Resources</h1>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600 mb-3" />
                <h2 className="text-xl font-semibold mb-2">Articles & Guides</h2>
                <p className="text-gray-600 mb-4">
                  In-depth articles and guides on mental health topics.
                </p>
                <Link to="/articles" className="text-purple-600 hover:text-purple-700 font-medium">
                  Browse Articles →
                </Link>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Video className="w-6 h-6 text-purple-600 mb-3" />
                <h2 className="text-xl font-semibold mb-2">Video Library</h2>
                <p className="text-gray-600 mb-4">
                  Educational videos and expert interviews.
                </p>
                <Link to="/videos" className="text-purple-600 hover:text-purple-700 font-medium">
                  Watch Videos →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-purple-600 mt-1" />
                    <div className="ml-3">
                      <h3 className="font-semibold">Understanding Anxiety</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        A comprehensive guide to anxiety disorders and coping strategies.
                      </p>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-purple-600 mt-1" />
                    <div className="ml-3">
                      <h3 className="font-semibold">Depression Recovery</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Steps and strategies for managing depression.
                      </p>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-purple-600 mt-1" />
                    <div className="ml-3">
                      <h3 className="font-semibold">Stress Management</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Practical techniques for managing daily stress.
                      </p>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Downloadable Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Download className="w-5 h-5 text-purple-600 mb-2" />
                  <h3 className="font-semibold mb-1">Wellness Journal Template</h3>
                  <p className="text-gray-600 text-sm mb-2">PDF, 2.1 MB</p>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Download
                  </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Download className="w-5 h-5 text-purple-600 mb-2" />
                  <h3 className="font-semibold mb-1">Meditation Guide</h3>
                  <p className="text-gray-600 text-sm mb-2">PDF, 1.8 MB</p>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Resource Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Mental Health Basics
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Self-Help Tools
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Crisis Resources
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Wellness Tips
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Research & Studies
                </button>
                <button className="p-3 bg-white rounded-lg text-left hover:shadow-md transition-shadow">
                  Expert Insights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}