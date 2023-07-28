import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const LinuxCard = () => {
    return (
      <a href="/modules/linux-privesc.html">
        <Stack direction="row" spacing={2}>
        <img src="/linuxcard.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Linux Privilege Escalation
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Linux privilege escalation refers to the process of gaining elevated privileges or administrative access on a Linux system beyond what is normally granted to a user.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default LinuxCard;
  