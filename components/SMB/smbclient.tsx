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
  
  const SMB_Connect_Commands = ({ title }: IProps) => {

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
              <Box pt={5} />
              <Typography variant="h6">
                    Description
                </Typography>

              <Typography>
              Here are a few commands to use when connected to a share using smbclient.
               </Typography>
               <Box pt={5}></Box>
            <Typography>
              List files on share
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"ls"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              Go into a Folder
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"cd <folder>"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              Create a folder
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"mkdir <folder>"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              Download a file
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"get <file>"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              Upload a file
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"put <local_filename> <remote_filename>"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              Rename a file
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"rename <remote_filename> <new_remote_filename>"}
            </SyntaxHighlighter>
            </Typography>
            
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMB_Connect_Commands;
  