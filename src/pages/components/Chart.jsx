import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

const Chart = ({ data }) => {
  return (
    <div className="container my-5">
      <div 
        className="card shadow-sm"
        style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)' }}
      >
        <div className="card-body">
          <h5 
            className="card-title text-center mb-4 text-white fw-bold"
            style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.4)' }}
          >
            Production Overview
          </h5>
          <div style={{ width: '100%', height: 320, backgroundColor: 'white', borderRadius: '8px', padding: '10px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="date" stroke="#555" />
                <YAxis stroke="#555" />
                <Tooltip />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="production" stroke="#007aff" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
