import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';



export default function FormUserDetails() {
  const [name, setName] = React.useState("");
   
//   const next =(e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="First name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-controlled"
        label="Last Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Button color="primary" variant="contained" >
      {/* <Button color="primary" variant="contained" onClick={this.next}> */}
        Continue
      </Button>
    </Box>
  );
}
