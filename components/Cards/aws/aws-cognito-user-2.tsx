import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const AWS_Cognito_User_2 = () => {
    return (
      <a href="/aws/cognito-user-pools-part-2.html">
        <Stack direction="row" spacing={2}>
            <img src="/cognito.jpg" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Learning AWS Cognito User Pools: Part 2
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              In this post I will show how AWS Cognito can be used with a ReactJS application.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default AWS_Cognito_User_2;
  