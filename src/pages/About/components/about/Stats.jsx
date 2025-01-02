import React from "react";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Team Members" },
  { number: "99%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
