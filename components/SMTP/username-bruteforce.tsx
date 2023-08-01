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
  
  const SMTP_Username_Bruteforce = ({ title }: IProps) => {

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
              There are multiple tools that can be used to enumerate username of an SMTP server.
               </Typography>
               <Box pt={5}/>
               <Typography>
               smtp-user-enum
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"smtp-user-enum -M RCPT -U users.list -D inlanefreight.htb -t 10.129.68.69"}
            </SyntaxHighlighter>
            <Box pt={2}/>
            <Typography>
               -M is for the "Mode". The options are RCPT, EXPN, or VRFY.
               </Typography>
            <Typography>
               -U is for the list is usernames.
               </Typography>
               <Typography>
               -D is for the domain
               </Typography>
               <Typography>
               -t is for the target
               </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMTP_Username_Bruteforce;
  