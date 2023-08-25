import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const RPC = () => {
    return (
      <a href="/modules/smb.html">
        <Stack direction="row" spacing={2}>
            <img src="/smb.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking RPC (139)
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default RPC;
  