import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './penjualan.scss';

import React from 'react'

const Penjualan = () => {
    const data = [
        {
         name: "Januari", 
         Total: 1200
        },
        {
          name: "Februari", 
          Total: 1900
        },
        {
          name: "Maret", 
          Total: 800
        },
        {
          name: "April", 
          Total: 1600
        },
        {
          name: "Mei", 
          Total: 900
        },
        {
          name: "Juni", 
          Total: 1700
        },
        {
            name: "Juli", 
            Total: 1200
          },
          {
            name: "Agustus", 
            Total: 1500
          },
          {
            name: "September", 
            Total: 1600
          },

          {
            name: "Oktober", 
            Total: 1700
          },
          {
            name: "November", 
            Total: 1800
          },
          {
            name: "Desember", 
            Total: 2000
          },
      ];
      
  return (
    <div className='diagram'>
        <ResponsiveContainer width="100%" aspect={2.6/1 }>
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="10%" stopColor="#4389A5" stopOpacity={0.8}/>
      <stop offset="100%" stopColor="#3EA7AA" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorTotal)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Penjualan