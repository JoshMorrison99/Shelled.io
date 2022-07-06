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

const BufferOverflowStep9 = ({ title }: IProps) => {
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
              With the list of bad characters identified, use mona command:
              Appending the bad characters to the command. Note: The command
              shouldn't have any spaces separating the bad characters.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'!mona jmp -r esp -cpb "\\x00........."'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography>Example</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'!mona jmp -r esp -cpb "\\x00\\x07\\x08\\x2e\\x2f\\xa0\\xa1"'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography>
              Note: Sometimes badchars cause the next byte to get corrupted as
              well, or even the rest of the string. If the command above returns
              zero results, try removing the additional bytes that could have
              been corrupted.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography>
              Original:{" "}
              <Typography className="highlight" display="inline">
                \x00\x07\x08\x2e\x2f\xa0\xa1
              </Typography>
            </Typography>
            <Typography>
              Modified:{" "}
              <Typography className="highlight" display="inline">
                \x00\x07\x2e\xa0
              </Typography>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography>
              The result displays all the `jmp esp` instructions with addresses
              that don't contain any of the bad characters.
            </Typography>
            <Image src="/Step9.png" height={116} width={207} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep9;
