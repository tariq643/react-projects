import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import axios from "axios";
import React, { useEffect } from "react";

export default function DisplayStudent() {
  const [students, setStudents] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/student/get-all-students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {students.map((student) => (
        <li key={`section-${student.id}`}>
          <ul>
            <ListSubheader>{`Student ID: ${student.id}`}</ListSubheader>
            <ListItem>
              <ListItemText
                primary={`Name: ${student.name}`}
                secondary={`Address: ${student.address}`}
              />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
}
