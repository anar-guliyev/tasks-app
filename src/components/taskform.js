import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "redux/tasksSlice";

export const TaskFormComponent = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();
  const data = useSelector(state => state.tasks.value);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addTask(data));
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" id="modal-title" sx={{ mb: 2 }}>
        Add Task
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="column">Select Column</InputLabel>
        <Controller
          name="column"
          control={control}
          defaultValue=""
          rules={{ required: "Column is required" }}
          render={({ field, fieldState }) => (
            <Select
              {...field}
              label="Select Column"
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
            >
              {data.columnOrder.map(item => (
                <MenuItem key={item} value={item}>
                  {data.columns[item].title}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
      <Controller
        name="content"
        control={control}
        defaultValue=""
        rules={{ required: "Content is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label="Content"
            multiline
            rows={4}
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
