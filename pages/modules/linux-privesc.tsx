import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import SUID from "../../components/LinuxPrivilegeEscalation/SUID";
import Capabilities from "../../components/LinuxPrivilegeEscalation/Capabilities";
import Cronjobs from "../../components/LinuxPrivilegeEscalation/Cronjobs";
import LXD from "../../components/LinuxPrivilegeEscalation/LXD";
import Sudo from "../../components/LinuxPrivilegeEscalation/Sudo";
import NFS from "../../components/LinuxPrivilegeEscalation/NFS";
import LD_PRELOAD from "../../components/LinuxPrivilegeEscalation/LD_PRELOAD";
import Path from "../../components/LinuxPrivilegeEscalation/Path";
import TarWildcardInjection from "../../components/LinuxPrivilegeEscalation/TarWildcardInjection";
import PythonLibraryHijacking from "../../components/LinuxPrivilegeEscalation/PythonLibraryHijacking";
import MozillaComponent from "../../components/LinuxPrivilegeEscalation/MozillaComponent";
import OpenSSL from "../../components/LinuxPrivilegeEscalation/OpenSSL_Capabilities";
import ADM from "../../components/LinuxPrivilegeEscalation/adm";
import DockerGroup from "../../components/LinuxPrivilegeEscalation/DockerGroup";
import ScreenExploit from "../../components/LinuxPrivilegeEscalation/Screen";
import Pwnkit from "../../components/LinuxPrivilegeEscalation/Pwnkit";
import DirtyPipe from "../../components/LinuxPrivilegeEscalation/DirtyPipe";

  
  const LinuxPrivEsc = () => {
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
            Linux Priviledge Escalation
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "50vh" }}>
              <SUID title="SUID" />
              <Capabilities title="Capabilities" />
              <Cronjobs title="Cron Jobs" />
              <LXD title="LXD" />
              <Sudo title="Sudo" />
              <NFS title="NFS" />
              <LD_PRELOAD title="LD_PRELOAD" />
              <Path title="$PATH" />
              <TarWildcardInjection title="Tar Wildcard Injection" />
              <PythonLibraryHijacking title="Python Library Hijacking" />
              <MozillaComponent title="Mozilla Profile" />
              <OpenSSL title="OpenSSL Capabilities" />
              <ADM title="ADM Group" />
              <DockerGroup title="Docker Group" />
              <ScreenExploit title="Screen" />
              <Pwnkit title="Pwnkit - CVE-2021-4034" />
              <DirtyPipe title="DirtyPipe - CVE-2022-0847" />
            </Box>
        </Container>
      </Box>
    );
  };
  
  export default LinuxPrivEsc;
  