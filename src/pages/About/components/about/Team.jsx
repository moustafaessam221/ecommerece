import React from "react";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Brown",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative mb-6 inline-block">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600 mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
