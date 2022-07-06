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
import BufferOverflowStep1 from "../components/BufferOverflow/Step1";
import BufferOverflowStep2 from "../components/BufferOverflow/Step2";
import BufferOverflowStep3 from "../components/BufferOverflow/Step3";
import BufferOverflowStep4 from "../components/BufferOverflow/Step4";
import BufferOverflowStep5 from "../components/BufferOverflow/Step5";
import BufferOverflowStep6 from "../components/BufferOverflow/Step6";
import BufferOverflowStep7 from "../components/BufferOverflow/Step7";
import BufferOverflowStep8 from "../components/BufferOverflow/Step8";
import BufferOverflowStep9 from "../components/BufferOverflow/Step9";
import BufferOverflowStep10 from "../components/BufferOverflow/Step10";
import BufferOverflowStep11 from "../components/BufferOverflow/Step11";

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
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Buffer Overflow
            </Typography>
            <BufferOverflowStep1 title="Step 1 - Fuzzing (Script)" />
            <BufferOverflowStep2 title="Step 2 - Finding the Offset" />
            <BufferOverflowStep3 title="Step 3 - Finding the Offset (Script)" />
            <BufferOverflowStep4 title="Step 4 - Finding the Offset" />
            <BufferOverflowStep5 title="Step 5 - Overwritting the EIP (Script)" />
            <BufferOverflowStep6 title="Step 6 - Finding Bad Characters" />
            <BufferOverflowStep7 title="Step 7 - Finding Bad Characters (Script)" />
            <BufferOverflowStep8 title="Step 8 - Finding Bad Characters" />
            <BufferOverflowStep9 title="Step 9 - Jmp" />
            <BufferOverflowStep10 title="Step 10 - Jmp" />
            <BufferOverflowStep11 title="Step 11 - Generating Payload (Script)" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
