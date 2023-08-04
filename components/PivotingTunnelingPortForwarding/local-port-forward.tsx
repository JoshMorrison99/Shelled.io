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
  
  const PIVOT_Local_Port_Forward = ({ title }: IProps) => {

    const step1 = `
    Shelled@htb[/htb]$ nmap -sT -p22,3306 10.129.202.64

    Starting Nmap 7.92 ( https://nmap.org ) at 2022-02-24 12:12 EST
    Nmap scan report for 10.129.202.64
    Host is up (0.12s latency).
    
    PORT     STATE  SERVICE
    22/tcp   open   ssh
    3306/tcp closed mysql
    
    Nmap done: 1 IP address (1 host up) scanned in 0.68 seconds`

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
              Enables us to simulate a remote service by sending traffic on a local port (33306) to a remote port (3306) over SSH.
               </Typography>
               <Box pt={5}></Box>
               <img src="/pivot_1.png" style={{width: "100%", height: "100%"}}/>
               <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 1
                </Typography>
                <Typography>
                We cannot access the MySQL server on the Target Host.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {step1}
              </SyntaxHighlighter>
              <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 2
                </Typography>
                <Typography>
                To access the MySQL service, we can either SSH into the server and access MySQL from inside the Target Host, or we can port forward it to our localhost on port `33306` and access it locally.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"Shelled@htb[/htb]$ ssh -L 33306:localhost:3306 Target@10.129.202.64"}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography>
            The `-L` command tells the SSH client to request the SSH server to forward all the data we send via the port `33306` to `localhost:3306` on the Target Host.
               </Typography>
               <Box pt={5}></Box>
               <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="Note">
              <Box pt={1} />
               <Typography>
               The traffic flow is bidirectional (I would include it in the diagram, but it gets too messy). The command sets up local port forwarding from your local machine to the remote machine at IP address 10.129.202.64. The local port 33306 on your machine is forwarded to `localhost:3306` on the remote machine.
               </Typography>
               <Box pt={2} />
               <Typography>
               When you interact with `localhost:33306` on your local machine, the traffic is encrypted and sent through the SSH tunnel to the remote machine. The remote machine then forwards it to `localhost:3306` on itself. Similarly, if there is any response from the service running on the remote machine's `localhost:3306`, the response is sent back through the SSH tunnel to your local machine.               </Typography>
               <Box pt={2} />
               <Typography>
               So, the localhost (your local machine) knows if the command executed correctly by receiving the responses through the established SSH tunnel. Any response from the remote machine's `localhost:3306` (for example, if you are connecting to a MySQL database on the remote machine) will be sent back to your local machine through the SSH tunnel, allowing you to interact with the service as if it were running directly on your local machine.               </Typography>
               <Box pt={2} />
               <Typography>
               In summary, the traffic is bidirectional in the SSH tunnel established by the command, allowing you to both send requests to the remote service and receive responses from it on your local machine.               </Typography>
              </TreeItem>
            </TreeView>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default PIVOT_Local_Port_Forward;
  