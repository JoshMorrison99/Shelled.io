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

const BloodHoundIngestor = ({ title }: IProps) => {
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
              You can run bloodhound ingestor from your attacking machine and
              have the files available to you right away (rather than extracting
              from Windows machine).
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Download it from https://github.com/fox-it/BloodHound.py or doing
              by using pip.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"pip3 install bloodhound"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "bloodhound-python -u {USER} -p {PASSWORD} -ns {IP} -d {DOMAIN} -c all"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>Example</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "bloodhound-python -u svc-alfresco -p s3rvice -ns 10.10.10.161 -d htb.local -c all"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Start neo4j database.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo neo4j console"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
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

export default BloodHoundIngestor;
