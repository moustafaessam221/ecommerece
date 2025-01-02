import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  GlobeAltIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import ContactForm from "./components/ContactForm";

const ContactUs = () => {
  const socialLinks = [
    { name: "Facebook", url: "#", color: "text-blue-600" },
    { name: "Twitter", url: "#", color: "text-blue-400" },
    { name: "LinkedIn", url: "#", color: "text-blue-700" },
    { name: "Instagram", url: "#", color: "text-pink-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90">
            We're here to help and answer any questions you might have.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <EnvelopeIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Email Us
            </h3>
            <p className="text-gray-600">moustafa@email.com</p>
            <p className="text-gray-600">support@moustafa.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <PhoneIcon className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Call Us
            </h3>
            <p className="text-gray-600">+20 1234567899</p>
            <p className="text-gray-600">+20 1234567899</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <MapPinIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600">123 Main Street</p>
            <p className="text-gray-600">Cityville, USA 12345</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <ClockIcon className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Business Hours
            </h3>
            <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sat-Sun: Closed</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to work together? Fill out the form below
              and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Additional Information
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Global Presence
              </h3>
              <div className="flex items-start mb-4">
                <GlobeAltIcon className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    With offices worldwide, we're here to serve you no matter
                    where you are.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`${social.color} hover:opacity-75 transition duration-300 flex items-center`}
                  >
                    <span className="text-lg">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200 mt-16">
        {/* Replace this div with an actual map implementation */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <p>Map Integration Here</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
