import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import AS_REP_Roasting from "../../components/ActiveDirectoryFootholds/AS-REP-Roasting";
import BruteForce from "../../components/ActiveDirectoryFootholds/BruteForce";
import RIDCycling from "../../components/ActiveDirectoryFootholds/RIDCycling";
import SCFFileAttack from "../../components/ActiveDirectoryFootholds/SCFFileAttack";
import LLMNR from "../../components/ActiveDirectoryFootholds/LLMNR-NBT-NS-Poisoning";
import GetUserswithSMBNullSession from "../../components/ActiveDirectoryFootholds/GetUserswithSMBNullSession";
import GetUserswithLDAPAnonymousBind from "../../components/ActiveDirectoryFootholds/GetUserswithLDAPAnonymousBind";
import PasswordSpraying from "../../components/ActiveDirectoryFootholds/PasswordSpraying";
import ZoneTransfer from "../../components/ActiveDirectoryFootholds/ZoneTransfer";


  
  const ADFoothold = () => {
    return (
      <Box
        className={styles.container}
        sx={{ backgroundColor: "primary.background_website" }}
      >
        <Box
          sx={{
            height: "100vh",
          }}
        >
          
          <Typography className={styles.center} color="primary.main" variant="h2">
            Active Directory Footholds
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "50vh" }}>
          <AS_REP_Roasting title="AS-REP Roasting" />
            <BruteForce title="Brute Force Kerberos Pre-Authentication" />
            <RIDCycling title="RID Cycling" />
            <SCFFileAttack title="SCF File Attack" />
            <LLMNR title="LLMNR/NBT-NS Poisoning" />
            <GetUserswithSMBNullSession title="Get Users with SMB NULL Session" />
            <GetUserswithLDAPAnonymousBind title="Get Users with LDAP Anonymous Bind" />
            <PasswordSpraying title="Password Spraying" />
            <ZoneTransfer title="Zone Transfer" />
            </Box>
        </Container>
      </Box>
    );
  };
  
  export default ADFoothold;
  