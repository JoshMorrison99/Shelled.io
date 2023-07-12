import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  import Link from "next/link";
  
  
  const ADEnumCard = () => {
    return (
      <Link href="/modules/ad-enumeration">
        <Stack direction="row">
        <img src="/adcard.png" width={100} height={100}  />
          <Grid >
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Active Directory Enumeration
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Active Directory is a directory service developed by Microsoft. It provides centralized management and authentication for network resources in a Windows domain environment. It stores information about users, computers, groups, and resources, enabling administrators to control access, enforce policies, and simplify network management tasks.
            </Typography>
          </Grid>
        </Stack>
      </Link>
    );
  };
  
  export default ADEnumCard;
  