import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const RedCard = () => {
    return (
      <a href="/writeups/thm/red.html">
        <Stack direction="row" spacing={2}>
            <img src="/red.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Red
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Red is an easy machine on TryHackMe that starts by exploiting an LFI using PHP filters, investigating system processes and CVE-2021-4034.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default RedCard;
  