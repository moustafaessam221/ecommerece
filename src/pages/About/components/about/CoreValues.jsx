import React from 'react';
import { UserGroupIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/16/solid';

const values = [
  {
    icon: UserGroupIcon,
    title: 'Our Team',
    description: 'A diverse group of professionals working together to achieve greatness.',
    color: 'text-indigo-500'
  },
  {
    icon: GlobeAltIcon,
    title: 'Our Vision',
    description: 'Creating a connected, sustainable future for everyone through innovation.',
    color: 'text-green-500'
  },
  {
    icon: LightBulbIcon,
    title: 'Our Mission',
    description: 'Innovating solutions to real-world challenges while maintaining excellence.',
    color: 'text-yellow-500'
  }
];

const CoreValues = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center group">
                <div className="inline-block p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <Icon className={`h-16 w-16 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;