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
  
  const No_CSRF_Token = ({ title }: IProps) => {
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
              The most common mistake developers make is not putting a CSRF token. 
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"POST /my-account/change-email HTTP/1.1\n" +
                "Host: target.com\n" +
                "Cookie: session=S97qjrvFPqdndlqAidWFbHCldtb2RFP8;\n" +
                "email=test%40test.com"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <SyntaxHighlighter className="syntax" language="bash">
              {"POST /my-account/change-email HTTP/1.1\n" +
                "Host: target.com\n" +
                "Cookie: session=S97qjrvFPqdndlqAidWFbHCldtb2RFP8;\n" +
                "email=test%40test.com"}
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
                <a href="https://hackerone.com/reports/1629828" target="_blank">
                  <TreeItem nodeId="2" label="1629828" />
                </a>
                <a href="https://hackerone.com/reports/204703" target="_blank">
                  <TreeItem nodeId="3" label="204703" />
                </a>
                <a href="https://hackerone.com/reports/1626356" target="_blank">
                  <TreeItem nodeId="4" label="1626356" />
                </a>
                <a href="https://hackerone.com/reports/1309435" target="_blank">
                  <TreeItem nodeId="5" label="1309435" />
                </a>
                <a href="https://hackerone.com/reports/799855" target="_blank">
                  <TreeItem nodeId="5" label="799855" />
                </a>
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  export default No_CSRF_Token;
  