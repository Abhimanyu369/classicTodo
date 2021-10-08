import React from 'react';

export default function Task({ tasks, deleteTask, updateTask }) {
  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="shadow-sm px-2 py-2 mb-3 bg-light rounded d-flex align-items-center"
        >
          <div className="form-check flex-grow-1">
            <input
              className="form-check-input"
              type="checkbox"
              checked={task.status === 'completed'}
              onChange={() => updateTask(task.id)}
              id={task.id}
            />
            <label className="form-check-label " htmlFor={task.id}>
              {task.status === 'completed' ? (
                <del>{task.task}</del>
              ) : (
                <>{task.task}</>
              )}
            </label>
          </div>
          <button
            className="btn btn-outline-danger py-0"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
