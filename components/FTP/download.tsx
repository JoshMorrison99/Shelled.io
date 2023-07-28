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
  
  const FTP_Download = ({ title }: IProps) => {

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
              <Box pt={5}></Box>

              <Typography>
              Download a file from FTP using the following command.
               </Typography>
              <SyntaxHighlighter className="syntax" language="ftp">
              {"get creds.txt"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              There is also the option to download multiple files.
               </Typography>
              <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="ftp">
              {"mget *"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default FTP_Download;
  