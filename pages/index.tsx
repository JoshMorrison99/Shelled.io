import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import SyntaxHighlighter from "react-syntax-highlighter";
import React, { useState } from "react";
import SUID from "../components/LinuxPrivilegeEscalation/SUID";
import Capabilities from "../components/LinuxPrivilegeEscalation/Capabilities";
import Cronjobs from "../components/LinuxPrivilegeEscalation/Cronjobs";
import LXD from "../components/LinuxPrivilegeEscalation/LXD";
import Sudo from "../components/LinuxPrivilegeEscalation/Sudo";
import NFS from "../components/LinuxPrivilegeEscalation/NFS";
import LD_PRELOAD from "../components/LinuxPrivilegeEscalation/LD_PRELOAD";
import TarWildcardInjection from "../components/LinuxPrivilegeEscalation/TarWildcardInjection";

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
        <Box sx={{ paddingBottom: "50vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Linux Privilege Escalation
            </Typography>
            <SUID title="SUID" />
            <Capabilities title="Capabilities" />
            <Cronjobs title="Cron Jobs" />
            <LXD title="LXD" />
            <Sudo title="Sudo" />
            <NFS title="NFS" />
            <LD_PRELOAD title="LD_PRELOAD" />
            <TarWildcardInjection title="Tar Wildcard Injection" />
          </Box>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Windows Privilege Escalation
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
