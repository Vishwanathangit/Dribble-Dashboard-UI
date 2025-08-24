import React from 'react';
import { Search, Bell } from 'lucide-react';

const Overview = () => {
  return (
    <div className="bg-white px-8 py-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-80 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;