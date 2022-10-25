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

const SeTakeOwnershipPrivilege = ({ title }: IProps) => {
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
              SeTakeOwnershipPrivilege grants a user the ability to take
              ownership of any "securable object", meaning Active Directory
              object, NTFS file/folders, printers, registry keys, services, and
              processes. For CTF purposes, we can take ownership of
              `C:\Users\Administrator\Desktop\flag.txt` to read the flag.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Use the `takeown` command to take ownership of a file you want to
              read.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"takeown /f 'C:\\Users\\Administrator\\Desktop\\flag.txt'"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              We may not be able to read the file even when we own it. We will
              need to modify the file ACL using the `icacls` command.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                "icacls 'C:\\Users\\Administrator\\Desktop\\flag.txt' /grant {USER}:F"
              }
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SeTakeOwnershipPrivilege;
