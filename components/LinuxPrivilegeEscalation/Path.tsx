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

const Path = ({ title }: IProps) => {
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
              When a program executes it checks the $PATH directories for the
              location of the executable. We can place our own executable before
              the original executable to escalate privileges.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Say we have a program that uses the executable with the name{" "}
              <Typography className="highlight" display="inline">
                date
              </Typography>{" "}
              located in{" "}
              <Typography className="highlight" display="inline">
                /bin
              </Typography>
              .
            </Typography>
            <img src="/path.png" height={71} width={919} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              We can create our own executate with the name{" "}
              <Typography className="highlight" display="inline">
                date
              </Typography>{" "}
              and place it in front of{" "}
              <Typography className="highlight" display="inline">
                /bin
              </Typography>{" "}
              in $PATH.
              <SyntaxHighlighter className="syntax" language="python">
                {"cd /tmp\n" +
                  'echo "/bin/bash > date"\n' +
                  "chmod 777 date\n" +
                  "export PATH=/tmp:$PATH\n"}
              </SyntaxHighlighter>
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              When the vulnerable program executes, it will search for the{" "}
              <Typography className="highlight" display="inline">
                date
              </Typography>{" "}
              executable and find it located in{" "}
              <Typography className="highlight" display="inline">
                /tmp
              </Typography>{" "}
              first.
            </Typography>
            <img src="/path2.png" height={55} width={942} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Path;
