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
  
  const SMTP_NOOP = ({ title }: IProps) => {

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
              The SMTP (Simple Mail Transfer Protocol) command "NOOP" stands for "No Operation." It is a command used to perform a null operation, meaning it doesn't have any real functionality other than keeping the connection alive and checking if the server is still responding.
               </Typography>
               <Box pt={3} />
               <Typography>
               The primary purpose of the NOOP command is to serve as a kind of "ping" or "heartbeat" between the client (email server or client) and the server (email server) during an SMTP session. When a client sends the NOOP command, the server will respond with a success code (usually 250 OK) to indicate that it has received the command successfully.
               </Typography>
               <Box pt={5} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMTP_NOOP;
  