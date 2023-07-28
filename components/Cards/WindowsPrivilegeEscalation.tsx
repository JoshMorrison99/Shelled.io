import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const WindowsCard = () => {
    return (
    <a href="/modules/windows-privesc.html">
      <Stack direction="row" spacing={2}>
      <img src="/windowscard.png" width={100} height={100}  />
        <Grid>
          <Typography sx={{
              color: "primary.main",
            }} variant="h5">
            Windows Privilege Escalation
          </Typography>
          <Typography sx={{
              color: "primary.main",
            }}>
            Windows privilege escalation refers to the process of elevating user privileges on a Windows operating system to gain higher levels of access or administrative rights.
          </Typography>
        </Grid>
      </Stack>
      </a>
    );
  };
  
  export default WindowsCard;