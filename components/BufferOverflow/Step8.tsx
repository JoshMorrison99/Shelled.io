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

const BufferOverflowStep8 = ({ title }: IProps) => {
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
            <Typography>
              Within Immunity Debugger, set the working directory of mona:
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"!mona config -set workingfolder c:\\mona\\%p"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography>Generate a bytearray:</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'!mona bytearray -b "\\x00"'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography>Check for bad characters:</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "!mona compare -f C:\\mona\\oscp\\bytearray.bin -a <ESP address>"
              }
            </SyntaxHighlighter>
            <Image src="/Step8.png" width={634} height={191} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep8;
