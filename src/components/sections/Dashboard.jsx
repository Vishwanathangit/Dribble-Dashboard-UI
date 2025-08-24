import React from 'react';
import Leftside from './Leftside';
import Overview from './Overview';
import Datas from './Datas';
import ShipmentStats from './ShipmentStats';
import TrackingList from './TrackingList';
import Table from './Table';

const Dashboard = () => {
  return (
    <div className="flex  bg-gray-100 ">
      <Leftside />
      
      <div className="flex-1 overflow-y w-[90%]">
        <Overview />
        <Datas />
        <ShipmentStats />
        <TrackingList />
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;