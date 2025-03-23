"use client";

import { TextField, InputAdornment, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

type AuthorFormFields = {
  firstName: string;
  lastName: string;
  bookCount: number;
};

const AuthorForm = () => {
  const { control, handleSubmit, setValue } = useForm<AuthorFormFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      bookCount: 0,
    },
  });

  const onSubmit = (data: AuthorFormFields) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: "16px" }}>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField label="First Name" fullWidth {...field} />
          )}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField {...field} label="Last Name" fullWidth />
          )}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Controller
          name="bookCount"
          control={control}
          render={({ field }) => (
            <NumericFormat
              name="bookCount"
              value={field.value}
              customInput={TextField}
              label="Book Count"
              onValueChange={(values) => {
                setValue("bookCount", values.floatValue ?? 0);
              }}
              thousandSeparator
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">#</InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
      </div>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};
export default AuthorForm;
