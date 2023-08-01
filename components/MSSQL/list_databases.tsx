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
  
  const MSSQL_List_Databases = ({ title }: IProps) => {

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
              To list databases in MSSQL.
               </Typography>
               <Box pt={5} />
              <SyntaxHighlighter className="syntax" language="ftp">
              {"SELECT name FROM master.dbo.sysdatabases"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>

              <Typography>
              Using mssqlclient.py
               </Typography>
              <SyntaxHighlighter className="syntax" language="ftp">
              {"enum_db"}
            </SyntaxHighlighter>
            </Typography>
            <Box pt={5}></Box>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default MSSQL_List_Databases;
  