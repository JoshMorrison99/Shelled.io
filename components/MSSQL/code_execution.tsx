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
              In Microsoft SQL Server, xp_cmdshell is a built-in extended stored procedure that allows executing operating system commands from within SQL Server. This feature is disabled by default, but we can try to enable it and execute commands.
               </Typography>
               <Box pt={5} />
              <SyntaxHighlighter className="syntax" language="bash">
              {"enable_xp_cmdshell"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <SyntaxHighlighter className="syntax" language="bash">
              {'xp_cmdshell "whoami"'}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default MSSQL_Code_Execution;
  