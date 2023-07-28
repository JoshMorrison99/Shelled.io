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
  
  const FT_ncat = ({ title }: IProps) => {

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
              The computer networking utility tool Netcat (often abbreviated to nc) was released in 1995 and hasn't been maintained despite its popularity. The flexibility and usefulness of this tool prompted the Nmap Project to produce Ncat, a modern reimplementation that supports SSL, IPv6, SOCKS and HTTP proxies, connection brokering, and more.
              </Typography>
              <Box pt={5}></Box>
              <Typography>
              In this example, we'll transfer `LinEnum.sh` from our attacker machine to the victim machine
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Machine 1
              </Typography>
              <Typography>
              The `--recv-only` flag is used to close the connection once the file transfer is finished.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'ncat -l -p 8000 --recv-only > LinEnum.sh'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2 - Machine 2
              </Typography>
              <Typography>
              The `--send-only` flag is used to cause Ncat to quit when its input runs out.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"ncat --send-only {IP} 8000 < LinEnum.sh"}
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
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default FT_ncat;
  