import React from 'react';
import { Package, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';

const Datas = () => {
  const stats = [
    {
      icon: Package,
      title: 'Total Shipment',
      value: '2,271',
      change: '+237 items',
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'In Transit',
      value: '1,282',
      change: '+20 items',
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: Truck,
      title: 'On Delivery',
      value: '989',
      change: '+40 items',
      color: 'bg-orange-500',
      textColor: 'text-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Completed',
      value: '1,120',
      change: '+354 items',
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      icon: XCircle,
      title: 'Rejected',
      value: '10',
      change: '+2 items',
      color: 'bg-red-500',
      textColor: 'text-red-600'
    }
  ];

  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-5 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm font-medium ${stat.textColor}`}>{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Datas;