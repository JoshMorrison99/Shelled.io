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
            
          </Grid>
          <Box display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}>
            <Pagination count={10} color="primary" sx={{ button: { color: '#000000' } }} />
          </Box>
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
              <SMB/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SMTP/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RDP/>
            </Grid>
            
          </Grid>
          <Box display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}>
            <Pagination count={10} color="primary" sx={{ button: { color: '#000000' } }} />
          </Box>
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
          </Grid>
          <Box display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}>
            <Pagination count={10} color="primary" sx={{ button: { color: '#000000' } }} />
          </Box>
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
            </Grid>
          </Box>
          <Grid container spacing={4}>
          </Grid>
          <Box display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}>
            <Pagination count={10} color="primary" sx={{ button: { color: '#000000' } }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
