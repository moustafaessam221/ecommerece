import React from 'react';
import Hero from './components/about/Hero.jsx';
import CoreValues from './components/about/CoreValues.jsx';
import Stats from './components/about/Stats.jsx';
import Team from './components/about/Team.jsx';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoreValues />
      <Stats />
      <Team />
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 2010, we started with a simple mission: to make a difference 
              through innovation and dedication. Today, we've grown into a global team 
              of passionate individuals, each bringing unique perspectives and skills 
              to help our clients succeed.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us a 
              trusted partner for businesses worldwide. We continue to evolve and 
              adapt, always staying ahead of industry trends while maintaining our 
              core values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;