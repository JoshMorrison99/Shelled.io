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
  
  const SMTP_RCPT_TO = ({ title }: IProps) => {

    const rcpt = `
    Shelled@htb[/htb]$ telnet 10.10.110.20 25

    Trying 10.10.110.20...
    Connected to 10.10.110.20.
    Escape character is '^]'.
    220 parrot ESMTP Postfix (Debian/GNU)


    MAIL FROM:test@htb.com
    it is
    250 2.1.0 test@htb.com... Sender ok


    RCPT TO:julio

    550 5.1.1 julio... User unknown


    RCPT TO:kate

    550 5.1.1 kate... User unknown


    RCPT TO:john

    250 2.1.5 john... Recipient ok` 

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
              The "RCPT TO" command is used to specify the email address of the recipient(s) (also known as the envelope recipient(s) or forward path). This command tells the receiving mail server who should receive the email. The "RCPT TO" command can be used multiple times to specify multiple recipients. Note that some mail servers may want the email to be encased in angle brackets: RCPT TO:&lt;josh@shelled.io&gt; 
               </Typography>
               <Box pt={5} />
              <SyntaxHighlighter className="syntax" language="ftp">
              {rcpt}
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
              <TreeItem nodeId="1" label="What is the 550 code?">
              <Box pt={1} />
              <Typography>
               The "550" status code represents that the email address is invalid or not found. The server rejects the "VRFY" command and indicates that the email address does not exist on the system or is not accepted.
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
              <TreeItem nodeId="4" label="What is the MAIL FROM: ?">
              <Box pt={1} />
               <Typography>
               The "MAIL FROM" command is used to specify the email address of the sender (also known as the envelope sender or return path). This command informs the receiving mail server who is responsible for sending the email. Note that some mail servers may want the email to be encased in angle brackets: MAIL FROM:&lt;josh@shelled.io&gt; 
               </Typography>
              </TreeItem>
            </TreeView>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMTP_RCPT_TO;
  