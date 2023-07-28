import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import FT_wget from "../../components/FileTransfer/wget";
import FT_Base64 from "../../components/FileTransfer/base64";
import FT_Fileless from "../../components/FileTransfer/fileless";
import FT_nc from "../../components/FileTransfer/nc";
import FT_ncat from "../../components/FileTransfer/Ncat";
import FT_ssh from "../../components/FileTransfer/ssh";
import FT_php from "../../components/FileTransfer/php";
import FT_python2 from "../../components/FileTransfer/python2";
import FT_python3 from "../../components/FileTransfer/python3";
import FT_ruby from "../../components/FileTransfer/ruby";
import FT_xfreerdp from "../../components/FileTransfer/xfreerdp";
import FT_Bitsadmin from "../../components/FileTransfer/bitsadmin";
import FT_Certutil from "../../components/FileTransfer/certutil";
import FT_FTP from "../../components/FileTransfer/ftp";
import FT_Powershell_Download from "../../components/FileTransfer/powershell-download";
import FT_Powershell_Webrequest from "../../components/FileTransfer/powershell-webrequest";
import FT_Powershell_Base64 from "../../components/FileTransfer/powershell-base64";
import FT_Powershell_Fileless from "../../components/FileTransfer/powershell-fileless";
import FT_SMB from "../../components/FileTransfer/smb";
import FT_SMB_Authenticated from "../../components/FileTransfer/smb-authenticated";
import FT_Explorer_Error from "../../components/FileTransfer/explorer-error";
import FT_SSL_TLS_ERROR from "../../components/FileTransfer/ssl-tls-error";
import FT_FTP_Upload from "../../components/FileTransfer/ftp-upload";
import FT_Base64_Windows from "../../components/FileTransfer/base64-windows";
import FT_SMB_Upload from "../../components/FileTransfer/smb-upload";
import FT_SMB_Upload_Blocked from "../../components/FileTransfer/smb-uploads-blocked";
  
  const File_Transfer = () => {
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
            File Transfer
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Linux to Linux
              </Typography>
              <FT_wget title="Wget/Curl"/>
              <FT_nc title="nc"/>
              <FT_ncat title="Ncat"/>
              <FT_ssh title="SSH"/>
              <FT_Base64 title="Base64"/>
              <FT_Fileless title="Fileless"/>
              <FT_php title="PHP"/>
              <FT_python2 title="Python2"/>
              <FT_python3 title="Python3"/>
              <FT_ruby title="Ruby"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
              Linux to Windows
              </Typography>
              <FT_Bitsadmin title="Bitsadmin"/>
              <FT_Certutil title="Certutil"/>
              <FT_FTP title="FTP"/>
              <FT_Powershell_Download title="PowerShell DownloadFile"/>
              <FT_Powershell_Webrequest title="PowerShell WebRequest"/>
              <FT_Powershell_Base64 title="PowerShell Base64"/>
              <FT_Powershell_Fileless title="PowerShell Fileless"/>
              <FT_SMB title="SMB"/>
              <FT_SMB_Authenticated title="SMB Authenticated"/>
              <FT_xfreerdp title="XFreeRDP"/>
              <FT_Explorer_Error title="Explorer Error"/>
              <FT_SSL_TLS_ERROR title="SSL&TLS Error"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}></Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
              Windows to Linux
              </Typography>
              <FT_FTP_Upload title="FTP"/>
              <FT_Base64_Windows title="Base64"/>
              <FT_SMB_Upload title="SMB"/>
              <FT_SMB_Upload_Blocked title="SMB over HTTP"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default File_Transfer;
  