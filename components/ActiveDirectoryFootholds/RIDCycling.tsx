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

const RIDCycling = ({ title }: IProps) => {
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
              We need read access to IPC$ share in order to enumerate users.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              The IPC$ share is also known as a null session connection. By
              using this session, Windows lets anonymous users perform certain
              activities, such as enumerating the names of domain accounts and
              network shares.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"lookupsid.py {USERNAME}@{IP} | grep SidTypeUser"}
            </SyntaxHighlighter>
            <Image src="/rid.png" width={596} height={198} priority={true} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default RIDCycling;
