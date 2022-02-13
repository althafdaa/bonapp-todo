import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortData } from "../store/dataSlice";

const SortBtn = ({ sortTask }) => {
  const dispatch = useDispatch();
  const sorted = useSelector((state) => state.data.sort);

  return (
    <div className='flex gap-4 mb-2'>
      <button
        className={`${sorted && "font-semibold"}`}
        onClick={() => dispatch(sortData(true))}
      >
        Lama ke Baru
      </button>
      <button
        className={`${!sorted && "font-semibold"}`}
        onClick={() => dispatch(sortData(false))}
      >
        Baru ke Lama
      </button>
    </div>
  );
};

export default SortBtn;
