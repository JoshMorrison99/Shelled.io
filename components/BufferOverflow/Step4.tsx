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

const BufferOverflowStep4 = ({ title }: IProps) => {
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
            <Typography variant="h6">Send Bad Characters</Typography>
            <Typography>
              The command below will send a bytearray to the program, we can
              then use mona.py to determine which characters are bad characters.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"python buff.py --chars -d 10.10.253.128 -p 1337 -o 634"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>
              After sending the payload, check that the EIP register is equal to
              42424242 (all B's). Otherwise your offset value is incorrect.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep4;
