import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask } from "../store/dataAction";
import { taskAdded } from "../store/dataSlice";

const Add = () => {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) => state.data.isAdded);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    details: "",
    completed: false,
    date: null,
  });

  const { title, details } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createTask(formData));
  };

  if (isAdded) {
    navigate("/");
    dispatch(taskAdded(false));
  }
  const formHandler = (e) => {
    const newDate = moment().format("lll");

    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      date: newDate,
    }));
  };

  return (
    <>
      <form onSubmit={submitHandler} className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <label className='font-semibold mb-2' htmlFor='title'>
            Title
          </label>
          <input
            onChange={formHandler}
            className='p-2 rounded shadow'
            type='text'
            id='title'
            value={title}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-semibold mb-2' htmlFor='details'>
            Details
          </label>
          <textarea
            onChange={formHandler}
            className='p-2 rounded shadow'
            rows={8}
            type='text'
            id='details'
            value={details}
          />
        </div>
        <button
          type='submit'
          className='self-end bg-green-600 text-white px-2 py-1 rounded shadow-lg hover:bg-green-700 active:scale-105'
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default Add;
