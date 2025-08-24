import React from 'react';
import { Filter, Search, Command, MoreHorizontal } from 'lucide-react';

const TrackingList = () => {
  const trackingData = [
    {
      id: '121',
      orderId: '#213128C',
      date: '17/09/2023',
      status: 'ON DELIVERY',
      statusColor: 'bg-orange-100 text-orange-800',
      discharge: 'Jakarta (JKT)',
      port: 'Pekanbaru (PKU)'
    },
    {
      id: '121',
      orderId: '#219128A',
      date: '17/09/2023',
      status: 'IN TRANSIT',
      statusColor: 'bg-blue-100 text-blue-800',
      discharge: 'Jakarta (JKT)',
      port: 'Yogyakarta (YK)'
    }
  ];

  return (
    <div className="px-6 py-4">
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">Tracking List</h3>
            
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                <Filter className="w-3 h-3 text-gray-500" />
                <span className="text-xs text-gray-600">Filters</span>
              </button>
              
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-7 pr-3 py-1.5 w-48 border border-gray-200 rounded-md text-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-1 px-2 py-1.5 border border-gray-200 rounded-md">
                <Command className="w-3 h-3 text-gray-500" />
                <span className="text-xs text-gray-600">K</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE OF LOADING</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PLACE OF DISCHARGE</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PORT OF DISCHARGE</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trackingData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900">{item.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-900">{item.orderId}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{item.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{item.discharge}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{item.port}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrackingList;