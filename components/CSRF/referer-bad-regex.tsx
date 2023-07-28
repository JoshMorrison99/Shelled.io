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
  
  const CSRF_Referer_Bad_Regex = ({ title }: IProps) => {

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
              Some applications make use of the HTTP Referer header to attempt to defend against CSRF attacks, normally by verifying that the request originated from the application's own domain. The following are possible mistakes the developers could make by implementing bad regex for the Referer header based CSRF protection.
              </Typography>
              <Box pt={5}></Box>
              <Typography>
              1. Bad Regex: Subdomain
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"https://target.com.shelled.io/change_email"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
              2. Bad Regex: Query Parameter
              </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"https://shelled.io/change_email?target.com"}
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

  
  export default CSRF_Referer_Bad_Regex;
  