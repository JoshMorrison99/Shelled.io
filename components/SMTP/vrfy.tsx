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
  
  const SMTP_VRFY = ({ title }: IProps) => {

    const expn = `
    Shelled@htb[/htb]$ telnet 10.10.110.20 25

    Trying 10.10.110.20...
    Connected to 10.10.110.20.
    Escape character is '^]'.
    220 parrot ESMTP Postfix (Debian/GNU)


    VRFY root

    252 2.0.0 root


    VRFY www-data

    252 2.0.0 www-data


    VRFY new-user

    550 5.1.1 <new-user>: Recipient address rejected: User unknown in local recipient table` 

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
              The "VRFY" command is used to verify the existence of an email address on the receiving mail server. When an SMTP client issues the "VRFY" command followed by an email address, the server responds with information about the validity of that address.
               </Typography>
               <Box pt={3} />
               <Typography>
               The "VRFY" command is often disabled or restricted on modern SMTP servers due to security and privacy concerns. In the past, it was a common target for email address harvesting by spammers, who used it to gather valid email addresses. To prevent abuse and protect user privacy, many SMTP servers now either disable or limit the functionality of the "VRFY" command. As a result, the "VRFY" command is rarely used in practice today.
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
              <TreeItem nodeId="1" label="What is the 550 code?">
              <Box pt={1} />
               <Typography>
               The "550" status code represents that the email address is invalid or not found. The server rejects the "VRFY" command and indicates that the email address does not exist on the system or is not accepted.
               </Typography>
              </TreeItem>
              <TreeItem nodeId="2" label="What is the 252 code?">
              <Box pt={1} />
               <Typography>
               The "252" status code represents that the email address is valid but cannot be verified. The server may not be able to confirm the existence of the email address but still acknowledges its syntax as valid.
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

  
  export default SMTP_VRFY;
  