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
  
  const FTP_Login = ({ title }: IProps) => {

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
              Login to FTP using the following command. You will be prompted to enter a username and password.
               </Typography>
              <SyntaxHighlighter className="syntax" language="text">
              {"ftp {IP}"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default FTP_Login;
  