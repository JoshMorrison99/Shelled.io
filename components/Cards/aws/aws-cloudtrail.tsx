import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const AWS_CloudTrail = () => {
    return (
      <a href="/aws/cloudtrail.html">
        <Stack direction="row" spacing={2}>
            <img src="/cloudtrail.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Learning AWS CloudTrail
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              AWS CloudTrail enables users to capture information on activity in the AWS environment and optionally have more insight into specific resources.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default AWS_CloudTrail;
  