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
  
  const AWS_Cognito_Misconfigured_Registration_1 = ({ title }: IProps) => {

    const syntax_12 = `
    POST / HTTP/2
    Host: cognito-idp.us-east-1.amazonaws.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
    Accept: */*
    Accept-Language: en-CA,en-US;q=0.7,en;q=0.3
    Accept-Encoding: gzip, deflate
    Referer: http://localhost:3000/
    Content-Type: application/x-amz-json-1.1
    X-Amz-Target: AWSCognitoIdentityProviderService.SignUp
    X-Amz-User-Agent: aws-amplify/5.0.4
    Cache-Control: no-store
    Content-Length: 167
    Origin: http://localhost:3000
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: cross-site
    Te: trailers
    
    {
        "ClientId": "5015ncg0dvmsd4vbmskke3j1tv",
        "Username": "test2",
        "Password": "Password123!",
        "UserAttributes": [
            {
                "Name": "email",
                "Value": "test2@gmail.com"
            }
        ],
        "ValidationData": null
    }`

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
                    Sometimes you may run into an application that has a signup page, but no user registration. A developer may create a website with only a sign-in page for authorized users and not realize that users can register through the Cognito API.
                    </Typography>
                    <Box mt={5}/>
                    <Typography variant="h6">
                    Step 1: Fingerprinting Cognito User Pools
                </Typography>
                    <Typography>
                    You can try to sign-in with random credentials and check if AWS Cognito User Pools is being used by checking if a request is being made to <Typography sx={{fontWeight: 'bold'}}>https://cognito-idp.us-east-1.amazonaws.com</Typography>.
                    </Typography>
                    <img src="/aws_cognito_p3_10.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography variant="h6">
                    Step 2: Getting the ClientId
                </Typography>
                    <Typography>
                    The ClientId is a unique identifier used to tell AWS which cognito application we want to use. The ClientId can be found in the Sign-In request made previously or the source code.
                    </Typography>
                    <Box mt={5}/>
                    <Typography sx={{fontStyle: 'italic' }}>
                    Request
                    </Typography>
                    <img src="/aws_cognito_p3_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography sx={{fontStyle: 'italic' }}>
                    Source Code
                    </Typography>
                    <img src="/aws_cognito_p3_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography variant="h6">
                    Step 3: Sending the Registration Request
                </Typography>
                    <Typography>
                    We can send the registration request to <Box sx={{fontWeight: 'bold', display: 'inline'}}>https://cognito-idp.us-east-1.amazonaws.com</Box> using the <Box sx={{fontWeight: 'bold', display: 'inline'}}>X-Amz-Target: AWSCognitoIdentityProviderService.SignUp</Box> header.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_12}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    If the website only contains a sign-in page and the developer doesn't intend for a normal user to be able to register, then this is a vulnerability.
                    </Typography>
            </Typography>
            <Box pt={5}></Box>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "fit-content", flexGrow: 1, maxWidth: 400, overflowY: 'auto', color: '#000000' }}
            >
              <TreeItem nodeId="1" label="Resources">
              <a href="https://www.youtube.com/watch?v=TuiDJ5Ii6MU&ab_channel=NahamSec" target="_blank">
                  <TreeItem nodeId="2" label="YouTube" />
                </a>
                
              </TreeItem>
            </TreeView>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  
  export default AWS_Cognito_Misconfigured_Registration_1;
  