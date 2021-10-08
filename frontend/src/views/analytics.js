import React, { useState, useEffect } from 'react';
import ApiService from '../apis';

import Card from '../components/card';

export default function Analytics() {
  const userId = localStorage.getItem('USER_ID');
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [range, setRange] = useState(0);
  const [rangeDate, setRangeDate] = useState(0);
  const [inputs, setInputs] = useState({
    startDate: null,
    endDate: null,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const estimate = (start, end) => {
    const startDate = Date.parse(start);
    const endDate = Date.parse(end);
    setRangeDate(Math.abs((endDate - startDate) / 86400000));
    const completedTasks = tasks.filter((obj) => obj.status === 'completed');
    const rangeTask = completedTasks.filter(
      (obj) =>
        Date.parse(new Date(obj.completeAt).toISOString().split('T')[0]) >=
          startDate &&
        Date.parse(new Date(obj.completeAt).toISOString().split('T')[0]) <=
          endDate,
    );
    setRange(rangeTask.length);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    estimate(inputs.startDate, inputs.endDate);
  };

  const fetchAllTesks = async () => {
    const response = await ApiService.getTasks(userId);
    setTasks(response.data);
    localStorage.setItem('TASK_DATA', JSON.stringify(response.data));
  };

  useEffect(() => {
    fetchAllTesks();
    let initialStartDate = new Date();
    setInputs((prevState) => ({
      ...prevState,
      endDate: initialStartDate.toISOString().split('T')[0],
    }));
    initialStartDate.setDate(initialStartDate.getDate() - 7);

    setInputs((prevState) => ({
      ...prevState,
      startDate: initialStartDate.toISOString().split('T')[0],
    }));
  }, []);

  useEffect(() => {
    estimate(inputs.startDate, inputs.endDate);
  }, [inputs]);

  useEffect(() => {
    if (tasks) {
      setPending(tasks.filter((obj) => obj.status === 'active')?.length);
      setCompleted(tasks.filter((obj) => obj.status === 'completed')?.length);
    }
  }, [tasks]);

  return (
    <div>
      <h1 className="display-6 text-center mb-4">Analytics</h1>
      <div className="row">
        <div className="col">
          <Card color="primary" heading="Created" count={tasks.length} />
        </div>
        <div className="col">
          <Card color="success" heading="Completed" count={completed} />
        </div>
        <div className="col">
          <Card color="warning" heading="Pending" count={pending} />
        </div>
      </div>
      <h1 className="display-6 text-center mb-4">Track ToDos</h1>
      <div className="row">
        <form onSubmit={submitHandle}>
          <div className="input-group mb-3">
            <span className="input-group-text">From</span>
            <input
              type="date"
              name="startDate"
              className="form-control"
              defaultValue={inputs.startDate}
              onChange={handleChange}
            />
            <span className="input-group-text">To</span>
            <input
              type="date"
              name="endDate"
              value={inputs.endDate}
              className="form-control"
              onChange={handleChange}
            />
            {/* <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Submit
            </button> */}
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col">
          <Card
            color="primary"
            heading="Completed"
            count={range}
            text={`in ${rangeDate} Days`}
          />
        </div>
      </div>
    </div>
  );
}
