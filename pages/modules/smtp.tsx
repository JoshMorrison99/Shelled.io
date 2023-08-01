import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import SMTP_EXPN from "../../components/SMTP/expn";
import SMTP_VRFY from "../../components/SMTP/vrfy";
import SMTP_RCPT_TO from "../../components/SMTP/rcpt";
import SMTP_Username_Bruteforce from "../../components/SMTP/username-bruteforce";
import SMTP_Password_Bruteforce from "../../components/SMTP/password-bruteforce";
import SMTP_HELO from "../../components/SMTP/helo";
import SMTP_NOOP from "../../components/SMTP/noop";
import SMTP_QUIT from "../../components/SMTP/quit";
import SMTP_Phishing from "../../components/SMTP/phishing";

  
  const SMTP = () => {
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
            SMTP
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
              <SMTP_HELO title="HELO"/>
              <SMTP_EXPN title="EXPN"/>
              <SMTP_VRFY title="VRFY"/>
              <SMTP_RCPT_TO title="RCPT"/>
              <SMTP_NOOP title="NOOP"/>
              <SMTP_QUIT title="QUIT"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Attacks
              </Typography>
              <SMTP_Username_Bruteforce title="Username Enumeration"/>
              <SMTP_Password_Bruteforce title="Password Bruteforce"/>
              <SMTP_Phishing title="Phishing"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}/>
        </Container>

        
      </Box>
    );
  };
  
  export default SMTP;
  