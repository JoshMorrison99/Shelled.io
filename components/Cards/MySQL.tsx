import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  
  const MySQL = () => {
    return (
      <a href="/modules/mysql.html">
        <Stack direction="row" spacing={2}>
            <img src="/mysql.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking MySQL (3306)
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              MySQL is an open-source relational database management system.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default MySQL;
  