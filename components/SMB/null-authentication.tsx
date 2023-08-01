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
  
  const SMB_Null_Authentication = ({ title }: IProps) => {

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
              SMB can be configured not to require authentication, which is often called a `null session`. We can login to SMB without a username or password by doing the following:
               </Typography>
               <Box pt={5}></Box>
               <Typography>
              smbclient
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"smbclient -N -L //{IP}"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography>
              smbmap
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"smbmap -H {IP}"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography>
              rpcclient
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'rpcclient -U "" -N {IP}'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography>
              enum4linux
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"enum4linux -a {IP}"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMB_Null_Authentication;
  