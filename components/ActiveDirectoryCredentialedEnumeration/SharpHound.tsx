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

const SharpHound = ({ title }: IProps) => {
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
              SharpHound is a Windows tool used to collect data from Active
              Directory to be used in BloodHound (My prefered method is to use
              the BloodHound Ingestor since you don't need to transfer files
              after the data collection process, but SharpHound is useful as
              well).
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Download and transfer SharpHound.exe to the victim machine.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "wget https://github.com/BloodHoundAD/SharpHound/releases/download/v1.1.0/SharpHound-v1.1.0.zip"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"unzip SharpHound-v1.1.0.zip"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Use SharpHound to collect data from Active Directory.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {".\\SharpHound.exe -c All --zipfilename {NAME_OF_ZIP}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Transfer the zip file back to your attacker machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Start neo4j database.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo neo4j console"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Start bloodhound and import the data from the bloodhound GUI.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"bloodhound"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SharpHound;
