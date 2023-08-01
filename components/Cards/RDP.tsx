import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const RDP = () => {
    return (
      <a href="/modules/rdp.html">
        <Stack direction="row" spacing={2}>
            <img src="/rdp.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking RDP (3389)
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              
                RDP stands for Remote Desktop Protocol. It is a proprietary protocol developed by Microsoft that allows a user to remotely access and control a computer or server over a network connection.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default RDP;
  