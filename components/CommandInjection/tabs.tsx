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
  
  const CI_Tabs = ({ title }: IProps) => {

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
              Command injection space filter bypass with tabs "\t" can be used ONLY on Linux.Command injection space bypass with tabs (%09) is a technique used by attackers to bypass input validation and filtering mechanisms that attempt to block or sanitize space characters in user input. In some cases, spaces are commonly blocked to prevent command injection attacks. However, if the application does not account for other whitespace characters like tabs, an attacker can use tabs (%09) to inject malicious commands.
              </Typography>
              <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="bash">
              {'ping=127.0.0.1;\\twhoami'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="bash">
              {'http://shelled.io?ping=127.0.0.1%0a%09whoami'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            </Typography>
            <Box pt={5}></Box>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, maxWidth: 400, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="Resources">
              <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Command%20Injection" target="_blank">
                  <TreeItem nodeId="2" label="PayloadAllTheThings" />
                </a>
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default CI_Tabs;
  