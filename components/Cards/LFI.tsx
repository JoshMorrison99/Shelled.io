import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const LFI = () => {
    return (
      <a href="/modules/lfi.html">
        <Stack direction="row" spacing={2}>
            <img src="/lfi.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              LFI
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Local File Inclusion (LFI) is a vulnerability that occurs when an application allows user-supplied input to be used to include local files on the server.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default LFI;
  