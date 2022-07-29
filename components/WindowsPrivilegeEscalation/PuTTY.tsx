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

const PuTTY = ({ title }: IProps) => {
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
              PuTTY is an SSH client commonly found on Windows systems. You can
              get PuTTY proxy configurations as follows.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Find all SUID Files</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'reg query HKEY_CURRENT_USER\\Software\\SimonTatham\\PuTTY\\Sessions /f "Proxy" /s'
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PuTTY;
