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
interface IProps {
  title: string;
}

const Google = ({ title }: IProps) => {
  const [target, setTarget] = useState("");
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Google Dorks
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="target"
              label="Target"
              name="Target"
              onChange={(e) => setTarget(e.target.value)}
              autoFocus
            />
          </Box>
        </Box>
      </Container>
      <Box mt={5} ml={10} mr={10}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.google.com/search?q=site%3A" +
                      target +
                      "%20ext%3Atxt%20%7C%20ext%3Asql%20%7C%20ext%3Acnf%20%7C%20ext%3Aconfig%20%7C%20ext%3Alog%20%26%20intext%3A%22admin%22%20%7C%20intext%3A%22root%22%20%7C%20intext%3A%22administrator%22%20%26%20intext%3A%22password%22%20%7C%20intext%3A%22root%22%20%7C%20intext%3A%22admin%22%20%7C%20intext%3A%22administrator%22"
                    }
                  >
                    Publicly Exposed Documents
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography>dork 1</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography>dork 1</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography>dork 1</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Google;
