import React from 'react';

import TaskCreate from '../components/taskForm';
import Task from '../components/task';
export default function Home() {
  return (
    <>
      <TaskCreate />
      <hr />
      <div>
        <Task />
      </div>
    </>
  );
}
