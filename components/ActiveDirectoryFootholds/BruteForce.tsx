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

const BruteForce = ({ title }: IProps) => {
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
              We can bruteforce usernames with the tool Kerbrute. Kerbrute uses
              Kerberos Pre-Authentication, which is much faster and potentially
              stealthier way to perform password spraying/user enumeration. The
              tool sends TGT requests to the domain controller without Kerberos
              Pre-Authentication to perform username enumeration. If the KDC
              responds with the error PRINCIPAL UNKNOWN, the username is
              invalid.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography>
              1) Use a large wordlist of common AD names{" "}
              <a href="https://github.com/insidetrust/statistically-likely-usernames/blob/master/jsmith.txt">
                here
              </a>
              , and use Kerbute to bruteforce those names.
            </Typography>
            <Typography>
              2) Look through the website for company employees listed on the
              website, then use a{" "}
              <a href="https://github.com/JoshMorrison99/UsernamePermutations">
                tool
              </a>{" "}
              to create permutations of the name. Then use Kerbrute to
              bruteforce those names.
            </Typography>
            <Typography>
              3) Create a wordlist with the tool CEWL for to extract common
              words on a company website, then use Kerbrute to bruteforce those
              words.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Usage</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"kerbrute userenum -d <DOMAIN> {USERNAMES.txt} --dc <IP>"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BruteForce;
