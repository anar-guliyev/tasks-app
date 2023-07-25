import React from "react";
import { KanbanBoard, ModalComponent } from "components";
import { Button, Typography } from "@mui/material";

export const Tasks = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ModalComponent open={open} setOpen={setOpen} />
      <div className="d-flex align-items-center justify-content-between p-2">
        <Typography className="text-primary" variant="h5">
          <b>Tasks</b>
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          +
        </Button>
      </div>
      <KanbanBoard />
    </>
  );
};
