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

const MozillaComponent = ({ title }: IProps) => {
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
              In Linux the main Firefox profile folder that stores personal data
              is in the hidden `~/.mozilla/firefox` folder.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              In Linux the main Firefox profile folder that stores personal data
              is in the hidden `~/.mozilla/firefox` folder.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>zip the `.mozilla` folder</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"zip /tmp/browser.zip ~/.mozilla -r"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Copy the `browser.zip` folder to your attacker machine.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>Unzip `browser.zip`</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"unzip browser.zip"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              There will be a few folders in the `.mozilla` folder. Locate the
              folder that has `logins.json`.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 6</Typography>
            <Typography>Clone this repository</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"git clone https://github.com/unode/firefox_decrypt"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 7</Typography>
            <Typography>
              Check if the `.mozilla/profiles.ini` file has a `Profile Path=STEP
              5 Folder`. If it does not, copy and paste the folder name from
              step 5.
            </Typography>
            <Typography>Before</Typography>
            <Image
              src="/mozilla1.png"
              height={362}
              width={503}
              priority={true}
            />
            <Typography>After</Typography>
            <Image
              src="/mozilla2.png"
              height={369}
              width={496}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 8</Typography>
            <Typography>
              Use `firefox_decrypt.py` to decrypt the password
            </Typography>
            <Typography>Note: Python3.9+ is required</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"python3 firefox_decrypt.py {/folder/containing/profiles.ini}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MozillaComponent;
