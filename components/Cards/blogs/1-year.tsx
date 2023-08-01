import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const ONE_YEAR = () => {
    return (
      <a href="/blogs/1-year.html">
        <Stack direction="row" spacing={2}>
            <img src="/work.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              1'st Year Working in Cyber Security
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              This blog post is a quick overview of things that I learned in my first year of working in cyber security.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default ONE_YEAR;
  