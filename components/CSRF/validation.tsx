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
  
  const CSRF_Validation = ({ title }: IProps) => {
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
              Check if the CSRF token is being validated by changing a single character in the cookie. 
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
                "email=test%40test.com&csrf=EFd9BZX3mI6LgxnzJgaa42YMHORbcVBB"}
            </SyntaxHighlighter>
            </Typography>
            <Box pt={5}></Box>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, maxWidth: 400, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="Reports">
                <a href="https://hackerone.com/reports/994504" target="_blank">
                  <TreeItem nodeId="2" label="994504" />
                </a>
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  export default CSRF_Validation;
  