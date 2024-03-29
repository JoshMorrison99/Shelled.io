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

const GetUserswithSMBNullSession = ({ title }: IProps) => {
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
              SMB NULL sessions allow an unauthenticated attacker to retrieve
              information from the domain, such as a complete listing of users,
              groups, computers, user account attributes, and the domain
              password policy.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 1 - enum4linux</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'enum4linux -U {IP}  | grep "user:" | cut -f2 -d"[" | cut -f1 -d"]"'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 2 - rpcclient</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'rpcclient -U "" -N {IP}'}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"rpcclient $> enumdomusers "}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 3 - CrackMapExec</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"crackmapexec smb {IP} --users"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default GetUserswithSMBNullSession;
