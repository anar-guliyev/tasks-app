import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { logIn } from "redux/authSlice";

export const SignInForm = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(logIn());
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">Sign In</Typography>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
        rules={{ required: "Password is required" }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign In
      </Button>
    </Box>
  );
};
