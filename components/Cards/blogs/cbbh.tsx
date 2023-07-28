import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const CBBH_CARD = () => {
    return (
      <a href="/blogs/cbbh">
        <Stack direction="row" spacing={2}>
            <img src="/htb.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              CBBH Review
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              This blog post is a review on my experience taking the Certificed Bug Bounty Hunter (CBBH) certification on HackTheBox. 
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default CBBH_CARD;
  