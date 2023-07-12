import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import BloodHoundIngestor from "../../components/ActiveDirectoryCredentialedEnumeration/BloodhoundIngestor";
import SharpHound from "../../components/ActiveDirectoryCredentialedEnumeration/SharpHound";
import ACLEnumeration from "../../components/ActiveDirectoryCredentialedEnumeration/ACLEnumeration";
import Snaffler from "../../components/ActiveDirectoryCredentialedEnumeration/Snaffler";


  
  const ADEnum = () => {
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
            Active Directory Enumeration
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "50vh" }}>
          <BloodHoundIngestor title="BloodHound Ingestor" />
            <SharpHound title="BloodHound SharpHound" />
            <ACLEnumeration title="ACL Enumeration" />
            <Snaffler title="Snaffler" />
            </Box>
        </Container>
      </Box>
    );
  };
  
  export default ADEnum;
  