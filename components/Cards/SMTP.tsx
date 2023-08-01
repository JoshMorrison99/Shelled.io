import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const SMTP = () => {
    return (
      <a href="/modules/smtp.html">
        <Stack direction="row" spacing={2}>
            <img src="/smtp.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking SMTP (25)
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              When we press the `Send` button in our email application (email client), the program establishes a connection to an `SMTP` server on the network or Internet.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default SMTP;
  