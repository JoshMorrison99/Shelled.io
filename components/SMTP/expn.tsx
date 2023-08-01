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
  
  const SMTP_EXPN = ({ title }: IProps) => {

    const expn = `
    Shelled@htb[/htb]$ telnet 10.10.110.20 25

    Trying 10.10.110.20...
    Connected to 10.10.110.20.
    Escape character is '^]'.
    220 parrot ESMTP Postfix (Debian/GNU)


    EXPN john

    250 2.1.0 john@inlanefreight.htb


    EXPN support-team

    250 2.0.0 carol@inlanefreight.htb
    250 2.1.5 elisa@inlanefreight.htb` 

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
              The "EXPN" command was intended to be used to expand mailing lists. When an email server received an "EXPN" command, it would reveal the full list of email addresses belonging to a mailing list or alias. The idea was to allow senders to verify which email addresses were members of a specific list before sending a message.
               </Typography>
               <Box pt={3} />
               <Typography>
               Due to the security concerns and lack of use, modern SMTP servers have generally deprecated or disabled the "EXPN" command, and it's now considered an outdated and unsupported SMTP extension. If you encounter any references to "EXPN" in SMTP, it is essential to be aware of its history and lack of current support.
               </Typography>
               <Box pt={5} />
              <SyntaxHighlighter className="syntax" language="ftp">
              {expn}
            </SyntaxHighlighter>
            <Box pt={5} />
            <Typography variant="h6">
                    Definitions
                </Typography>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="What is a distribution list?">
              <Box pt={1} />
               <Typography>
               A distribution list, also known as a mailing list or email list, is a collection of email addresses grouped together under a single name or alias. When an email is sent to the distribution list's address, the message is automatically forwarded to all the individual email addresses associated with that list. 
               </Typography>
               <Box pt={3} />
               <Typography>
               At work I'm on a team called "rocky" along with 11 other people. Rather than someone having to include all 11 people in an email, they only need to send the email to the "Rocky" Distribution List (DL) in order to send the email to everyone on the "Rocky" team. 
               </Typography>
              </TreeItem>
              <TreeItem nodeId="2" label="What is the 250 code?">
              <Box pt={1} />
               <Typography>
               The "250" status code represents a successful response from the mail server. Specifically, the "250" code represents "Requested action taken and completed."
               </Typography>
              </TreeItem>
              <TreeItem nodeId="3" label="What is the 220 code?">
              <Box pt={1} />
               <Typography>
               The "220" status code represents "SMTP Service ready".
               </Typography>
              </TreeItem>
            </TreeView>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMTP_EXPN;
  