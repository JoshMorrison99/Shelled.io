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

const BufferOverflowStep3 = ({ title }: IProps) => {
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
            <Typography variant="h6">Query Offset</Typography>
            <Typography>
              Get the EIP from where the program crashed. The command below will
              tell you exactly where the EIP was overwritten.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"python buff.py --query -q 76413176 "}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Example Output</Typography>
            <Image src="/Step3.png" height={85} width={327} priority={true} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep3;
