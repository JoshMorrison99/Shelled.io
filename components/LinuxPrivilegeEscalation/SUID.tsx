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

const SUID = ({ title }: IProps) => {
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
              Set-User Identifier (SUID) allows a user to execute a program with
              the permissions of the file owner.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Find all SUID Files</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"find / -type f -perm -04000 -ls 2>/dev/null"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Exploit</Typography>
            <Typography>
              If the SUID bit is set, use{" "}
              <Link target="_blank" href="https://gtfobins.github.io">
                https://gtfobins.github.io
              </Link>{" "}
              to escalate privileges.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SUID;
