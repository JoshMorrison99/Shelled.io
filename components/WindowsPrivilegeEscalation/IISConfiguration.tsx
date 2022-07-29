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

const IISConfiguration = ({ title }: IProps) => {
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
              Internet Information Services (IIS) is the default web server on
              Windows installations. The configuration files are stored in the
              following locations.
            </Typography>
            <ul>
              <li>C:\inetpub\wwwroot\web.config</li>
              <li>
                C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default IISConfiguration;
