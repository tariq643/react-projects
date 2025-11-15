/* 

  Student Component
  Displays student information
  It is a controlled form component

*/

import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";
import axios from "axios";

function Student() {
  // test commit
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted:", { name, address });
    // You would typically send this data to an API or perform other actions
    axios
      .post("http://localhost:8080/student/save-student", {
        name: name,
        address: address,
      })
      .then((response) => {
        console.log("Success:", response.data);
        // Handle the successful response data
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors during the request
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Student;
