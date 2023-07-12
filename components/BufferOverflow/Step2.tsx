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

const BufferOverflowStep2 = ({ title }: IProps) => {
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
            <Typography variant="h6">Offset</Typography>
            <Typography>
              After running the python script in step 1, you should have an idea
              of where the program crashes at. Use the command below and append
              an additional 400 characters to it.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"python buff.py --offset -d 10.10.253.128 -p 1337 -l 1100"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Example Output</Typography>
            <img src="/Step2.png" height={169} width={1899} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep2;
