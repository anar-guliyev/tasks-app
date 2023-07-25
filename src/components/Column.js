import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "@mui/material/styles";
import Task from "./Task";

const Container = styled("div")({
  margin: "8px",
  border: "1px solid lightgrey",
  borderRadius: "2px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
});

const Title = styled("h3")({
  padding: "8px",
});

const TaskList = styled("div")(({ isDraggingOver }) => ({
  padding: "8px",
  transition: "background-color 0.2s ease",
  backgroundColor: isDraggingOver ? "lightgrey" : "white",
  flexGrow: 1,
  minHeight: "100px",
}));

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                column={column.id}
                index={index}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
