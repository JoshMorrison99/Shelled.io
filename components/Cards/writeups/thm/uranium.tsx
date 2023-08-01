import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const UraniumCard = () => {
    return (
      <a href="/writeups/thm/uranium.html">
        <Stack direction="row" spacing={2}>
            <img src="/uranium.jpeg" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Uranium
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Uranium is a "Hard" rated machine that has an interesting foothold which involves sending a reverse shell payload via an email over SMTP port 25.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default UraniumCard;
  