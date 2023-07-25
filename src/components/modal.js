import React from "react";
import { Modal, Box } from "@mui/material";
import { TaskFormComponent } from "./taskform";
import { ColumnFormComponent } from "./columnform";

export const ModalComponent = ({ open, setOpen }) => {
  const handleClose = () => {
    setType("");
    setOpen(false);
  };

  const [type, setType] = React.useState("");

  return (
    <div>
      <Modal
        open={open}
        s
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {type === "" && (
            <div className="d-flex align-items-center" style={{ height: 200 }}>
              <div
                className="btn btn-outline-primary w-50 h-100 me-2 d-flex align-items-center justify-content-center"
                style={{ fontSize: 30 }}
                onClick={() => setType("Task")}
              >
                Task
              </div>
              <div
                className="btn btn-outline-primary w-50 h-100  ms-2 d-flex align-items-center justify-content-center"
                style={{ fontSize: 30 }}
                onClick={() => setType("Column")}
              >
                Column
              </div>
            </div>
          )}
          {type === "Task" && <TaskFormComponent handleClose={handleClose} />}
          {type === "Column" && (
            <ColumnFormComponent handleClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
};
