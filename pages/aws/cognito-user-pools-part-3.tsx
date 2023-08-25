import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const AWS_Cognito_User_Pools = () => {

    const syntax_1 = `
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
    Content-Length: 170
    Origin: http://localhost:3000
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: cross-site
    Te: trailers
    
    {
       "ClientId":"5015ncg0dvmsd4vbmskke3j1tv",
       "Username":"blog3",
       "Password":"Password123!",
       "UserAttributes":[
          {
             "Name":"email",
             "Value":"blog3@gmail.com"
          }
       ],
       "ValidationData":null
    }`

    const syntax_2 = `
    HTTP/2 200 OK
    Date: Fri, 11 Aug 2023 15:42:26 GMT
    Content-Type: application/x-amz-json-1.1
    Content-Length: 171
    X-Amzn-Requestid: 856f45be-2071-4172-973a-4d4a5dbd0cc3
    Access-Control-Allow-Origin: *
    Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
    
    {
       "CodeDeliveryDetails":{
          "AttributeName":"email",
          "DeliveryMedium":"EMAIL",
          "Destination":"b***@g***"
       },
       "UserConfirmed":false,
       "UserSub":"744bf586-7150-4358-8789-b2dd78711992"
    }`

    const syntax_3 = `
    POST / HTTP/2
    Host: cognito-idp.us-east-1.amazonaws.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
    Accept: */*
    Accept-Language: en-CA,en-US;q=0.7,en;q=0.3
    Accept-Encoding: gzip, deflate
    Referer: http://localhost:3000/
    Content-Type: application/x-amz-json-1.1
    X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth
    X-Amz-User-Agent: aws-amplify/5.0.4
    Cache-Control: no-store
    Content-Length: 905
    Origin: http://localhost:3000
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: cross-site
    Te: trailers
    
    {
       "AuthFlow":"USER_SRP_AUTH",
       "ClientId":"5015ncg0dvmsd4vbmskke3j1tv",
       "AuthParameters":{
          "USERNAME":"blog3",
          "SRP_A":"33da4bda25315637dfce27197eb0dafb0f675dcf6080bb1cd7637..."
       },
       "ClientMetadata":{
          
       }
    }`

    const syntax_4 = `
    HTTP/2 200 OK
    Date: Fri, 11 Aug 2023 15:50:09 GMT
    Content-Type: application/x-amz-json-1.1
    Content-Length: 2669
    X-Amzn-Requestid: 05fa8413-3ff7-430e-8f64-80cd12e8f060
    Access-Control-Allow-Origin: *
    Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
    
    {
       "ChallengeName":"PASSWORD_VERIFIER",
       "ChallengeParameters":{
          "SALT":"a244c038c0fd9192b9b5538344ce41ab",
          "SECRET_BLOCK":"ddqj1sPwTQ1+LgmMZwxPpXw8j8jZFKxDOrn59/6rePYJ...",
          "SRP_B":"91831863caaaf307a7e353baec20fcee53aa3d7444f4b8...",
          "USERNAME":"blog3",
          "USER_ID_FOR_SRP":"blog3"
       }
    }`

    const syntax_5 = `
    POST / HTTP/2
    Host: cognito-idp.us-east-1.amazonaws.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
    Accept: */*
    Accept-Language: en-CA,en-US;q=0.7,en;q=0.3
    Accept-Encoding: gzip, deflate
    Referer: http://localhost:3000/
    Content-Type: application/x-amz-json-1.1
    X-Amz-Target: AWSCognitoIdentityProviderService.RespondToAuthChallenge
    X-Amz-User-Agent: aws-amplify/5.0.4
    Cache-Control: no-store
    Content-Length: 2013
    Origin: http://localhost:3000
    Sec-Fetch-Dest: empty
    Sec-Fetch-Mode: cors
    Sec-Fetch-Site: cross-site
    Te: trailers
    
    {
       "ChallengeName":"PASSWORD_VERIFIER",
       "ClientId":"5015ncg0dvmsd4vbmskke3j1tv",
       "ChallengeResponses":{
          "USERNAME":"blog3",
          "PASSWORD_CLAIM_SECRET_BLOCK":"ddqj1sPwTQ1+LgmMZwxPpXw8j8jZFKxDOrn59/6rePYJ9po...",
          "TIMESTAMP":"Fri Aug 11 15:51:06 UTC 2023",
          "PASSWORD_CLAIM_SIGNATURE":"mPQxdzZFgcOnMJSnMyssX9SCjQy6V+o4zjMClFFjYNg="
       },
       "ClientMetadata":{
          
       }
    }`

    const syntax_6 = `
    HTTP/2 200 OK
    Date: Fri, 11 Aug 2023 15:51:06 GMT
    Content-Type: application/x-amz-json-1.1
    Content-Length: 3935
    X-Amzn-Requestid: 12144f5c-a944-4f08-84db-68bafeebb857
    Access-Control-Allow-Origin: *
    Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
    
    {
        "AuthenticationResult": {
            "AccessToken": "eyJraWQiOiJueXdGS0pudTRiU1ZTdk5PTGxwNzVJS0hlSUpxRzN...",
            "ExpiresIn": 3600,
            "IdToken": "eyJraWQiOiJ6eUZzVyttRURYek5maHRZbHBTN2xTOE9HUVRoSj...",
            "RefreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNB...",
            "TokenType": "Bearer"
        },
        "ChallengeParameters": {}
    }`

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
        <Box
            className={styles.container}
            sx={{ backgroundColor: "primary.background_website" }}
            pt={5}
        >
            <Container>
                <Typography
                    sx={{
                        color: "primary.main",
                    }}
                >
                    <Typography mb={-2} variant="h2">
                        AWS Cognito User Pools
                    </Typography>
                    <pre>2023/08/11 4:05PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    This is part 3 of learning AWS Cognito User Pools. If you haven't checked out the first 2 blog posts, I recommend checking them out first to get an idea of how everything is operating. In the first blog I talk about how to setup AWS Cognito and in the second blog post I show how to incoperate AWS with a RreactJS project. In this blog post I will be discussing how to pentest AWS Cognito for Bug Bounties and Web Security Professionals.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 1: Analyzing Proxy Traffic for Registration
                    </Typography>
                    <Box mt={5}/>
                    <img src="/aws_cognito_p3_1.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We registering a user, there is no API call on host `localhost:3000`. This is because the API call is going to be going to `https://cognito-idp.us.east-1.amazonaws.com`. If you commonly filter traffic for only your target, then this is something you will miss.
                    </Typography>
                    <img src="/aws_cognito_p3_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Lets analyze the request performed on `https://cognito-idp.us.east-1.amazonaws.com`. As you can see, there is a POST request containing our data.
                    </Typography>
                    <img src="/aws_cognito_p3_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Request
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Response
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 2: Analyzing Proxy Traffic for Login
                    </Typography>
                    <img src="/aws_cognito_p3_4.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The first request is sent with an `InitiateAuth` target (see line 9 in image below). If the password is incorrect, username doesn't exist, email not verified, user not confirmed, etc., then the OAuth flow will end there. There will be no second request sent in response.
                    </Typography>
                    <img src="/aws_cognito_p3_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Request
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_3}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Response
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_4}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    If a successful login attempt occurs, then there will be an additional request sent after this response. The second request will have a `RespondToAuthChallenge` target.
                    </Typography>
                    <img src="/aws_cognito_p3_6.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Request
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_5}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Response
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_6}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 3: Security Issue - Misconfigured Attributes
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
                    When a user logs into an application using AWS Cognito User Pools, they will receive an `AccessToken` in the response. You can use this access token to get your attributes on your account with the `AWSCognitoIdentityProviderService.GetUser` option.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                   Request
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_7}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                   Response
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_8}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    As you can see we have the following attributes set on our account. We can check if any of these attributes are writeable using the `AWSCognitoIdentityProviderService.UpdateUserAttributes` option.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    By default there is no real security issue unless the developer made `email_verified` or `phone_number_verified` options writeable (which are not writable by default). There may still be some situations where developers don't want you to be able to change one of these attributes.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                   Request
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_9}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    You can then check if this attribute was changed by making another request to `AWSCognitoIdentityProviderService.GetUser` and checking if the address value changed.
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
                    A developer may have an `isAdmin` attribute being set on the users. If this attribute is misconfigured to allow writing to the attribute, then the same process as before can be followed to give yourself admin privilege's.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_11}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Remember, you can then check if it worked by sending the  `AWSCognitoIdentityProviderService.GetUser` shown previously.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 4: Security Issue - Misconfigured Registration
                    </Typography>
                    <Typography>
                    Sometimes you may run into an application that has a signup page, but no user registration. This is actually quite common to run into in the wild. AWS Cognito by default, has registration enabled. A developer may create a website with only a sign-in page for authorized users and not realize that users can register through the API.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Self-registration (enabled by default)
                    </Typography>
                    <Typography>
                    You can choose to enable anyone with access to your public sign-up endpoints to create an account in your user pool. Selecting "Enable self-registration" adds a "Sign up" link to the sign-in page in the hosted UI.
                    </Typography>
                    <img src="/aws_cognito_p3_9.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The first set in identifying this misconfiguration is coming across a website that only allows for sign-in. You can try to sign-in with random credentials and check if AWS Cognito User Pools is being used by checking if a request is being made to `https://cognito-idp.us-east-1.amazonaws.com`.
                    </Typography>
                    <img src="/aws_cognito_p3_10.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    If the following is true, then we can check if the website have registration enabled on the backend by first finding the `ClientId`. The `ClientId` can be found in the Sign-In request made previously and sometimes the source code.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Request
                    </Typography>
                    <img src="/aws_cognito_p3_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Source Code
                    </Typography>
                    <img src="/aws_cognito_p3_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Once we identify that the website is using AWS Cognito User Pools, and we have the ClientId, we can send a registration request like so.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_12}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Note that the UserAttributes object may need to contain additional required attributes. The response to the request being made will tell you what attributes you are missing.
                    </Typography>
                    <img src="/aws_cognito_p3_13.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Here is a list of the standard attributes that may be additionally required:
                    </Typography>
                    <ul>
                        <li>address</li>
                        <li>birthdate</li>
                        <li>email</li>
                        <li>family_name</li>
                        <li>gender</li>
                        <li>given_name</li>
                        <li>locale</li>
                        <li>middle_name</li>
                        <li>name</li>
                        <li>nickname</li>
                        <li>phone_number</li>
                        <li>picture</li>
                        <li>preferred_username</li>
                        <li>profile</li>
                        <li>sub</li>
                        <li>updated_at</li>
                        <li>website</li>
                        <li>zoneinfo</li>
                    </ul>
                    <Box mt={5}/>
                    <Typography>
                    Custom attributes are also possible to create, but cannot be required during registration, so the attributes above are the only additional attributes that may be needed during registration.
                    </Typography>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default AWS_Cognito_User_Pools;
