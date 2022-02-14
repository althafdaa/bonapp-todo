import React from "react";
import { FaTrashAlt, FaPencilAlt, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({ data, onDelete, onComplete }) => {
  const sorted = useSelector((state) => state.data.sort);
  return (
    <>
      {sorted
        ? data.map((task) => (
            <main
              key={task.id}
              className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${
                task.completed ? "border-green-600" : "border-red-600"
              }  flex items-center justify-between mb-4`}
            >
              <div>
                <h1 className='text-2xl font-bold'>{task.title}</h1>
                <p className='text-gray-500'>{task.details}</p>
                <p className='text-xs'>Dibuat pada {task.date}</p>
              </div>

              <div className='flex gap-4 text-xl text-gray-600'>
                <button onClick={() => onComplete(task.id, task.completed)}>
                  <FaCheck className='hover:text-black' />
                </button>

                <Link to={`/edit/${task.id}`}>
                  <FaPencilAlt className='hover:text-black' />
                </Link>
                <button onClick={() => onDelete(task.id)}>
                  <FaTrashAlt className='hover:text-black' />
                </button>
              </div>
            </main>
          ))
        : data
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((task) => (
              <main
                key={task.id}
                className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${
                  task.completed ? "border-green-600" : "border-red-600"
                }  flex items-center justify-between mb-4`}
              >
                <div>
                  <h1 className='text-2xl font-bold'>{task.title}</h1>
                  <p className='text-gray-500'>{task.details}</p>
                  <p className='text-xs'>Dibuat pada {task.date}</p>
                </div>

                <div className='flex gap-4 text-xl text-gray-600'>
                  <button onClick={() => onComplete(task.id, task.completed)}>
                    <FaCheck className='hover:text-black' />
                  </button>

                  <Link to={`/edit/${task.id}`}>
                    <FaPencilAlt className='hover:text-black' />
                  </Link>
                  <button onClick={() => onDelete(task.id)}>
                    <FaTrashAlt className='hover:text-black' />
                  </button>
                </div>
              </main>
            ))}
    </>
  );
};

export default Card;
