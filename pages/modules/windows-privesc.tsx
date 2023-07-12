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
import WindowsDeploymentServices from "../../components/WindowsPrivilegeEscalation/WindowsDeploymentServices";
import PSHistory from "../../components/WindowsPrivilegeEscalation/PowerShellHistory";
import IISConfiguration from "../../components/WindowsPrivilegeEscalation/IISConfiguration";
import PuTTY from "../../components/WindowsPrivilegeEscalation/PuTTY";
import AlwaysInstallElevated from "../../components/WindowsPrivilegeEscalation/AlwaysInstallElevated";
import ScheduledTasks from "../../components/WindowsPrivilegeEscalation/ScheduledTasks";
import UnquotedServicePath from "../../components/WindowsPrivilegeEscalation/UnquotedServicePath";
import EventLogReader from "../../components/WindowsPrivilegeEscalation/EventLogReader";
import ServerOperators from "../../components/WindowsPrivilegeEscalation/ServerOperators";
import SeLoadDriverPrivilege from "../../components/WindowsPrivilegeEscalation/SeLoadDriverPrivilege";
import SeRestoreSeBackup from "../../components/WindowsPrivilegeEscalation/SeRestoreSeBackup";
import SeBackupPrivilege from "../../components/WindowsPrivilegeEscalation/SeBackupPrivilege";
import SeTakeOwnershipPrivilege from "../../components/WindowsPrivilegeEscalation/SeTakeOwnershipPrivilege";
import SeTakeOwnership from "../../components/WindowsPrivilegeEscalation/SeTakeOwnership";
import SeDebugPrivilege from "../../components/WindowsPrivilegeEscalation/SeDebugPrivilege";
import SeImpersonatePrivilege from "../../components/WindowsPrivilegeEscalation/SeImpersonatePrivilege";
import SeImpersonateJuicyPotato from "../../components/WindowsPrivilegeEscalation/SeImpersonateJuicyPotato";
import SeAssignPrimaryTokenJuicyPotato from "../../components/WindowsPrivilegeEscalation/SeAssignPrimaryTokenJuicyPotato";
import MS09_012_Churrasco from "../../components/WindowsPrivilegeEscalation/MS09-012_Churrasco";
import MS15_051 from "../../components/WindowsPrivilegeEscalation/MS15-051";

  
  const WindowsPrivEsc = () => {
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
            Windows Priviledge Escalation
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "50vh" }}>
            <WindowsDeploymentServices title="Windows Deployment Services" />
            <PSHistory title="PowerShell History" />
            <IISConfiguration title="IIS Configuration" />
            <PuTTY title="PuTTY" />
            <AlwaysInstallElevated title="AlwaysInstallElevated" />
            <ScheduledTasks title="Scheduled Tasks" />
            <UnquotedServicePath title="Unquoted Service Path" />
            <EventLogReader title="Event Log Reader" />
            <ServerOperators title="Server Operators" />
            <SeLoadDriverPrivilege title="Print Operators - SeLoadDriverPrivilege" />
            <SeRestoreSeBackup title="Backup Operators - SeBackupPrivilege & SeRestorePrivilege" />
            <SeBackupPrivilege title="SeBackupPrivilege" />
            <SeTakeOwnershipPrivilege title="SeTakeOwnershipPrivilege" />
            <SeTakeOwnership title="SeTakeOwnershipPrivilege RDP" />
            <SeDebugPrivilege title="SeDebugPrivilege" />
            <SeImpersonatePrivilege title="SeImpersonatePrivilege PrintSpoofer" />
            <SeImpersonateJuicyPotato title="SeImpersonatePrivilege JuicyPotato" />
            <SeAssignPrimaryTokenJuicyPotato title="SeAssignPrimaryToken JuicyPotato" />
            <MS09_012_Churrasco title="MS09-012 Churrasco" />
            <MS15_051 title="MS15-051" />
            </Box>
        </Container>
      </Box>
    );
  };
  
  export default WindowsPrivEsc;
  