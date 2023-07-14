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
  
  const CSRF_Exists_Parameter = ({ title }: IProps) => {
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
              <Typography>
              Check if the CSRF token is being checked if there is no CSRF value. 
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"POST /my-account/change-email HTTP/1.1\n" +
                "Host: target.com\n" +
                "Cookie: session=S97qjrvFPqdndlqAidWFbHCldtb2RFP8;\n" +
                "email=test%40test.com&csrf=EFd9BZX3mI6LgxnzJgaa42YMHORbcVBA"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <SyntaxHighlighter className="syntax" language="bash">
              {"POST /my-account/change-email HTTP/1.1\n" +
                "Host: target.com\n" +
                "Cookie: session=S97qjrvFPqdndlqAidWFbHCldtb2RFP8;\n" +
                "email=test%40test.com"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  export default CSRF_Exists_Parameter;
  