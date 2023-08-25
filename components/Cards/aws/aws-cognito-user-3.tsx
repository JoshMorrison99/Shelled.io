import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const AWS_Cognito_User_3 = () => {
    return (
      <a href="/aws/cognito-user-pools-part-3.html">
        <Stack direction="row" spacing={2}>
            <img src="/cognito.jpg" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Learning AWS Cognito User Pools: Part 3
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              In this post I will show how you can find security misconfigurations in AWS Cognito.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default AWS_Cognito_User_3;
  