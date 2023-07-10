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

const CVE_2017_7269 = ({ title }: IProps) => {
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
              Must be Windows Server 2003 (IIS 6.0) with WebDAV PROPFIND
              available.
            </Typography>
            <Image src="/cve_2017_7269.png" width={1030} height={317} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              This is a buffer overflow vulnerability affecting Windows Server
              2003 and IIS version 6. The buffer overflow is exploited by using
              an overly large "IF" header in the "PROPFIND" request.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Exploit</Typography>
            <Typography>
              Use this exploit script{" "}
              <Link
                target="_blank"
                href="https://github.com/g0rx/iis6-exploit-2017-CVE-2017-7269"
              >
                https://github.com/g0rx/iis6-exploit-2017-CVE-2017-7269
              </Link>{" "}
              to get initial access.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CVE_2017_7269;
