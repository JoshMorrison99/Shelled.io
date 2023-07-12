import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  title: string;
}

const WindowsDeploymentServices = ({ title }: IProps) => {
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
              Windows Deployment Services (WDS) enables you to deploy Windows
              operating systems over the network. When installing Windows on a
              large number of host administrators may use WDS. These types of
              installations are called unuattended installations. The following
              locations may have adminstrator credentials.
            </Typography>
            <ul>
              <li>C:\Unattend.xml</li>
              <li>C:\Windows\Panther\Unattend.xml</li>
              <li>C:\Windows\Panther\Unattend\Unattend.xml</li>
              <li>C:\Windows\system32\sysprep.inf</li>
              <li>C:\Windows\system32\sysprep\sysprep.xml</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default WindowsDeploymentServices;
