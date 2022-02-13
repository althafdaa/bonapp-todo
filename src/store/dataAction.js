import { getTasks, dataLoaded, taskAdded, getTask } from "./dataSlice";

export const getAllTasks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();

        dispatch(getTasks(data));
        dispatch(dataLoaded(true));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };
};

export const updateComplete = (id, completed) => {
  return async (dispatch) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    });
    dispatch(getAllTasks());
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    dispatch(getAllTasks());
  };
};

export const createTask = (data) => {
  return async (dispatch) => {
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch(taskAdded(true));
    dispatch(getAllTasks());
  };
};

export const getTaskById = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        dispatch(getTask(data));
        dispatch(dataLoaded(true));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };
};

export const updateTask = (id, data) => {
  return async (dispatch) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch(getAllTasks());
  };
};
