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
  
  const WordPress = ({ title }: IProps) => {
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
                WordPress vulnerabilities are primarily occur due to plugins. It is a good idea how to obtain all the plugins used on a WordPress site. You will also need to know how to perform login bruteforcing and how to obtain a shell from the admin panel. 
              </Typography>
              <Box sx={{ m: 4 }} />
              <Typography variant="h6">Plugin Enumeration - 1</Typography>
              <Typography>
                WPScan is a tool used to enumerate and find vulnerabilities in WordPress. By default, WPScan enumerates vulnerable plugins, themes, users, media, and backups. However, specific arguments can be supplied to restrict enumeration to specific components.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"wpscan --url https://example.com"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
              <Typography variant="h6">Plugin Enumeration - 2</Typography>
              <Typography>
                We can in addition use the command below to extract plugins that are on a WordPress site.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"curl -s -X GET http://example.com | sed 's/href=/\n/g' | sed 's/src=/\n/g' | grep 'wp-content/plugins/*' | cut -d\"'\" -f2"}
            </SyntaxHighlighter>
            <Typography variant="h6">Plugin Enumeration - 3</Typography>
              <Typography>
              We can in addition use the command below to extract plugins that are on a WordPress site.
              </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"ffuf -u https://example.com/FUZZ -w SecLists-master/Discovery/Web-Content/CMS/wp-plugins.fuzz.txt"}
            </SyntaxHighlighter>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  export default WordPress;
  