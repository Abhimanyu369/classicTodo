import React, { useState, useEffect } from 'react';
import ApiService from '../apis';

import TaskCreate from '../components/taskForm';
import Task from '../components/task';
export default function Home() {
  const userId = localStorage.getItem('USER_ID');
  const [tasks, setTasks] = useState([]);
  const [inputs, setInputs] = useState({
    task: '',
    status: 'active',
    user: userId,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const response = await ApiService.createTask(inputs);
    setTasks((prevState) => [...prevState, response.data]);
    setInputs({ task: '', status: 'active', user: userId });
  };

  const fetchAllTesks = async () => {
    const response = await ApiService.getTasks(userId);
    setTasks(response.data);
  };

  const deleteTask = async (taskId) => {
    await ApiService.deleteTask(taskId);
    tasks.splice(
      tasks.findIndex((obj) => obj.id === taskId),
      1,
    );
    const newData = [...tasks];
    setTasks(newData);
  };

  const updateTask = async (taskId) => {
    console.log(taskId);
    console.log(tasks.findIndex((obj) => obj.id === taskId));
    if (
      tasks[tasks.findIndex((obj) => obj.id === taskId)].status === 'active'
    ) {
      tasks[tasks.findIndex((obj) => obj.id === taskId)].status = 'completed';
      tasks[tasks.findIndex((obj) => obj.id === taskId)].completeAt = new Date(
        new Date().toString().split('GMT')[0] + ' UTC',
      ).toISOString();
    } else {
      tasks[tasks.findIndex((obj) => obj.id === taskId)].status = 'active';
      tasks[tasks.findIndex((obj) => obj.id === taskId)].completeAt = null;
    }
    const payload = tasks[tasks.findIndex((obj) => obj.id === taskId)];
    await ApiService.updateTask(taskId, payload);
    const newData = [...tasks];
    setTasks(newData);
  };

  useEffect(() => {
    fetchAllTesks();
  }, []);

  return (
    <>
      <TaskCreate
        handleChange={handleChange}
        submitHandle={submitHandle}
        inputs={inputs}
      />
      <hr />
      <div>
        <Task tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    </>
  );
}
