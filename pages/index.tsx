import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import React from "react";
import LinuxCard from "../components/Cards/LinuxPrivilegeEscalation";
import WindowsCard from "../components/Cards/WindowsPrivilegeEscalation";
import BufferOverflowCard from "../components/Cards/BufferOverflow";
import Pagination from '@mui/material/Pagination';
import AttackingADCard from "../components/Cards/AttackingAD";
import CSRF from "../components/Cards/CSRF";
import LFI from "../components/Cards/LFI";
import RedCard from "../components/Cards/writeups/thm/red";
import Command_Injection from "../components/Cards/CommandInjection";
import File_Transfer from "../components/Cards/FileTransfer";
import SQLInjection from "../components/Cards/SQLInjection";
import SQL_1 from "./writeups/portswigger/sql-injection-in-where-clause";
import SQL_Injection_Where_Clause from "../components/Cards/writeups/portswigger/sql-injection-where-clause";
import SQL_Injection_Login_Bypass from "../components/Cards/writeups/portswigger/sql-injection-login-bypass";
import FTP from "../components/Cards/FTP";
import CBBH_CARD from "../components/Cards/blogs/cbbh";
import MSSQL from "../components/Cards/MSSQL";
import SMB from "../components/Cards/SMB";
import SMTP from "../components/Cards/SMTP";
import RDP from "../components/Cards/RDP";
import ONE_YEAR from "../components/Cards/blogs/1-year";
import DOM_XSS_using_web_messages_and_a_JavaScript_URL from "../components/Cards/writeups/portswigger/dom-xss-using-web-messages-and-a-javascript-url";
import DOM_XSS_using_web_messages from "../components/Cards/writeups/portswigger/dom-xss-using-web-messages";
import UraniumCard from "../components/Cards/writeups/thm/uranium";
import PIVOT from "../components/Cards/Pivot";
import MySQL from "../components/Cards/MySQL";
import AWS_Athena from "../components/Cards/aws/aws-athena";
import AWS_Cloudtrail from "./aws/cloudtrail";
import AWS_CloudTrail from "../components/Cards/aws/aws-cloudtrail";
import AWS_Cognito_User from "../components/Cards/aws/aws-cognito-user-1";
import AWS_Cognito_User_Pools from "./aws/cognito-user-pools-part-1";
import AWS_Cognito_User_1 from "../components/Cards/aws/aws-cognito-user-1";
import AWS_Cognito_User_2 from "../components/Cards/aws/aws-cognito-user-2";
import AWS_Cognito_User_3 from "../components/Cards/aws/aws-cognito-user-3";
import AWS_Cognito from "../components/Cards/AWS_Cognito";
import IIS_TILDE_CARD_1 from "../components/Cards/blogs/iis-tilde-enumeration-1";
import IIS_TILDE_CARD_2 from "../components/Cards/blogs/iis-tilde-enumeration-2";
import IIS_Card from "../components/Cards/IIS";
import IIS_TILDE_CARD_3 from "../components/Cards/blogs/iis-tilde-enumeration-3";
import DigiNinja_Login_Card from "../components/Cards/writeups/other/digininja_login";
import DigiNinja_Sender_Card from "../components/Cards/writeups/other/digininja_sender";

const Home = () => {
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
        {/* <Image
          src="/Shelled.png"
          width={300}
          height={300}
          className={styles.centerImage}
        /> */}
        <Typography className={styles.center} color="primary.main" variant="h1">
          Shelled
        </Typography>
        {/* <Script
          src="https://tryhackme.com/badge/47881"
          strategy="beforeInteractive"
        /> */}
      </Box>
      <Container>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Bug Bounty Modules
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <CSRF />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LFI/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Command_Injection/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SQLInjection/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <AWS_Cognito/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <IIS_Card/>
            </Grid>
            
          </Grid>
          
        </Box>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              CTF Modules
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <LinuxCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <WindowsCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BufferOverflowCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AttackingADCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <File_Transfer/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FTP/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MSSQL/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MySQL/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SMB/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SMTP/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RDP/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PIVOT/>
            </Grid>
            
          </Grid>
         
        </Box>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Writeups
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <RedCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SQL_Injection_Where_Clause/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SQL_Injection_Login_Bypass/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DOM_XSS_using_web_messages_and_a_JavaScript_URL/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DOM_XSS_using_web_messages/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <UraniumCard/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DigiNinja_Login_Card/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DigiNinja_Sender_Card/>
            </Grid>
          </Grid>
         
        </Box>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Blogs
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <CBBH_CARD/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ONE_YEAR/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <IIS_TILDE_CARD_1/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <IIS_TILDE_CARD_2/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <IIS_TILDE_CARD_3/>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={4}>
          </Grid>
          
        </Box>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              AWS
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <AWS_Athena/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <AWS_CloudTrail/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <AWS_Cognito_User_1/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <AWS_Cognito_User_2/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <AWS_Cognito_User_3/>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={4}>
          </Grid>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
