import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const File_Transfer = () => {
    return (
      <a href="/modules/file-transfer">
        <Stack direction="row" spacing={2}>
            <img src="/filetransfer.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              File Transfer
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              This is a cheatsheet for transfering files between systems on the same and different operating systems.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default File_Transfer;
  