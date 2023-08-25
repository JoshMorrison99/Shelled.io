import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const AWS_Cognito = () => {
    return (
      <a href="/modules/aws_cognito.html">
        <Stack direction="row" spacing={2}>
            <img src="/cognito.jpg" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              AWS Cognito
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Amazon Cognito is an identity platform for web and mobile apps. It's a user directory, an authentication server, and an authorization service for OAuth 2.0 access tokens and AWS credentials.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default AWS_Cognito;
  