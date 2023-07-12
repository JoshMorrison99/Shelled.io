import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import React from "react";
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
import WindowsDeploymentServices from "../components/WindowsPrivilegeEscalation/WindowsDeploymentServices";
import PSHistory from "../components/WindowsPrivilegeEscalation/PowerShellHistory";
import IISConfiguration from "../components/WindowsPrivilegeEscalation/IISConfiguration";
import PuTTY from "../components/WindowsPrivilegeEscalation/PuTTY";
import ScheduledTasks from "../components/WindowsPrivilegeEscalation/ScheduledTasks";
import UnquotedServicePath from "../components/WindowsPrivilegeEscalation/UnquotedServicePath";
import PythonLibraryHijacking from "../components/LinuxPrivilegeEscalation/PythonLibraryHijacking";
import Path from "../components/LinuxPrivilegeEscalation/Path";
import SeRestoreSeBackup from "../components/WindowsPrivilegeEscalation/SeRestoreSeBackup";
import AlwaysInstallElevated from "../components/WindowsPrivilegeEscalation/AlwaysInstallElevated";
import SeTakeOwnership from "../components/WindowsPrivilegeEscalation/SeTakeOwnership";
import Pwnkit from "../components/LinuxPrivilegeEscalation/Pwnkit";
import DirtyPipe from "../components/LinuxPrivilegeEscalation/DirtyPipe";
import BufferOverflowStep0 from "../components/BufferOverflow/Step0";
import AS_REP_Roasting from "../components/ActiveDirectoryFootholds/AS-REP-Roasting";
import BruteForce from "../components/ActiveDirectoryFootholds/BruteForce";
import DCSyncAttack from "../components/ActiveDirectoryPrivilegeEscalation/DCSyncAttack";
import WriteDACL from "../components/ActiveDirectoryPrivilegeEscalation/WriteDACL";
import Kerberoasting from "../components/ActiveDirectoryPrivilegeEscalation/Kerberoasting";
import DNSAdmins from "../components/ActiveDirectoryPrivilegeEscalation/DNSAdmins";
import DockerGroup from "../components/LinuxPrivilegeEscalation/DockerGroup";
import ForceChangePassword from "../components/ActiveDirectoryPrivilegeEscalation/ForceChangePassword";
import GenericWriteOnGroup from "../components/ActiveDirectoryPrivilegeEscalation/GenericWriteOnGroup";
import SeImpersonatePrivilege from "../components/WindowsPrivilegeEscalation/SeImpersonatePrivilege";
import ADM from "../components/LinuxPrivilegeEscalation/adm";
import MozillaComponent from "../components/LinuxPrivilegeEscalation/MozillaComponent";
import OpenSSL from "../components/LinuxPrivilegeEscalation/OpenSSL_Capabilities";
import GenericWriteOnGPO from "../components/ActiveDirectoryPrivilegeEscalation/GenericWriteOnGPO";
import RIDCycling from "../components/ActiveDirectoryFootholds/RIDCycling";
import PassTheHash from "../components/ActiveDirectoryPrivilegeEscalation/PassTheHash";
import SCFFileAttack from "../components/ActiveDirectoryFootholds/SCFFileAttack";
import MS09_012_Churrasco from "../components/WindowsPrivilegeEscalation/MS09-012_Churrasco";
import SeLoadDriverPrivilege from "../components/WindowsPrivilegeEscalation/SeLoadDriverPrivilege";
import MS15_051 from "../components/WindowsPrivilegeEscalation/MS15-051";
import LAPS_READER from "../components/ActiveDirectoryPrivilegeEscalation/LAPS_READER";
import LLMNR from "../components/ActiveDirectoryFootholds/LLMNR-NBT-NS-Poisoning";
import GetUserswithSMBNullSession from "../components/ActiveDirectoryFootholds/GetUserswithSMBNullSession";
import GetUserswithLDAPAnonymousBind from "../components/ActiveDirectoryFootholds/GetUserswithLDAPAnonymousBind";
import PasswordSpraying from "../components/ActiveDirectoryFootholds/PasswordSpraying";
import PasswordSprayingPE from "../components/ActiveDirectoryPrivilegeEscalation/PasswordSprayingPE";
import BloodHoundIngestor from "../components/ActiveDirectoryCredentialedEnumeration/BloodhoundIngestor";
import Snaffler from "../components/ActiveDirectoryCredentialedEnumeration/Snaffler";
import ACLEnumeration from "../components/ActiveDirectoryCredentialedEnumeration/ACLEnumeration";
import SharpHound from "../components/ActiveDirectoryCredentialedEnumeration/SharpHound";
import GenericAll from "../components/ActiveDirectoryPrivilegeEscalation/GenericAll";
import GenericWriteOnUser from "../components/ActiveDirectoryPrivilegeEscalation/GenericWriteOnUser";
import CanPSRemote from "../components/ActiveDirectoryPrivilegeEscalation/CanPSRemote";
import SQLAdmin from "../components/ActiveDirectoryPrivilegeEscalation/SQLAdmin";
import NoPac from "../components/ActiveDirectoryPrivilegeEscalation/NoPac";
import PrintNightmare from "../components/ActiveDirectoryPrivilegeEscalation/PrintNightmare";
import PetitPotam from "../components/ActiveDirectoryPrivilegeEscalation/PetitPotam";
import SeImpersonateJuicyPotato from "../components/WindowsPrivilegeEscalation/SeImpersonateJuicyPotato";
import SeAssignPrimaryTokenJuicyPotato from "../components/WindowsPrivilegeEscalation/SeAssignPrimaryTokenJuicyPotato";
import SeDebugPrivilege from "../components/WindowsPrivilegeEscalation/SeDebugPrivilege";
import SeTakeOwnershipPrivilege from "../components/WindowsPrivilegeEscalation/SeTakeOwnershipPrivilege";
import SeBackupPrivilege from "../components/WindowsPrivilegeEscalation/SeBackupPrivilege";
import EventLogReader from "../components/WindowsPrivilegeEscalation/EventLogReader";
import ServerOperators from "../components/WindowsPrivilegeEscalation/ServerOperators";
import ScreenExploit from "../components/LinuxPrivilegeEscalation/Screen";
import ZoneTransfer from "../components/ActiveDirectoryFootholds/ZoneTransfer";
import ZeroLogon from "../components/ActiveDirectoryPrivilegeEscalation/ZeroLogon";
import LinuxCard from "../components/Cards/LinuxPrivilegeEscalation";
import WindowsCard from "../components/Cards/WindowsPrivilegeEscalation";
import BufferOverflowCard from "../components/Cards/BufferOverflow";
import ADFootholdCard from "../components/Cards/ActiveDirectoryFoothold";
import ADPrivEscCard from "../components/Cards/ActiveDirectoryPrivEsc";
import ADEnumCard from "../components/Cards/ActiveDirectoryEnumeration";

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
              Modules
            </Typography>
          </Box>
        <Grid container spacing={4}>
        <Grid item xs={6}>
              <LinuxCard />
              </Grid>
              <Grid item xs={6}>
              <WindowsCard/>
              </Grid>
              <Grid item xs={6}>
              <BufferOverflowCard/>
              </Grid>
              <Grid item xs={6}>
              <ADFootholdCard/>
              </Grid>
              <Grid item xs={6}>
              <ADPrivEscCard/>
              </Grid>
              <Grid item xs={6}>
              <ADEnumCard/>
              </Grid>
            </Grid>
        </Box>
        <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Writeups
            </Typography>
          </Box>
        <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography>TODO</Typography>
        </Grid>
        </Grid>
        <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Blogs
            </Typography>
          </Box>
        <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography>TODO</Typography>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
