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
  
  const SMTP_QUIT = ({ title }: IProps) => {

    const syntax = `
    QUIT
    221 goodbye
    Connection closed by foreign host.
    `

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
              The SMTP (Simple Mail Transfer Protocol) command "QUIT" is used to terminate an SMTP session gracefully. When a client (email server or client) sends the QUIT command to the SMTP server, it indicates that the client has finished sending email messages and wants to close the connection.
               </Typography>
               <Box pt={5} />
               <SyntaxHighlighter className="syntax" language="bash">
              {syntax}
            </SyntaxHighlighter>
               <Box pt={5} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMTP_QUIT;
  