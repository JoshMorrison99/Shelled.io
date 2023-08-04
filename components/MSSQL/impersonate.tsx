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
  
  const MSSQL_Impersonate = ({ title }: IProps) => {

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
              SQL Server has a special permission, named IMPERSONATE, that allows the executing user to take on the permissions of another user or login until the context is reset or the session ends.
               </Typography>
               <Box pt={5} />
               <Typography>
              Step 1: Check which users we can impersonate 
               </Typography>
              <SyntaxHighlighter className="syntax" language="sql">
              {"SELECT distinct b.name FROM sys.server_permissions a INNER JOIN sys.server_principals b ON a.grantor_principal_id = b.principal_id WHERE a.permission_name = 'IMPERSONATE'"}
            </SyntaxHighlighter>
            <Box pt={5} />
               <Typography>
              Step 2: Impersonate user
               </Typography>
              <SyntaxHighlighter className="syntax" language="sql">
              {"EXECUTE AS LOGIN = 'josh'"}
            </SyntaxHighlighter>
            <Box pt={5} />
            <Typography>
              Step 3: Verify we are impersonating user
               </Typography>
            <SyntaxHighlighter className="syntax" language="sql">
              {"SELECT SYSTEM_USER"}
            </SyntaxHighlighter>
            <Box pt={5} />
            <Typography>
              Step 4: Check if we have sysadmin privileges (If returned value is 0, then we do not have sysadmin privileges)
               </Typography>
            <SyntaxHighlighter className="syntax" language="sql">
              {"SELECT IS_SRVROLEMEMBER('sysadmin')"}
            </SyntaxHighlighter>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default MSSQL_Impersonate;
  