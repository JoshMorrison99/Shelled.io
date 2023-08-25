import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const DigiNinja_Sender_Card = () => {
    return (
      <a href="/writeups/other/digininja_sender.html">
        <Stack direction="row" spacing={2}>
            <img src="/digininja_avatar.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              DigiNinja postMessage - Sender Lab
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
               This page logs usage to the iframe, setup an environment where it is possible to spoof log messages from your own domain.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default DigiNinja_Sender_Card;
  