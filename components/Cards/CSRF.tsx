import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const CSRF = () => {
    return (
      <a href="/modules/csrf.html">
        <Stack direction="row" spacing={2}>
            <img src="/csrf.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              CSRF
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Cross-Site Request Forgery (CSRF) is an attack that tricks a victim into executing unwanted actions on a web application in which they are authenticated. 
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default CSRF;
  