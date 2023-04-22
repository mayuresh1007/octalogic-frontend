import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { makeStyles, withStyles } from 'tss-react/mui'
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

 export default function TypeOfVehicle () {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      {/* <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          // <TextField
          //   id="nick-name"
          //   label="Nick Name"
          //   variant="outlined"
          //   placeholder="Enter Your Nick Name"
          //   fullWidth
          //   margin="normal"
          //   {...field}
          // />
        )}
      /> */}
    </>
  );
};
