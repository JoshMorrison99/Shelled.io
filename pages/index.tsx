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
import CVE_2017_7269 from "../components/WebFootholds/CVE_2017_7269";
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
            <Path title="$PATH" />
            <TarWildcardInjection title="Tar Wildcard Injection" />
            <PythonLibraryHijacking title="Python Library Hijacking" />
            <MozillaComponent title="Mozilla Profile" />
            <OpenSSL title="OpenSSL Capabilities" />
            <ADM title="ADM Group" />
            <DockerGroup title="Docker Group" />
            <Pwnkit title="Pwnkit - CVE-2021-4034" />
            <DirtyPipe title="DirtyPipe - CVE-2022-0847" />
          </Box>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Windows Privilege Escalation
            </Typography>
            <WindowsDeploymentServices title="Windows Deployment Services" />
            <PSHistory title="PowerShell History" />
            <IISConfiguration title="IIS Configuration" />
            <PuTTY title="PuTTY" />
            <ScheduledTasks title="Scheduled Tasks" />
            <UnquotedServicePath title="Unquoted Service Path" />
            <SeRestoreSeBackup title="SeBackup & SeRestore" />
            <AlwaysInstallElevated title="AlwaysInstallElevated" />
            <SeTakeOwnershipPrivilege title="SeTakeOwnershipPrivilege" />
            <SeTakeOwnership title="SeTakeOwnershipPrivilege RDP" />
            <SeDebugPrivilege title="SeDebugPrivilege" />
            <SeImpersonatePrivilege title="SeImpersonatePrivilege PrintSpoofer" />
            <SeImpersonateJuicyPotato title="SeImpersonatePrivilege JuicyPotato" />
            <SeAssignPrimaryTokenJuicyPotato title="SeAssignPrimaryToken JuicyPotato" />
            <SeLoadDriverPrivilege title="SeLoadDriverPrivilege" />
            <MS09_012_Churrasco title="MS09-012 Churrasco" />
            <MS15_051 title="MS15-051" />
          </Box>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Active Directory Footholds
            </Typography>
            <AS_REP_Roasting title="AS-REP Roasting" />
            <BruteForce title="Brute Force Kerberos Pre-Authentication" />
            <RIDCycling title="RID Cycling" />
            <SCFFileAttack title="SCF File Attack" />
            <LLMNR title="LLMNR/NBT-NS Poisoning" />
            <GetUserswithSMBNullSession title="Get Users with SMB NULL Session" />
            <GetUserswithLDAPAnonymousBind title="Get Users with LDAP Anonymous Bind" />
            <PasswordSpraying title="Password Spraying" />
          </Box>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Active Directory Credentialed Enumeration
            </Typography>
            <BloodHoundIngestor title="BloodHound Ingestor" />
            <SharpHound title="BloodHound SharpHound" />
            <ACLEnumeration title="ACL Enumeration" />
            <Snaffler title="Snaffler" />
          </Box>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Active Directory Privilege Escalation
            </Typography>
            <DCSyncAttack title="GetChanges/GetChangesAll" />
            <WriteDACL title="WriteDACL over a Domain" />
            <ForceChangePassword title="ForceChangePassword over a User" />
            <GenericWriteOnUser title="GenericWrite over a User" />
            <GenericWriteOnGroup title="GenericWrite over a Group" />
            <GenericWriteOnGPO title="GenericWrite over a GPO" />
            <GenericAll title="GenericAll over a User" />
            <Kerberoasting title="Kerberoasting" />
            <PassTheHash title="Pass the Hash" />
            <DNSAdmins title="DNSAdmins" />
            <LAPS_READER title="LAPS_READER Group" />
            <CanPSRemote title="CanPSRemote" />
            <SQLAdmin title="SQLAdmin" />
            <PasswordSprayingPE title="Password Spraying" />
            <NoPac title="NoPac (Sam the Admin)" />
            <PrintNightmare title="PrintNightmare" />
            <PetitPotam title="PetitPotam (MS-EFSRPC)" />
          </Box>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Web Footholds
            </Typography>
            <CVE_2017_7269 title="CVE-2017-7269" />
          </Box>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Buffer Overflow
            </Typography>
            <BufferOverflowStep0 title="Step 0 - Download Script" />
            <BufferOverflowStep1 title="Step 1 - Fuzzing" />
            <BufferOverflowStep2 title="Step 2 - Finding the Offset by Creating Pattern" />
            <BufferOverflowStep3 title="Step 3 - Finding the Offset by Querying Pattern" />
            <BufferOverflowStep4 title="Step 4 - Finding Bad Characters by Sending Bytearray" />
            <BufferOverflowStep5 title="Step 5 - Finding Bad Characters by Querying Bytearray" />
            <BufferOverflowStep6 title="Step 6 - Finding Jump Point" />
            <BufferOverflowStep7 title="Step 7 - Exploiting" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
