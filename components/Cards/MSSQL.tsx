import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  
  const MSSQL = () => {
    return (
      <a href="/modules/mssql.html">
        <Stack direction="row" spacing={2}>
            <img src="/mssql.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking MSSQL
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              MSSQL is a RDBMS developed by Microsoft. MSSQL is Microsoft's version of MySQL.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default MSSQL;
  