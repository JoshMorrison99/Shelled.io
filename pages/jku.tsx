import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
const axios = require("axios");

interface IProps {
  title: string;
}

const JKU = ({ title }: IProps) => {
  const [jku, setJKU] = useState("");

  const updateJKU = () => {
    console.log(JSON.stringify(jku));
    axios.post("http://localhost:3000/api/jku", { value: JSON.stringify(jku) });
  };

  return (
    <>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography component="h1" variant="h5">
            JKU
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1, width: "50%", height: "50%" }}
          >
            <TextField
              margin="normal"
              id="target"
              fullWidth
              rows={20}
              multiline
              label="JKU"
              name="JKU"
              onChange={(e) => setJKU(e.target.value)}
              autoFocus
            />
          </Box>
          <Box mt={4} sx={{ width: "50%", height: "20%" }}>
            <Button
              onClick={() => {
                updateJKU();
              }}
              variant="contained"
              sx={{ width: "100%", height: "20%" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default JKU;
