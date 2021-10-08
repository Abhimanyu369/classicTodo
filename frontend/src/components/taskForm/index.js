import React from 'react';

export default function TaskCreate({ submitHandle, handleChange, inputs }) {
  return (
    <form onSubmit={submitHandle}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="task"
          className="form-control"
          placeholder="ToDo ..."
          value={inputs.task || ''}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
