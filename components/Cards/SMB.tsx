import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const SMB = () => {
    return (
      <a href="/modules/smb.html">
        <Stack direction="row" spacing={2}>
            <img src="/smb.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking SMB (445)
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Server Message Block (SMB) is a communication protocol created for providing shared access to files and printers across nodes on a network.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default SMB;
  