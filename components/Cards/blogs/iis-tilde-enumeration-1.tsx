import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const IIS_TILDE_CARD_1 = () => {
    return (
      <a href="/blogs/iis-tilde-enumeration-1.html">
        <Stack direction="row" spacing={2}>
            <img src="/iis.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              IIS Tilde Enumeration: Part 1
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              This blog post is a three part post on an investigation into IIS tilde enumation. In this blog we setup IIS server using AWS EC2.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default IIS_TILDE_CARD_1;
  