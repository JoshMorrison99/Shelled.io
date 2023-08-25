import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const IIS_Card = () => {
    return (
      <a href="/modules/iis.html">
        <Stack direction="row" spacing={2}>
            <img src="/iis.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              IIS Web Server
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Internet Information Services is an extensible web server created by Microsoft for use with the Windows NT family.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default IIS_Card;
  