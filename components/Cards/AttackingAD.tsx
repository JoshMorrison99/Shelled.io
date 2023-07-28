import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  import Link from "next/link";
  
  
  const AttackingADCard = () => {
    return (
      <a href="/modules/ad-privesc">
        <Stack direction="row" spacing={2}>
          <img src="/adcard.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Attacking Active Directory
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Active Directory is a directory service developed by Microsoft. It provides centralized management and authentication for network resources in a Windows domain environment. 
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default AttackingADCard;
  