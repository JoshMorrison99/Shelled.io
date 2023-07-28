import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const SQLInjection = () => {
    return (
      <a href="/modules/sql-injection">
        <Stack direction="row" spacing={2}>
            <img src="/sql.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              SQL Injection
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              SQL injection is a vulnerability that occurs when an attacker manipulates an application's input in such a way that it allows unauthorized access to a database or the ability to execute malicious SQL statements. 
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default SQLInjection;
  