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
  
  const LFI_2_RCE_PHP_Sessions = ({ title }: IProps) => {

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
              <Typography>
              Most PHP web applications utilize PHPSESSID cookies, which can hold specific user-related data on the back-end, so the web application can keep track of user details through their cookies. These details are stored in session files on the back-end, and saved in /var/lib/php/sessions/ on Linux and in C:\Windows\Temp\ on Windows. The sessions are stored into /var/lib/php5/sess_[PHPSESSID] or /var/lib/php/sessions/sess_[PHPSESSID] files.
              </Typography>
            <Box pt={5}></Box>
            <Typography>
            We can request our PHP_SESSID cookie in the LFI to check if the cookie contains any varaibles that can be poisoned.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'http://<SERVER_IP>:<PORT>/index.php?language=/var/lib/php/sessions/sess_nhhv8i0o6ua4g88bkdl9u1fdsd'}
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
              <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/File%20Inclusion/README.md#lfi-to-rce-via-php-sessions" target="_blank">
                  <TreeItem nodeId="2" label="PayloadAllTheThings" />
                </a>
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default LFI_2_RCE_PHP_Sessions;
  