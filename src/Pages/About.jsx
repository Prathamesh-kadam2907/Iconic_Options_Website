import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 text-indigo-900 min-h-screen pt-19">

      
      <div className="relative h-[420px] flex items-center justify-center ">
        <img
          src={assets.about}
          alt="About"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900/70"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Brokerage-Free Smart Real Estate
          </h1>
          <p className="text-indigo-200 mt-3">
            Connecting Buyers, Sellers, Owners & Tenants with AI Power
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-indigo-700 text-lg">
          We aim to remove brokers from the real estate ecosystem and create a
          trusted platform powered by AI, DigiLocker verification and smart
          automation.
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={assets.buyer}
            alt="Buyer"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">For Buyers</h3>
            <ul className="list-disc ml-5 text-indigo-700 space-y-1">
              <li>Smart search with heatmaps</li>
              <li>360° virtual tours</li>
              <li>Instant visit booking</li>
              <li>WhatsApp sharing</li>
              <li>Subscription based contact unlock</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={assets.seller}
            alt="Seller"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">For Sellers</h3>
            <ul className="list-disc ml-5 text-indigo-700 space-y-1">
              <li>AI title & description generator</li>
              <li>Geo-tagged app camera</li>
              <li>Price suggestion & analytics</li>
              <li>Verification & agreement signing</li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="bg-indigo-900 text-indigo-100 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <img src={assets.ai} alt="AI" className="rounded-2xl shadow-xl" />
          <div>
            <h2 className="text-3xl font-bold mb-4">AI Powered Experience</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Fake video detection & trust badge</li>
              <li>Auto 3D video from photos</li>
              <li>Video quality enhancement</li>
              <li>Smart filter suggestions across cities</li>
              <li>Automated matching bot</li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Secure DigiLocker Verification
          </h2>
          <p className="text-indigo-700 text-lg">
            Verify your Aadhaar & PAN using DigiLocker and get a trusted verified
            badge for high-value bookings and transactions.
          </p>
        </div>
        <img
          src={assets.verification}
          alt="Verification"
          className="rounded-2xl shadow-xl"
        />
      </div>

     
      <div className="bg-indigo-900 text-center py-12">
        <h3 className="text-2xl font-bold text-white">
          Start your brokerage-free property journey today!
        </h3>
        <p className="text-indigo-300 mt-2">
          Smart. Secure. Transparent. AI Powered.
        </p>
      </div>
    </div>
  );
};

export default About;
