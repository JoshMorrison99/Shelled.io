import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  title: string;
}

const LLMNR = ({ title }: IProps) => {
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
              Link-Local Multicast Name Resolution (LLMNR) and NetBIOS Name
              Service (NBT-NS) are Microsoft Windows components that serve as
              alternate method of host identification that can be used when DNS
              fails. If a machine attempts to resolve a host but DNS resolution
              fails, typically, the machine will try to ask all other machines
              on the local network for the correct host address via LLMNR. If
              LLMNR fails, the NBT-NS will be used. NBT-NS identifes systems on
              a local network by their NetBIOS name.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              LLMNR/NBT-NS are used for name resolution and any host on the
              network can reply. We can use `Responder` to poison these requests
              to capture the NTLM/NTLMv2 hash of the user/service. We can then
              crack these hashes offline using `hashcat` or `john`.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Example</Typography>
            <Typography>
              Let's walk through a quick example of the attack flow at a very
              high level:
            </Typography>
            <Typography>
              {"   "}1. A host attempts to connect to the print server at
              \\print01.inlanefreight.local, but accidentally types in
              \\printer01.inlanefreight.local.
            </Typography>
            <Typography>
              {"   "}2. The DNS server responds, stating that this host is
              unknown.
            </Typography>
            <Typography>
              {"   "}3. The host then broadcasts out to the entire local network
              asking if anyone knows the location of
              \\printer01.inlanefreight.local.
            </Typography>
            <Typography>
              {"   "}4. The attacker (us with `Responder` running) responds to
              the host stating that it is the \\printer01.inlanefreight.local
              that the host is looking for.
            </Typography>
            <Typography>
              {"   "}5. The host believes this reply and sends an authentication
              request to the attacker with a username and NTLMv2 password hash.
            </Typography>
            <Typography>
              {"   "}6. This hash can then be cracked offline or used in an SMB
              Relay attack if the right conditions exist.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Note</Typography>
            <Typography>
              You can leave responder running in the background as it captures
              hashes. The hashes will be stored in `/usr/share/responder/logs`
              directory.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1 - Linux</Typography>
            <Typography>
              With network access achieved, start responder and wait for hashes.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo Responder -I {INTERFACE}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2 - Linux</Typography>
            <Typography>Crack NTLMv2 hash</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"hashcat -m 5600 {HASH} {WORDLIST}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 12 }} />
            <Typography variant="h6">Step 1 - Windows</Typography>
            <Typography>Get `Inveigh.exe` from here</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/Kevin-Robertson/Inveigh/releases/download/v2.0.9/Inveigh-net6.0-win-x64-trimmed-single-v2.0.9.zip"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2 - Windows</Typography>
            <Typography>
              Transfer `Inveigh.exe` to the Windows machine
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3 - Windows</Typography>
            <Typography>Run PowerShell as Administrator.</Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4 - Windows</Typography>
            <Typography>
              Execute `Inveigh.exe`. `Inveigh.exe` executes with default options
              enabled, so the command below should work fine, but if it doesn't
              then consider using some flags for execution.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {".\\Inveigh.exe"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5 - Windows</Typography>
            <Typography>Crack NTLMv2 hash</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"hashcat -m 5600 {HASH} {WORDLIST}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default LLMNR;
