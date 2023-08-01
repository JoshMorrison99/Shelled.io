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
  
  const MSSQL_Connect = ({ title }: IProps) => {

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
              To connect to MSSQL from Linux host.
               </Typography>
               <Box pt={5} />
              <SyntaxHighlighter className="syntax" language="bash">
              {"mssqlclient.py {DOMAIN}/{USER}:{PASSWORD}@{IP}"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <SyntaxHighlighter className="syntax" language="bash">
              {"mssqlclient.py {DOMAIN}/{USER}:{PASSWORD}@{IP} -windows-auth"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default MSSQL_Connect;
  