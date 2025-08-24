import React from 'react';
import { Smartphone, Camera, MoreHorizontal } from 'lucide-react';

const Table = () => {
  const itemsData = [
    {
      no: '1.',
      icon: Smartphone,
      name: 'Handphone',
      model: 'iPhone 12 Mini',
      category: 'Electronic',
      fragile: 'Yes',
      quantity: '1',
      weight: '450 g'
    },
    {
      no: '2.',
      icon: Camera,
      name: 'Camera',
      model: 'Nikon D3500',
      category: 'Electronic',
      fragile: 'Yes',
      quantity: '1',
      weight: '700 g'
    }
  ];

  return (
    <div className="px-8 py-6">
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NO</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ITEM NAME</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CATEGORY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FRAGILE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QUANTITY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WEIGHT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {itemsData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.no}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.model}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.fragile}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">121</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#219128A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">17/09/2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    COMPLETED
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jakarta (JKT)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Surabaya (SBY)</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;