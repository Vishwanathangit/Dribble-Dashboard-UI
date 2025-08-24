import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { HelpCircle, ChevronDown } from 'lucide-react';

const ShipmentStats = () => {
  const data = [
    { month: 'Jan', total: 2000, completed: 1800, rejected: 200 },
    { month: 'Feb', total: 1800, completed: 1600, rejected: 200 },
    { month: 'Mar', total: 2400, completed: 2200, rejected: 200 },
    { month: 'Apr', total: 1800, completed: 1600, rejected: 200 },
    { month: 'May', total: 1600, completed: 1400, rejected: 200 },
    { month: 'Jun', total: 2200, completed: 2000, rejected: 200 },
    { month: 'Jul', total: 2600, completed: 2400, rejected: 200 },
    { month: 'Aug', total: 1800, completed: 1600, rejected: 200 },
    { month: 'Sep', total: 2200, completed: 2000, rejected: 200 },
    { month: 'Oct', total: 1800, completed: 1600, rejected: 200 },
    { month: 'Nov', total: 2400, completed: 2200, rejected: 200 },
    { month: 'Dec', total: 1600, completed: 1400, rejected: 200 }
  ];

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-base font-semibold text-gray-900">Shipment Statistic</h3>
            <HelpCircle className="w-3 h-3 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Total Shipment</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-600">Completed</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-xs text-gray-600">Rejected</span>
              </div>
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-md px-3 py-1 pr-6 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Month</option>
                <option>Day</option>
                <option>Week</option>
                <option>Year</option>
              </select>
              <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280' }}
                domain={[0, 3000]}
              />
              <Bar dataKey="total" fill="#10B981" radius={[2, 2, 0, 0]} />
              <Bar dataKey="completed" fill="#6EE7B7" radius={[2, 2, 0, 0]} />
              <Bar dataKey="rejected" fill="#F87171" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ShipmentStats;