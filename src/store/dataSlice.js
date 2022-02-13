import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
  task: {},
  loaded: false,
  isAdded: false,
  sort: true,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataLoaded(state, action) {
      state.loaded = action.payload;
    },
    getTasks(state, action) {
      state.tasks = action.payload;
    },
    taskAdded(state, action) {
      state.isAdded = action.payload;
    },
    getTask(state, action) {
      state.task = action.payload;
    },
    sortData(state, action) {
      state.sort = action.payload;
    },
    sortedTask(state, action) {
      state.sortedTask = action.payload;
    },
  },
});

export const {
  getTasks,
  dataLoaded,
  taskAdded,
  getTask,
  sortData,
  sortedTask,
} = dataSlice.actions;

export default dataSlice.reducer;
