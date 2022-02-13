import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getAllTasks, updateComplete } from "../store/dataAction";
import { dataLoaded } from "../store/dataSlice";
import SortBtn from "../components/SortBtn";
const Home = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.data.tasks);
  const loaded = useSelector((state) => state.data.loaded);

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(true);
  const [formData, setFormData] = useState("");
  const [data, setData] = useState();

  const formHandler = (e) => {
    setFormData(e.target.value);
    if (e.target.value === "") {
      setData(getData);
      setSearch(true);
    } else {
      const filtered = data.filter((task) => {
        return task.title.toLowerCase().includes(e.target.value.toLowerCase());
      });

      if (filtered.length === 0) {
        setSearch(false);
      }
      setData(filtered);
    }
  };

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  if (loaded) {
    setData(getData);
    setIsLoading(false);
    dispatch(dataLoaded(false));
  }

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id));
    dispatch(getAllTasks());
  };

  const completeTaskHandler = (id, completed) => {
    dispatch(updateComplete(id, completed));
  };

  return (
    <>
      <input
        onChange={formHandler}
        value={formData}
        className='mb-4 w-full p-2'
        type='text'
        placeholder='Find task'
      />

      <SortBtn />

      {getData.length === 0 && (
        <p className='text-center text-gray-500'>Belum ada task baru nih</p>
      )}
      {isLoading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <>
          {search ? (
            <Card
              data={data}
              onDelete={deleteTaskHandler}
              onComplete={completeTaskHandler}
            />
          ) : (
            <p>Tidak ada task yang dicari</p>
          )}
        </>
      )}
    </>
  );
};

export default Home;
