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
  
  const CSRF_SameSite = ({ title }: IProps) => {
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
              The first thing to check in a CSRF attack is the security headers on the session cookie.
              </Typography>
              <ul>
                <li>SameSite=Strict - CSRF Not Possible</li>
                <li>SameSite=LAX - CSRF Only Possible on GET Request</li>
                <li>SameSite=NONE - CSRF Possible</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  export default CSRF_SameSite;
  