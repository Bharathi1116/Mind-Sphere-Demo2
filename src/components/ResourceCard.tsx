import React from 'react';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: string;
}

export function ResourceCard({ icon: Icon, title, description, link }: ResourceCardProps) {
  const content = (
    <>
      <Icon className="w-8 h-8 text-purple-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link 
        to={link}
        className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {content}
    </div>
  );
}