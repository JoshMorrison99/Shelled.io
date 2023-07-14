import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import DCSyncAttack from "../../components/ActiveDirectoryPrivilegeEscalation/DCSyncAttack";
import WriteDACL from "../../components/ActiveDirectoryPrivilegeEscalation/WriteDACL";
import ForceChangePassword from "../../components/ActiveDirectoryPrivilegeEscalation/ForceChangePassword";
import GenericWriteOnUser from "../../components/ActiveDirectoryPrivilegeEscalation/GenericWriteOnUser";
import GenericWriteOnGroup from "../../components/ActiveDirectoryPrivilegeEscalation/GenericWriteOnGroup";
import GenericWriteOnGPO from "../../components/ActiveDirectoryPrivilegeEscalation/GenericWriteOnGPO";
import GenericAll from "../../components/ActiveDirectoryPrivilegeEscalation/GenericAll";
import Kerberoasting from "../../components/ActiveDirectoryPrivilegeEscalation/Kerberoasting";
import PassTheHash from "../../components/ActiveDirectoryPrivilegeEscalation/PassTheHash";
import DNSAdmins from "../../components/ActiveDirectoryPrivilegeEscalation/DNSAdmins";
import LAPS_READER from "../../components/ActiveDirectoryPrivilegeEscalation/LAPS_READER";
import CanPSRemote from "../../components/ActiveDirectoryPrivilegeEscalation/CanPSRemote";
import SQLAdmin from "../../components/ActiveDirectoryPrivilegeEscalation/SQLAdmin";
import PasswordSprayingPE from "../../components/ActiveDirectoryPrivilegeEscalation/PasswordSprayingPE";
import NoPac from "../../components/ActiveDirectoryPrivilegeEscalation/NoPac";
import PrintNightmare from "../../components/ActiveDirectoryPrivilegeEscalation/PrintNightmare";
import PetitPotam from "../../components/ActiveDirectoryPrivilegeEscalation/PetitPotam";
import ZeroLogon from "../../components/ActiveDirectoryPrivilegeEscalation/ZeroLogon";
import BloodHoundIngestor from "../../components/ActiveDirectoryCredentialedEnumeration/BloodhoundIngestor";
import SharpHound from "../../components/ActiveDirectoryCredentialedEnumeration/SharpHound";
import ACLEnumeration from "../../components/ActiveDirectoryCredentialedEnumeration/ACLEnumeration";
import Snaffler from "../../components/ActiveDirectoryCredentialedEnumeration/Snaffler";
import AS_REP_Roasting from "../../components/ActiveDirectoryFootholds/AS-REP-Roasting";
import BruteForce from "../../components/ActiveDirectoryFootholds/BruteForce";
import RIDCycling from "../../components/ActiveDirectoryFootholds/RIDCycling";
import SCFFileAttack from "../../components/ActiveDirectoryFootholds/SCFFileAttack";
import LLMNR from "../../components/ActiveDirectoryFootholds/LLMNR-NBT-NS-Poisoning";
import GetUserswithSMBNullSession from "../../components/ActiveDirectoryFootholds/GetUserswithSMBNullSession";
import GetUserswithLDAPAnonymousBind from "../../components/ActiveDirectoryFootholds/GetUserswithLDAPAnonymousBind";
import PasswordSpraying from "../../components/ActiveDirectoryFootholds/PasswordSpraying";
import ZoneTransfer from "../../components/ActiveDirectoryFootholds/ZoneTransfer";


  
  const ADPrivEsc = () => {
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
            Attacking Active Directory
          </Typography>
        </Box>
        <Container>
        <Box mb={1}>
            <Typography variant="h3" color="primary.main">
              Priviledge Escalation
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "10vh" }}>
            
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
            <ZeroLogon title="Zero Logon" />
            </Box>
            <Box>
            <Box mb={1}>
            <Typography variant="h3" color="primary.main">
              Enumeration
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "10vh" }}>
          <BloodHoundIngestor title="BloodHound Ingestor" />
            <SharpHound title="BloodHound SharpHound" />
            <ACLEnumeration title="ACL Enumeration" />
            <Snaffler title="Snaffler" />
            </Box>
        </Box>
        <Box>
        <Box mb={1}>
            <Typography variant="h3" color="primary.main">
              Footholds
            </Typography>
          </Box>
          <Box sx={{ paddingBottom: "50vh" }}>
          <AS_REP_Roasting title="AS-REP Roasting" />
            <BruteForce title="Brute Force Kerberos Pre-Authentication" />
            <RIDCycling title="RID Cycling" />
            <SCFFileAttack title="SCF File Attack" />
            <LLMNR title="LLMNR/NBT-NS Poisoning" />
            <GetUserswithSMBNullSession title="Get Users with SMB NULL Session" />
            <GetUserswithLDAPAnonymousBind title="Get Users with LDAP Anonymous Bind" />
            <PasswordSpraying title="Password Spraying" />
            <ZoneTransfer title="Zone Transfer" />
            </Box>
        </Box>

        </Container>
      </Box>
    );
  };
  
  export default ADPrivEsc;
  