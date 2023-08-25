import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const AWS_Athena = () => {
    return (
      <a href="/aws/athena.html">
        <Stack direction="row" spacing={2}>
            <img src="/athena.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Learning AWS Athena
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              AWS Athena enables users to perform SQL queries on S3 buckets. In this project I documented how to setup AWS Athena and performed multiple SQL queries on the S3 bucket data.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default AWS_Athena;
  