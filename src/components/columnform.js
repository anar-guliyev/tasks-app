import React from "react";
import { Button, Typography, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addColumn } from "redux/tasksSlice";

export const ColumnFormComponent = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addColumn(data));
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" id="modal-title" sx={{ mb: 2 }}>
        Add Column
      </Typography>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: "Content is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label="Title"
            sx={{ mb: 2 }}
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
      />
      <div className="d-flex align-items-center justify-content-between">
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleClose}
        >
          Close
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};
