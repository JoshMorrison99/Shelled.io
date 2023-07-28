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
import FTP_Login from "../../components/FTP/login";
import FTP_Download from "../../components/FTP/download";
import FTP_Upload from "../../components/FTP/upload";
import FTP_List from "../../components/FTP/list-files";
import FTP_Anonymous from "../../components/FTP/anonymous";
import FTP_Bruteforce from "../../components/FTP/bruteforce";


  
  const FTP = () => {
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
           Attacking FTP
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
              <FTP_Login title="Login"/>
              <FTP_Download title="Download"/>
              <FTP_Upload title="Upload"/>
              <FTP_List title="List"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Attacks
              </Typography>
              <FTP_Anonymous title="Anonymous Login"/>
              <FTP_Bruteforce title="Bruteforce"/>
            </Box>
            
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default FTP;
  