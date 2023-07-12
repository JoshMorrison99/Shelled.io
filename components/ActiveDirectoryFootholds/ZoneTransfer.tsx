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

const ZoneTransfer = ({ title }: IProps) => {
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
              DNS zone transfer, also sometimes known by the inducing DNS query
              type AXFR, is a type of DNS transaction that replicates DNS
              databases across a set of DNS servers. We can use this DNS
              replication (Zone Transfer) transaction to get more subdomains for
              our target.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"dig axfr @{IP} {DNS_NAME_SERVER}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <Typography>Example</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"dig axfr @10.10.11.166 trick.htb"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ZoneTransfer;
