import React from 'react';
import Navbar from './navbar';

export default function Index({ children }) {
  return (
    <div>
      <Navbar />
      <div className="h-100 container">
        <div className="d-flex flex-column justify-content-start align-items-center py-5">
          <div className="w-50 p-5 shadow p-3 mb-5 bg-body rounded">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
