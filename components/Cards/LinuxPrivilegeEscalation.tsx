import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  import Link from "next/link";
  
  
  const LinuxCard = () => {
    return (
      <Link href="/modules/linux-privesc">
        <Stack direction="row">
        <img src="/linuxcard.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Linux Privilege Escalation
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Linux privilege escalation refers to the process of gaining elevated privileges or administrative access on a Linux system beyond what is normally granted to a user.
            </Typography>
          </Grid>
        </Stack>
      </Link>
    );
  };
  
  export default LinuxCard;
  