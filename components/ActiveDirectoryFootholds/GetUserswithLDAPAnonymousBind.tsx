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

const GetUserswithLDAPAnonymousBind = ({ title }: IProps) => {
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
              LDAP anonymous binds allow unauthenticated attackers to retrieve
              information from the domain, such as a complete listing of users,
              groups, computers, user account attributes, and the domain
              passwrord policy.
            </Typography>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 1 - ldapsearch</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {
                'ldapsearch -h {IP} -x -b "DC={DC},DC={DC}" -s sub "(&(objectclass=user))"  | grep sAMAccountName: | cut -f2 -d" "'
              }
            </SyntaxHighlighter>
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Option 2 - windapsearch</Typography>
            <SyntaxHighlighter className="syntax" language="bash">
              {'./windapsearch.py --dc-ip {IP} -u "" -U'}
            </SyntaxHighlighter>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default GetUserswithLDAPAnonymousBind;
