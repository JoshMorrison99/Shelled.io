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

const ADM = ({ title }: IProps) => {
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
              The ADM group allows users to read system logs. In Linux, all logs
              are located inside the /var/log folder. A particularly interesting
              log inside the logs folder is the /var/log/audit/audit.log.The
              audit log allows sysadmins to log TTY input. We can search inside
              this log file to try and escalate privileges.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Check if the audit log file is present.</Typography>

            <SyntaxHighlighter className="syntax" language="bash">
              {"cat /var/log/audit/audit.log"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Use the aureport tool to decode the audit.log file
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"aureport --tty"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ADM;
