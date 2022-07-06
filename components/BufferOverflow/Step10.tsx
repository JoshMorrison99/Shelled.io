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

const BufferOverflowStep10 = ({ title }: IProps) => {
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
              Create a 5-exploit.py script by copying 4-badchars.py. Choose one
              of the addresses from the result and put it in the `retn` value in
              the exploit script. Note: You will need to write the address
              backwards since the system is little endian.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography>
              Address:{" "}
              <Typography className="highlight" display="inline">
                0x625011af
              </Typography>
              {"-->"}
              <Typography className="highlight" display="inline">
                \x62\x50\x11\xaf
              </Typography>
            </Typography>
            <Typography>
              retn:{" "}
              <Typography className="highlight" display="inline">
                \xaf\x11\x50\x62
              </Typography>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography>Example</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'retn = "\\xaf\\x11\\x50\\x62"'}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep10;
