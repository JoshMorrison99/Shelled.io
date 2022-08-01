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
              We can enumerate usernames with the tool Kerbrute. It is helpful
              to generate a wordlist from usernames on the website and then
              create permutations on those names with my tool{" "}
              <a href="https://github.com/JoshMorrison99/UsernamePermutations">
                UserPerm
              </a>
              .
            </Typography>

            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Usage</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"kerbrute userenum -d <DOMAIN> domain_users.txt -dc <IP>"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BruteForce;
