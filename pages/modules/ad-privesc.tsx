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
            Active Directory Priviledge Escalation
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "50vh" }}>
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
        </Container>
      </Box>
    );
  };
  
  export default ADPrivEsc;
  