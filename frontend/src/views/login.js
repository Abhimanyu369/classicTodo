import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiService from '../apis';

export default function Login() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const response = await ApiService.userLogin(inputs);
    console.log(response);
    if (response.data.error) {
      setError(response.data.error);
    } else {
      localStorage.setItem('USER_ID', response.data.id);
      history.push('/home');
    }
  };

  return (
    <div className="vh-100 bg-primary d-flex justify-content-center align-items-center py-5">
      <div className="w-25 p-5 shadow p-3 mb-5 bg-body rounded">
        <h1 className="h5 text-center mb-4">Login</h1>
        <form onSubmit={submitHandle}>
          <div className="mb-3">
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
              value={inputs.username || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={inputs.password || ''}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-center text-danger">{error}</p>}
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
