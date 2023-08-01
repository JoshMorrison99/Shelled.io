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
  
  const SMTP_HELO = ({ title }: IProps) => {

    const helo = `
    Shelled@htb[/htb]$ telnet 10.129.211.225 25
    Trying 10.129.211.225...
    Connected to 10.129.211.225.
    Escape character is '^]'.
    220 WIN-02 ESMTP
    HELO x 
    250 Hello.
    ` 

    const helo_with = `
    Shelled@htb[/htb]$ telnet 10.129.211.225 25
    Trying 10.129.211.225...
    Connected to 10.129.211.225.
    Escape character is '^]'.
    220 WIN-02 ESMTP
    HELO x 
    250 Hello.
    VRFY root
    502 VRFY disallowed.
    ` 

    const helo_without = `
    Shelled@htb[/htb]$ telnet 10.129.211.225 25
    Trying 10.129.211.225...
    Connected to 10.129.211.225.
    Escape character is '^]'.
    220 WIN-02 ESMTP
    VRFY root
    503 Bad sequence of commands
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
              The SMTP (Simple Mail Transfer Protocol) HELO request is part of the SMTP protocol used for sending email messages. When a client (usually an email server) initiates a connection to another email server to deliver an email, the first step is the greeting phase. During this phase, the client sends a HELO (or EHLO) command to the receiving server.
               </Typography>
               <Box pt={3} />
               <Typography>
               It's important to note that some servers use the EHLO command instead of HELO. EHLO is an extended version of HELO and provides additional capabilities, such as supporting SMTP extensions like STARTTLS and authentication mechanisms. The usage of HELO or EHLO depends on the server's capabilities and the specific SMTP conversation between the client and server.
               </Typography>
               <Box pt={5} />
              <SyntaxHighlighter className="syntax" language="ftp">
              {helo}
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
              <TreeItem nodeId="1" label="Do I need to send a HELO/EHLO request?">
              <Box pt={1} />
               <Typography>
               Yes, if you are sending an email through an SMTP server, you need to initiate the SMTP connection by sending a HELO or EHLO request. The HELO/EHLO command is the first step in the SMTP protocol for establishing communication between the client (your email server or email client) and the receiving email server.
               </Typography>
               <Box pt={3} />
               <Typography>
              Without HELO Request
               </Typography>
               <SyntaxHighlighter className="syntax" language="ftp">
              {helo_without}
            </SyntaxHighlighter>
            <Box pt={3} />
            <Typography>
              With HELO Request
               </Typography>
            <SyntaxHighlighter className="syntax" language="ftp">
              {helo_with}
            </SyntaxHighlighter>
              </TreeItem>
            </TreeView>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMTP_HELO;
  