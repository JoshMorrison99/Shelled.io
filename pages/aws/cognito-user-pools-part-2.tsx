import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const AWS_Cognito_User_Pools = () => {

    const syntax_1 = `
    import { CognitoUserPool } from "amazon-cognito-identity-js";

    const poolData = {
        UserPoolId: 'us-east-1_gBPTxlyKI',
        ClientId: '5015ncg0dvmsd4vbmskke3j1tv'
    }
    
    export default new CognitoUserPool(poolData)`

    const syntax_2 = `
    const onSubmit = (event) => {
        event.preventDefault();
        
        UserPool.signUp(email, password, [], null, (err, data) => {
            if(err) {
                console.log(err)
            }else{
                console.log(data)
            }
        })`


    const syntax_3 = `
    const onSubmit = (event) => {
        event.preventDefault();
        
        UserPool.signUp(username, password, [], null, (err, data) => {
            if(err) {
                console.log(err)
            }else{
                console.log(data)
            }
        })`

    const syntax_4 = `
    var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const onSubmit = (event) => {
        event.preventDefault();
    
        var attributeList = [];
    
        var dataEmail = {
            Name: 'email',
            Value: email
        }
        
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);
    
        UserPool.signUp(username, password, attributeList, null, (err, data) => {
            if(err) {
                console.log(err)
            }else{
                console.log(data)
            }
        })
      }`

    const syntax_5 = `
    {
        "user": {
            "username": "testuser",
            "pool": {
                "userPoolId": "us-east-1_gBPTxlyKI",
                "clientId": "5015ncg0dvmsd4vbmskke3j1tv",
                "client": {
                    "endpoint": "https://cognito-idp.us-east-1.amazonaws.com/",
                    "fetchOptions": {}
                },
                "advancedSecurityDataCollectionFlag": true,
                "storage": {
                    "ally-supports-cache": "{\\"userAgent\\":\\"Mozilla/5.0 (Windows NT 10.0;..."
                }
            },
            "Session": null,
            "client": {
                "endpoint": "https://cognito-idp.us-east-1.amazonaws.com/",
                "fetchOptions": {}
            },
            "signInUserSession": null,
            "authenticationFlowType": "USER_SRP_AUTH",
            "storage": {
                "ally-supports-cache": "{\\"userAgent\\":\\"Mozilla/5.0 (Windows NT 10.0; ..."
            },
            "keyPrefix": "CognitoIdentityServiceProvider.5015ncg0dvmsd4vbmskke3j1tv",
            "userDataKey": "CognitoIdentityServiceProvider.5015ncg0dvmsd4vbmskke3j1tv.testuser.userData"
        },
        "userConfirmed": false,
        "userSub": "6c86045f-f73c-49c7-b91c-864aa7a74f9a",
        "codeDeliveryDetails": {
            "AttributeName": "email",
            "DeliveryMedium": "EMAIL",
            "Destination": "t***@g***"
        }
    }`

    const syntax_6 = `
    {
        "idToken": {
            "jwtToken": "eyJraWQiOiJ6eUZzVyttRURYek5maHRZbHBTN2xTOE9HUVRoSjRmK2pjTnc0WnY...",
            "payload": {
                "sub": "6c86045f-f73c-49c7-b91c-864aa7a74f9a",
                "email_verified": true,
                "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_gBPTxlyKI",
                "cognito:username": "testuser",
                "origin_jti": "bb83a74c-ff2e-4fdd-bb30-345cd80ff0f4",
                "aud": "5015ncg0dvmsd4vbmskke3j1tv",
                "event_id": "e8860367-44d6-48b0-8ba9-92ea7a86193c",
                "token_use": "id",
                "auth_time": 1691766912,
                "exp": 1691770511,
                "iat": 1691766912,
                "jti": "5b09b1bf-8989-4c29-8514-fa9a03798729",
                "email": "testuser@gmail.com"
            }
        },
        "refreshToken": {
            "token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2..."
        },
        "accessToken": {
            "jwtToken": "eyJraWQiOiJueXdGS0pudTRiU1ZTdk5PTGxwNzVJS0hlSUpxRzNtWkp0NnpcL2FRQ...",
            "payload": {
                "sub": "6c86045f-f73c-49c7-b91c-864aa7a74f9a",
                "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_gBPTxlyKI",
                "client_id": "5015ncg0dvmsd4vbmskke3j1tv",
                "origin_jti": "bb83a74c-ff2e-4fdd-bb30-345cd80ff0f4",
                "event_id": "e8860367-44d6-48b0-8ba9-92ea7a86193c",
                "token_use": "access",
                "scope": "aws.cognito.signin.user.admin",
                "auth_time": 1691766912,
                "exp": 1691770511,
                "iat": 1691766912,
                "jti": "3513b90a-3b45-4248-a732-fb5161826d80",
                "username": "testuser"
            }
        },
        "clockDrift": -1
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
                    <pre>2023/08/11 3:28PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    In this blog post I will show how you can create your own Sign-in/Sign-up pages in React and integrate it with AWS Cognito. If you don't know how to setup AWS cognito, check out my previous blog post.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 1: Boilerplate
                    </Typography>
                    <Typography>
                    You can download the code needed for the UI from my GitHub:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"https://github.com/JoshMorrison99/learn-aws-cognito"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 2: Integrating Cognito Functionality
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    The first thing we need to do is download the cognito library.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"npm install amazon-cognito-identity-js"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Next we will need to setup the `UserPool.js` file which will contain the `ClientId` and `UserPoolId` for our AWS Cognito application. Note: Change the `UserPoolId` and `ClientId` to be for your account if you are following along.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    The `UserPoolId` can be found here:
                    </Typography>
                    <Typography>
                    - The User Pool ID is a unique identifier for your Amazon Cognito User Pool. It's used to identify the user pool that your application is associated with. While it's not a sensitive secret, it's recommended to keep it private and not expose it directly to end-users.
                    </Typography>
                    <img src="/aws_cognito_p2_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The `ClientId` can be found here:
                    </Typography>
                    <Typography>
                    - The Client ID is associated with an app that you register within your User Pool. It's used by your application to authenticate and communicate with the User Pool. While it's not a password or secret, it's still important to keep it private because it allows applications to interact with the User Pool on behalf of users.
                    </Typography>
                    <img src="/aws_cognito_p2_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 3: Signup Functionality
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    In the previous blog we configured the user pool sign-in options like so. We selected both User name and Email for the sign-in options meaning that when a user signs up, they will need to supply both a username and an email in signup process.
                    </Typography>
                    <img src="/aws_cognito_p2_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The following error will be received if the signup process only involves sending an email with no username:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"InvalidParameterException: Username cannot be of email format, since user pool is configured for email alias."}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    *Sending only email and password*
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <img src="/aws_cognito_p2_4.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    If we send only a username, then we get the following error:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {'InvalidParameterException: Attributes did not conform to the schema: email: The attribute is required'}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    *Sending only username and password*
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_3}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <img src="/aws_cognito_p2_5.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    To add the email attribute to our Signup request, we need to add it in the attributeList.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_4}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    As long as the password passes the password policy configured and the user doesn't already exists, then we will get the following in response noting that we successfully registered a new cognito user.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="json">
                        {syntax_5}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <img src="/aws_cognito_p2_6.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    If we go back to the AWS cognito dashboard, we can see that our new user was successfully added.
                    </Typography>
                    <img src="/aws_cognito_p2_7.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 4: Login Functionality
                    </Typography>
                    <Typography>
                    The login functionality is similar to the register functionality. For this process we will need to create a `CognitoUser` and supply `AuthDetails`. Since we configured the login to accept either username or email, I will only supply a user field for convenience.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    If the user tries to login without supplying a username, the following error will occur:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {'InvalidParameterException: Missing required parameter USERNAME'}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <img src="/aws_cognito_p2_8.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    If the user supplies a username that doesn't exist then the following error will occur:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {'NotAuthorizedException: Incorrect username or password.'}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <img src="/aws_cognito_p2_9.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    If the user supplies a username that does exist, but incorrect password, then the following error will occur:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {'NotAuthorizedException: Incorrect username or password.'}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <img src="/aws_cognito_p2_10.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Therefore, by default, AWS `cognito` is immune to username enumeration.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    If the user supplies the correct username and password, but hasn't confirmed their email, the the following error will occur:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {'UserNotConfirmedException: User is not confirmed.'}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    From the AWS Cognito console, we can manually confirm the user and verify their email address.
                    </Typography>
                    <img src="/aws_cognito_p2_11.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <img src="/aws_cognito_p2_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    In addition, I also disabled MFA.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    If the user supplies the correct username and password, with verified email, confirmed account and MFA, then the following object is returned.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="json">
                        {syntax_6}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Authenticate users and grant access to resources with tokens. The claims in tokens are information about your user. The ID token contains claims about their identity, like their username, family name, and email address. The access token contains claims like scope that the authenticated user can use to access third-party APIs, Amazon Cognito user self-service API operations, and the UserInfo endpoint. The access and ID token both include a cognito:groups claim that contains your user's group membership in your user pool.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Amazon Cognito also has tokens that you can use to get new tokens or revoke existing tokens. Refresh a token to retrieve a new ID and access tokens. Revoke a token to revoke user access that is allowed by refresh tokens.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Amazon Cognito issues tokens as Base64-encoded strings. You can decode any Amazon Cognito ID or access token from base64 to plaintext JSON. Amazon Cognito refresh tokens are encrypted, and can't be read by Amazon Cognito administrators or users.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    In the next blog post on AWS Cognito User Pools I will go into how to pentest the service.
                    </Typography>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default AWS_Cognito_User_Pools;
