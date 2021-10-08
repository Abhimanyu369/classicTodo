import React, { useState } from 'react';

export default function Login() {
  return (
    <div className="vh-100 bg-primary d-flex justify-content-center align-items-center py-5">
      <div className="w-25 p-5 shadow p-3 mb-5 bg-body rounded">
        <h1 className="h5 text-center mb-4">Login</h1>
        <form>
          <div className="mb-3">
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
