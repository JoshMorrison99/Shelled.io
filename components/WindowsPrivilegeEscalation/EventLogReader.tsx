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

const EventLogReader = ({ title }: IProps) => {
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
              Members of this group can read event logs from local computers. We
              can use this privilege to read the Security log and search for
              passwords.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 1</Typography>
            <Typography>Search security logs using wevutil</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'wevtutil qe Security /rd:true /f:text | Select-String "/user"'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 2</Typography>
            <Typography>
              Search security logs using Get-WinEvent. Note: Searching the
              `Security` event log with `Get-WInEvent` requires administrator
              access or permissions adjusted on the registry key
              `HKLM\System\CurrentControlSet\Services\Eventlog\Security`.
              Membership in just the `Event Log Readers` group is not
              sufficient.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Get-WinEvent -LogName security | where { $_.ID -eq 4688 -and $_.Properties[8].Value -like '*/user*'} | Select-Object @{name='CommandLine';expression={ $_.Properties[8].Value }}"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default EventLogReader;
