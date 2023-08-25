import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const DigiNinja_Login_Card = () => {
    return (
      <a href="/writeups/other/digininja_login.html">
        <Stack direction="row" spacing={2}>
            <img src="/digininja_avatar.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              DigiNinja postMessage - Login Lab
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
               The login page is held in an `iframe` and on a successful login it sends the token up to the parent, this page, so it can also use it.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default DigiNinja_Login_Card;
  