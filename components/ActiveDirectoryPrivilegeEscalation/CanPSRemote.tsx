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
import Image from "next/image";

interface IProps {
  title: string;
}

const CanPSRemote = ({ title }: IProps) => {
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
              PowerShell Remoting also referred to as PSRemoting or Windows
              Remote Management (WinRM) access allows you to enter an
              interactive session with the target computer. If authenticating as
              a low privilege user, a privilege escalation may allow you to gain
              high privileges on the system.
            </Typography>
            <Image
              src="/canpsremote.png"
              height={132}
              width={488}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Use `evil-winrm` to remote into the computer (you will be prompt
              for a password).
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"evil-winrm -i {IP} -u {USER}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CanPSRemote;
