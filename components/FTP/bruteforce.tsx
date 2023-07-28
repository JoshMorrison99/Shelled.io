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
  
  const FTP_Bruteforce = ({ title }: IProps) => {

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
              Bruteforce FTP using the following command.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"hydra -l root -P /usr/share/wordlists/rockyou.txt {IP} ftp"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default FTP_Bruteforce;
  