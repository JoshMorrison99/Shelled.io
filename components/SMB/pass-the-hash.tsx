import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import SyntaxHighlighter from "react-syntax-highlighter";
  import TreeView from '@mui/lab/TreeView';
import { TreeItem } from "@mui/lab";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  
  interface IProps {
    title: string;
  }
  
  const SMB_Pass_The_Hash = ({ title }: IProps) => {

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
              <Box pt={5} />
              <Typography variant="h6">
                    Description
                </Typography>

              <Typography>
              If we manage to get an NTLM hash of a user, and if we cannot crack it, we can still use the hash to authenticate over SMB with a technique called Pass-the-Hash (PtH). When users log in to a Windows-based system, their passwords are not stored in plaintext. Instead, the system stores a one-way mathematical representation of the password called a hash. The hash is generated from the user's password using a hashing algorithm. This hash is what is used to validate the user's credentials when they attempt to log in.
              </Typography>
              <Box pt={3} />
              <Typography>
              In a Pass-the-Hash attack, an attacker captures the hashed password of a valid user from a compromised system or network. Instead of attempting to crack the hash and retrieve the plaintext password, the attacker simply reuses the captured hash directly to authenticate themselves on other systems without needing to know the original password.
               </Typography>
               <Box pt={5}></Box>
              <SyntaxHighlighter className="syntax" language="bash">
              {"crackmapexec smb {IP} -u Administrator -H {HASH}"}
            </SyntaxHighlighter>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default SMB_Pass_The_Hash;
  