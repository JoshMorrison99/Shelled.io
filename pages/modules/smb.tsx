import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import SMB_Null_Authentication from "../../components/SMB/null-authentication";
import SMB_Brute_Force from "../../components/SMB/brute-force";
import SMB_Pass_The_Hash from "../../components/SMB/pass-the-hash";
import SMB_Password_Spray from "../../components/SMB/password-spray";
import SMB_Guest_Account from "../../components/SMB/guest-account";
import SMB_List_Shares_Unauth from "../../components/SMB/list-shares-unauth";
import SMB_List_Shares_Auth from "../../components/SMB/list-shared-auth";
import SMB_Connect from "../../components/SMB/connect";
import SMB_Connect_Commands from "../../components/SMB/smbclient";
import SMB_LocalCMD from "../../components/SMB/local_cmd";

  
  const SMB = () => {
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
            SMB
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
              <SMB_List_Shares_Unauth title="List Shares (Unauthenticated)"/>
              <SMB_List_Shares_Auth title="List Shares (Authenticated)"/>
              <SMB_Connect title="Connect to Share"/>
              <SMB_Connect_Commands title="SMB Commands"/>
              <SMB_LocalCMD title="Local Commands"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Attacks
              </Typography>
              <SMB_Null_Authentication title="Null Authentication"/>
              <SMB_Guest_Account title="Guest Account"/>
              <SMB_Brute_Force title="Password Bruteforce"/>
              <SMB_Password_Spray title="Password Spray"/>
              <SMB_Pass_The_Hash title="Pass the Hash"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}/>
        </Container>

        
      </Box>
    );
  };
  
  export default SMB;
  