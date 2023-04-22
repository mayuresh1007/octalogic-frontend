import React, { useState } from "react";
// import TextField from "@mui/material/TextField";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from "tss-react/mui";
import {
  // useForm,
  // Controller,
  // FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));


export default function NumberOfWheels() {
  const { control } = useFormContext();
  return (
    <>
    {/* <Controller 

    /> */}
      <FormControl>
       
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="2"
          name="radio-buttons-group"
          control={control}
        >

          <FormControlLabel value="2" control={<Radio />} label="2 Wheeler" />
          <FormControlLabel value="4" control={<Radio />} label="4 Wheeler" />
          {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        </RadioGroup>
      </FormControl>
     
      
    </>
  );
}
