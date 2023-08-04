import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  
  const PIVOT = () => {
    return (
      <a href="/modules/pivot.html">
        <Stack direction="row" spacing={2}>
            <img src="/pivot.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Pivoting 
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Pivoting is the technique of using a compromised system as a stepping stone to access other systems within a target network.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default PIVOT;
  