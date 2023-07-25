import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { styled } from "@mui/material/styles";
import Column from "./Column";
import { useSelector, useDispatch } from "react-redux";
import { replaceTask } from "redux/tasksSlice";

const Container = styled("div")({
  display: "flex",
  overflowX: "auto",
});

export const KanbanBoard = () => {
  const data = useSelector(state => state.tasks.value);
  const dispatch = useDispatch();

  const onDragEnd = result => {
    dispatch(replaceTask(result));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};
