import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import LFI_Linux from "../../components/LFI/Linux";
import LFI_Windows from "../../components/LFI/Windows";
import LFI_Non_Recursive from "../../components/LFI/non-recursive-filter";
import LFI_Encoding from "../../components/LFI/encoding";
import LFI_PHP_Filter from "../../components/LFI/php-filter";
import LFI_PHP_Data from "../../components/LFI/php-data";
import LFI_PHP_Input from "../../components/LFI/php-input";
import LFI_PHP_Expect from "../../components/LFI/php-expect";
import LFI_Non_Null_Byte from "../../components/LFI/null-byte";
import LFI_2_RCE_Apache_Logs from "../../components/LFI/lfi-2-rce-apache-logs";
import LFI_2_RCE_Nginx_Logs from "../../components/LFI/lfi-2-rce-nginx-logs";
import LFI_2_RCE_PHP_Sessions from "../../components/LFI/lfi-2-rce-php-sessions";
import LFI_2_RCE_Proc_Environ from "../../components/LFI/lfi-2-rce-proc-environ";
import LFI_2_RCE_SSH_Log from "../../components/LFI/lfi-2-rce-ssh-log";


  
  const LFI = () => {
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
            LFI
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
              <LFI_Linux title="Linux"/>
              <LFI_Windows title="Windows"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Basic Bypasses
              </Typography>
              <LFI_Non_Recursive title="Non Recursive Filter"/>
              <LFI_Encoding title="URL-Encoding"/>
              <LFI_Non_Null_Byte title="Null Byte"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}/>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                PHP Wrappers
              </Typography>
              <LFI_PHP_Filter title="PHP Filter"/>
              <LFI_PHP_Data title="PHP Data"/>
              <LFI_PHP_Input title="PHP Input"/>
              <LFI_PHP_Expect title="PHP Expect"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}/>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                LFI 2 RCE
              </Typography>
              <LFI_2_RCE_Apache_Logs title="Apache Logs"/>
              <LFI_2_RCE_Nginx_Logs title="Nginx Logs"/>
              <LFI_2_RCE_PHP_Sessions title="PHP SESSID"/>
              <LFI_2_RCE_Proc_Environ title="Current Process Environment Variables"/>
              <LFI_2_RCE_SSH_Log title="SSH Logs"/>
            </Box>

            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default LFI;
  