import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const FTP = () => {
    return (
      <a href="/modules/ftp">
        <Stack direction="row" spacing={2}>
            <img src="/ftp.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking FTP
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              FTP stands for File Transfer Protocol. It is a standard network protocol used to transfer files between a client and a server on a computer network.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default FTP;
  