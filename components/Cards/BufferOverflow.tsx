import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const BufferOverflowCard = () => {
    return (
      <a href="/modules/buffer-overflow.html">
        <Stack direction="row" spacing={2}>
        <img src="/buffcard.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Buffer Overflow
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Buffer overflow is a software vulnerability where a program writes data beyond the boundaries of a fixed-size buffer. This can lead to overwriting adjacent memory, potentially causing crashes, unauthorized access, or execution of arbitrary code. 
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default BufferOverflowCard;
  