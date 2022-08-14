import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

interface IProps {
  title: string;
}

const DockerGroup = ({ title }: IProps) => {
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
            <Typography variant="h6">Requirements</Typography>
            <Typography>
              You must be in the{" "}
              <Typography className="highlight" display="inline">
                docker
              </Typography>{" "}
              group. You can check with the command{" "}
              <Typography className="highlight" display="inline">
                groups
              </Typography>{" "}
              or{" "}
              <Typography className="highlight" display="inline">
                id
              </Typography>
              .
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Description</Typography>
            <Typography>
              We are going to start a new Docker container, and volume mount the
              root directory of our file system to this container.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1</Typography>
            <Typography>
              Mount the file system{" "}
              <Typography className="highlight" display="inline">
                /
              </Typography>{" "}
              to the{" "}
              <Typography className="highlight" display="inline">
                /mnt
              </Typography>{" "}
              directory in the docker container.
            </Typography>
            <SyntaxHighlighter className="highlight" language="bash">
              {"docker run -v /:/mnt --rm -it alpine chroot /mnt sh"}
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2</Typography>
            <Typography>
              We now have{" "}
              <Typography className="highlight" display="inline">
                root
              </Typography>{" "}
              permissions over the file system inside the docker container. To
              esccalate privileges outside the container, we can edit{" "}
              <Typography className="highlight" display="inline">
                /etc/shadow
              </Typography>{" "}
              by removing the root password.
            </Typography>
            <Image src="/docker1.png" width={271} height={44} priority={true} />
            <Image src="/docker2.png" width={260} height={44} priority={true} />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3</Typography>
            <Typography>
              Leave the Docker container and change user to root.
            </Typography>
            <SyntaxHighlighter className="highlight" language="bash">
              {"su - root"}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DockerGroup;
