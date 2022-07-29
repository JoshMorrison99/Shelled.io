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

const Pwnkit = ({ title }: IProps) => {
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
              Pwnkit (CVE-2021-4034) is a Local Privilege Escalation
              vulnerability, located in the Polkit's (PolicyKit) pkexec
              component installed by default on almost every major distribution
              of the Linux operating system.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Copy{" "}
              <a
                target="_blank"
                href="https://github.com/arthepsy/CVE-2021-4034"
              >
                cve-2021-4034-poc.c
              </a>{" "}
              to machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Compile cve-2021-4034-poc.c</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"gcc cve-2021-4034-poc.c -o exploit"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Run the exploit</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"./exploit"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Pwnkit;
