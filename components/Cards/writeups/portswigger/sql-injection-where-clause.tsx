import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const SQL_Injection_Where_Clause = () => {
    return (
      <a href="/writeups/portswigger/sql-injection-in-where-clause">
        <Stack direction="row" spacing={2}>
            <img src="/portswigger.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              SQL Injection in Where Clause
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              This Portswigger SQL Injection lab contains a SQL injection vulnerability in the product category filter.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default SQL_Injection_Where_Clause;
  