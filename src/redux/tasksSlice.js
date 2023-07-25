import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    tasks: {
      "task-1": { id: "task-1", content: "Task 1" },
      "task-2": { id: "task-2", content: "Task 2" },
      "task-3": { id: "task-3", content: "Task 3" },
      "task-4": { id: "task-4", content: "Task 4" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: ["task-1", "task-2"],
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        taskIds: ["task-3"],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: ["task-4"],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  },
};

export const authSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addColumn: (state, action) => {
      const id = "column-" + Math.round(Math.random() * 10000000);
      state.value.columns[id] = {
        id,
        title: action.payload.title,
        taskIds: [],
      };
      state.value.columnOrder = state.value.columnOrder.concat(id);
    },
    addTask: (state, action) => {
      const id = "task-" + Math.round(Math.random() * 10000000);
      state.value.columns[action.payload.column].taskIds =
        state.value.columns[action.payload.column].taskIds.concat(id);
      state.value.tasks[id] = { id, content: action.payload.content };
    },
    removeTask: (state, action) => {
      state.value.tasks = Object.keys(state.value.tasks)
        .filter(key => key !== action.payload.task)
        .reduce((obj, key) => {
          obj[key] = state.value.tasks[key];
          return obj;
        }, {});
      state.value.columns[action.payload.column].taskIds = state.value.columns[
        action.payload.column
      ].taskIds.filter(item => item !== action.payload.task);
    },
    replaceTask: (state, action) => {
      state.value.columns[action.payload.source.droppableId]["taskIds"] =
        state.value.columns[action.payload.source.droppableId][
          "taskIds"
        ].filter(item => item !== action.payload.draggableId);

      state.value.columns[action.payload.destination.droppableId][
        "taskIds"
      ].splice(action.payload.destination.index, 0, action.payload.draggableId);
    },
  },
});

export const { addTask, removeTask, replaceTask, addColumn } =
  authSlice.actions;

export default authSlice.reducer;
