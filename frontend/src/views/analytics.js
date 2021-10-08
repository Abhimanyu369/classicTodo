import React from 'react';

import Card from '../components/card';

export default function Analytics() {
  return (
    <div>
      <h1 className="display-6 text-center mb-4">Analytics</h1>
      <div className="row">
        <div className="col">
          <Card color="primary" heading="Created" />
        </div>
        <div className="col">
          <Card color="success" heading="Completed" />
        </div>
        <div className="col">
          <Card color="warning" heading="Pending" />
        </div>
      </div>
      <h1 className="display-6 text-center mb-4">Track ToDos</h1>
      <div className="row">
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text">From</span>
            <input type="date" name="startDate" className="form-control" />
            <span className="input-group-text">To</span>
            <input type="date" name="endDate" className="form-control" />
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col">
          <Card color="primary" heading="Completed" />
        </div>
      </div>
    </div>
  );
}
