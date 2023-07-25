import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { createUser } from "api";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    },
  });

  const onSubmit = data => {
    // createUser(data);
    console.log(data);
    navigate("/signin");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">Sign Up</Typography>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
        rules={{ required: "Username is required" }}
      />
      <Controller
        name="first_name"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="First name"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
        rules={{ required: "First name is required" }}
      />
      <Controller
        name="last_name"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Lastname"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
        rules={{ required: "Last name is required" }}
      />
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
        Sign Up
      </Button>
    </Box>
  );
};
