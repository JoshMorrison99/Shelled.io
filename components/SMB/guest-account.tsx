import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import SyntaxHighlighter from "react-syntax-highlighter";
  import TreeView from '@mui/lab/TreeView';
import { TreeItem } from "@mui/lab";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  
  interface IProps {
    title: string;
  }
  
  const SMB_Guest_Account = ({ title }: IProps) => {

    return (
      <>
        {" "}
        <Accordion sx={{ backgroundColor: "primary.main" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "primary.background_accordian" }}
          >
            <Typography
              sx={{
                color: "primary.main",
              }}
            >
              <Box pt={5} />
              <Typography variant="h6">
                    Description
                </Typography>

              <Typography>
              The SMB guest account is designed to provide public access to certain resources without requiring users to log in with individual credentials. This can be useful for scenarios where read-only access is required for specific folders or files, such as providing public access to shared documents or media files.
               </Typography>
               <Box pt={5}></Box>
               <Typography>
              smbclient
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"smbclient -L //{IP} -U guest"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography>
              smbmap
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"smbmap -H {IP} -u guest -p ''"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography>
              rpcclient
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'rpcclient -U "guest" -N {IP}'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography>
              enum4linux
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"enum4linux -a {IP} -u 'guest' -p ''"}
            </SyntaxHighlighter>
            </Typography>
            <Box pt={5}></Box>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="Is SMB guest user same as null session?">
              <Box pt={1} />
              <Typography>
                No, SMB guest user and null session are not the same, although they are related concepts within the context of SMB (Server Message Block) protocol, which is used for file and printer sharing in Windows-based networks.
               </Typography>
               <Box pt={1} />
              <Typography>
              SMB Guest User:
            The SMB guest user is a default or anonymous user account that allows unauthenticated access to shared resources on a Windows system. When guest access is enabled, users who do not provide valid credentials can access shared folders and files using the guest account. This is useful for providing public access to certain resources without requiring users to log in with individual credentials. However, enabling guest access can also pose security risks, and it is generally recommended to disable it in secure environments.
               </Typography>
               <Box pt={1} />
              <Typography>
              Null Session:
            A null session is a type of network connection to an SMB server that does not provide any authentication or credentials. It allows users to connect to the SMB server with an empty username and password. Historically, null sessions were used for legitimate purposes, such as querying information from the Windows NT/2000 directory service (NetBIOS) for network enumeration and configuration purposes. However, null sessions were found to have severe security implications, and they were largely restricted and disabled in modern Windows operating systems to prevent unauthorized access and information leakage.
               </Typography>
               <Box pt={1} />
              <Typography>
              In summary, while both SMB guest user and null session are mechanisms that provide unauthenticated access to shared resources, they are not exactly the same. The SMB guest user is an account specifically created to allow anonymous access to certain resources, while a null session refers to a network connection that lacks any authentication credentials, making it unauthenticated. However, both SMB guest user and null session can pose security risks if not carefully managed and are generally considered undesirable in secure network environments.
               </Typography>
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMB_Guest_Account;
  