import React from 'react';
import { Heart, Phone, MessageCircle, Calendar, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResourceCard } from '../components/ResourceCard';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <header className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Mental Health Matters
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Find support, resources, and community on your journey to better mental health.
              You're not alone in this.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/support"
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                Get Support Now
              </Link>
              <Link
                to="/learn"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={Phone}
              title="24/7 Helpline"
              description="Access immediate support through our confidential helpline, available day and night."
              link="/helpline"
            />
            <ResourceCard
              icon={MessageCircle}
              title="Online Counseling"
              description="Connect with licensed therapists through secure video sessions or chat."
              link="/counseling"
            />
            <ResourceCard
              icon={Calendar}
              title="Support Groups"
              description="Join virtual or in-person support groups led by mental health professionals."
              link="/groups"
            />
            <ResourceCard
              icon={BookOpen}
              title="Educational Resources"
              description="Access articles, videos, and tools to better understand mental health."
              link="/resources"
            />
            <ResourceCard
              icon={Users}
              title="Community Forum"
              description="Connect with others who understand what you're going through."
              link="/community"
            />
            <ResourceCard
              icon={Heart}
              title="Self-Care Tools"
              description="Discover practical techniques for managing stress and anxiety."
              link="/self-care"
            />
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="bg-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Support?</h2>
          <p className="text-xl mb-8">
            If you're in crisis or having thoughts of suicide, help is available 24/7.
          </p>
          <Link
            to="/emergency"
            className="inline-flex items-center bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors"
          >
            Call Now: 1-800-273-8255
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="mb-4">© 2024 Mental Health Support. All rights reserved.</p>
          <p>
            This website is for informational purposes only and is not a substitute for professional medical advice.
            If you're experiencing a medical emergency, please call your local emergency services immediately.
          </p>
        </div>
      </footer>
    </div>
  );
}