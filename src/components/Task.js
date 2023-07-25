import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeTask } from "redux/tasksSlice";

const Container = styled("div")(({ isDragging }) => ({
  padding: "8px",
  margin: "0 0 8px 0",
  backgroundColor: isDragging ? "lightgreen" : "white",
  border: "1px solid lightgrey",
  borderRadius: "2px",
}));

const Task = ({ task, index, column }) => {
  const dispatch = useDispatch();
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <div className="d-flex">
            <span className="d-block">{task.content}</span>
            <Button
              style={{ minWidth: 28 }}
              className="px-1 py-0 ms-auto"
              variant="outlined"
              onClick={() => dispatch(removeTask({ task: task.id, column }))}
            >
              X
            </Button>
          </div>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
