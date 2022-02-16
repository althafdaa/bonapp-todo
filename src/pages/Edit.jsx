import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTaskById, updateTask } from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.data.loaded);
  const taskById = useSelector((state) => state.data.task);

  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  const { title, details } = formData;

  useEffect(() => {
    dispatch(getTaskById(params.id));
  }, [dispatch, params.id]);

  if (loaded) {
    setFormData(taskById);
    setIsLoading(false);
    dispatch(dataLoaded(false));
  }

  const formHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = () => {
    dispatch(updateTask(params.id, formData));
    navigate("/");
  };

  if (isLoading) {
    return <p className='text-center'>Loading...</p>;
  }
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
            value={details}
            id='details'
          />
        </div>
        <button
          type='submit'
          className='self-end bg-green-600 text-white px-2 py-1 rounded shadow hover:bg-green-700 active:scale-105'
        >
          Edit Task
        </button>
      </form>
    </>
  );
};

export default Edit;
