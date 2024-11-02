import React from "react";
import Layout from "@/components/Layout";
import profile from "@/public/profile.svg"

function Page() {
  return (
    <Layout>
      {/* Phone Screen Container */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex space-x-2">
              <img
                className="w-4 h-4"
                src={profile}
                alt="icon1"
              />
              <img
                className="w-4 h-4"
                src="https://via.placeholder.com/17x11"
                alt="icon2"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-6 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">Hi, Bhaskar</h1>

          {/* Available Limit Card */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">AVAILABLE LIMIT</span>
              <button className="px-4 py-2 bg-green-300 rounded-full text-sm font-semibold text-green-800">
                Cash In
              </button>
            </div>
            <p className="mt-2 text-2xl font-semibold text-green-900">$ 0.00</p>
          </div>

          {/* Loan Request Section */}
          <div className="p-4 bg-green-800 rounded-lg text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Request your loan now</h2>
            <button className="px-6 py-2 bg-green-400 rounded-full text-sm font-semibold text-green-900">
              Request Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
