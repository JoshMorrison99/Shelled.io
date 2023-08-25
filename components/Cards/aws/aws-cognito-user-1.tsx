import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const AWS_Cognito_User_1 = () => {
    return (
      <a href="/aws/cognito-user-pools-part-1.html">
        <Stack direction="row" spacing={2}>
            <img src="/cognito.jpg" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Learning AWS Cognito User Pools: Part 1
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Amazon Cognito user pools are a managed service that lets you add secure authentication and authorization to your apps. In this post I will show how to setup AWS Cognito.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default AWS_Cognito_User_1;
  