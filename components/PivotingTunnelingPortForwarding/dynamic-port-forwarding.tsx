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
  
  const PIVOT_Dynamic_Port_Forward = ({ title }: IProps) => {

    const step1 = `
    ubuntu@WEB01:~$ ifconfig 

    ens192: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
            inet 10.10.202.64  netmask 255.255.0.0  broadcast 10.129.255.255
            inet6 dead:beef::250:56ff:feb9:52eb  prefixlen 64  scopeid 0x0<global>
            inet6 fe80::250:56ff:feb9:52eb  prefixlen 64  scopeid 0x20<link>
            ether 00:50:56:b9:52:eb  txqueuelen 1000  (Ethernet)
            RX packets 35571  bytes 177919049 (177.9 MB)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 10452  bytes 1474767 (1.4 MB)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

    ens224: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
            inet 172.16.5.129  netmask 255.255.254.0  broadcast 172.16.5.255
            inet6 fe80::250:56ff:feb9:a9aa  prefixlen 64  scopeid 0x20<link>
            ether 00:50:56:b9:a9:aa  txqueuelen 1000  (Ethernet)
            RX packets 8251  bytes 1125190 (1.1 MB)
            RX errors 0  dropped 40  overruns 0  frame 0
            TX packets 1538  bytes 123584 (123.5 KB)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

    lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
            inet 127.0.0.1  netmask 255.0.0.0
            inet6 ::1  prefixlen 128  scopeid 0x10<host>
            loop  txqueuelen 1000  (Local Loopback)
            RX packets 270  bytes 22432 (22.4 KB)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 270  bytes 22432 (22.4 KB)
            TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0`

    const step2 = `
    Shelled@htb[/htb]$ tail -4 /etc/proxychains.conf

    # meanwile
    # defaults set to "tor"
    socks4 	127.0.0.1 4444`

    const step3 = `
    Shelled@htb[/htb]$ proxychains nmap -v -sn 172.16.5.1-200

    ProxyChains-3.1 (http://proxychains.sf.net)
    
    Starting Nmap 7.92 ( https://nmap.org ) at 2022-02-24 12:30 EST
    Initiating Ping Scan at 12:30
    Scanning 10 hosts [2 ports/host]
    |S-chain|-<>-127.0.0.1:9050-<><>-172.16.5.2:80-<--timeout
    |S-chain|-<>-127.0.0.1:9050-<><>-172.16.5.5:80-<><>-OK
    |S-chain|-<>-127.0.0.1:9050-<><>-172.16.5.6:80-<--timeout
    RTTVAR has grown to over 2.3 seconds, decreasing to 2.0
    
    <SNIP>`

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
              Enables us to simulate a remote host locally by sending traffic on a local port (4444) to a remote host over SSH.
               </Typography>
               <Box pt={5}></Box>
               <img src="/pivot_2.png" style={{width: "100%", height: "100%"}}/>
               <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 0
                </Typography>
                <Typography>
                We have RCE on Target Host (10.10.15.6). This is the Target Host's Network Interface Information.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {step1}
              </SyntaxHighlighter>
              <Box pt={5}></Box>
               <Typography variant="h6">
                    Step 1
                </Typography>
                <Typography>
                We want to do an nmap scan on (172.16.5.129). To do this we need to start an SSH server with dynamic port forwarding enabled.
               </Typography>
              <SyntaxHighlighter className="syntax" language="bash">
              {"Shelled@htb[/htb]$ ssh -D 4444 ubuntu@10.129.202.64"}
            </SyntaxHighlighter>
            
            <Box pt={5}></Box>
            <Typography variant="h6">
                    Step 2
                </Typography>
            <Typography>
            To inform proxychains that we must use port 9050, we must modify the proxychains configuration file located at `/etc/proxychains.conf`. We can add `socks4 127.0.0.1 4444` to the last line if it is not already there.
               </Typography>
               <SyntaxHighlighter className="syntax" language="bash">
              {step2}
            </SyntaxHighlighter>
            <Box pt={5}></Box>
            <Typography variant="h6">
                    Step 3
                </Typography>
               <SyntaxHighlighter className="syntax" language="bash">
              {step3}
            </SyntaxHighlighter>
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
               The traffic flow is bidirectional (I would include it in the diagram, but it gets too messy). The command sets up dynamic port forwarding from your local machine to the remote machine at IP address 10.129.202.64. The local port 4444 on your machine will forward traffic to remote machine 10.129.202.64.
               </Typography>
               <Box pt={2} />
               <Typography>
               When `proxychains nmap -v -sn 172.16.5.1-200` is run, traffic will be sent to `localhost:4444` on your local machine, the traffic is sent trough the SOCKS proxy and then to SSH where it is encrypted and sent to the remote machine. The remote machine then scans itself for open ports. Similarly, if there is any response from the traffic on the remote machine, the response is sent back through the SSH tunnel to your local machine.
               </Typography>
               <Box pt={2} />
               <Typography>
               So, the localhost (your local machine) knows if the command executed correctly by receiving the responses through the established SSH tunnel. Any response from the remote machine for example, if you send ICMP packet to port 3309 on the remote machine) will be sent back to your local machine through the SSH tunnel, allowing you to interact with the service as if it were running directly on your local machine.
               </Typography>
               <Box pt={2} />
               <Typography>
               In summary, the traffic is bidirectional in the SSH tunnel established by the command, allowing you to both send requests to the remote service and receive responses from it on your local machine.
               </Typography>
                </TreeItem>
            </TreeView>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default PIVOT_Dynamic_Port_Forward;
  