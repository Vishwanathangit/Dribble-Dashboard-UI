import React from "react";
import {
  LayoutGrid,
  FileText,
  TrendingUp,
  RotateCcw,
  Truck,
  Users,
  Phone,
  Settings,
  User,
} from "lucide-react";

const Leftside = () => {
  return (
    <div className="w-64 bg-teal-700 h-300 flex flex-col">
      <div className="p-6 border-b border-teal-600">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">MENGIRIM</h2>
            <p className="text-teal-300 text-sm">Shipping Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="flex items-center space-x-3 px-4 py-3 bg-teal-800 rounded-lg text-white">
          <LayoutGrid className="w-5 h-5" />
          <span className="font-medium">Overview</span>
        </div>

        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <FileText className="w-5 h-5" />
          <span className="font-medium">Data</span>
        </div>

        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <TrendingUp className="w-5 h-5" />
          <span className="font-medium">Tracking List</span>
          <div className="w-2 h-2 bg-orange-500 rounded-full ml-auto"></div>
        </div>

        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <RotateCcw className="w-5 h-5" />
          <span className="font-medium">Retur Items</span>
        </div>

        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <Truck className="w-5 h-5" />
          <span className="font-medium">Driver</span>
        </div>

        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <Users className="w-5 h-5" />
          <span className="font-medium">Community</span>
        </div>
      </nav>

      <div className="px-4 py-6 border-t border-teal-600 space-y-2">
        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <Phone className="w-5 h-5" />
          <span className="font-medium">Call Center</span>
        </div>

        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </div>

        <div className="flex items-center space-x-3 px-4 py-3 text-teal-200 hover:bg-teal-800 hover:text-white rounded-lg cursor-pointer transition-colors">
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-700" />
          </div>
          <span className="font-medium">Latiful fajar</span>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
