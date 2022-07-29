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

const DirtyPipe = ({ title }: IProps) => {
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
              DirtyPipe (CVE-2022-0847) is a linux kernel vulnerability that can
              be leverage to escalate privileges through arbitrary file
              overwrites at the kernel level.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Requirments</Typography>
            <Typography>
              Linux kernel versions from 5.8 through any version before 5.16.11,
              5.15.25 and 5.10.102.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Copy{" "}
              <a target="_blank" href="https://haxx.in/files/dirtypipez.c">
                CVE-2022-0847.c
              </a>{" "}
              to the machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Compile CVE-2022-0847.c</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"gcc CVE-2022-0847.c -o exploit"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Run the exploit</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"./exploit /bin/su"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DirtyPipe;
