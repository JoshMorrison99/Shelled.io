import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const AWS_Cognito_User_Pools = () => {

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
                    <pre>2023/08/10 5:57PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    Amazon Cognito user pools are a managed service that lets you add secure authentication and authorization to your apps, and can scale to support millions of users.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 1: Getting Started
                    </Typography>
                    <Typography>
                    We have the option between choosing to create a "User Pool" or an "Identity Provider". This blog post will be long enough, so we will just be doing the "User Pool" option.
                    </Typography>
                    <img src="/aws_cognito_user_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 1: Creating a User Pool
                    </Typography>
                    <Typography>
                    The first step in setting up AWS Cognito is selecting a provider type. We have already selected that we are using Cognito user pool (username/email/phone-number and password sign-in/signup), but we also have the option to select to use Federated Identity Providers as well.
                    </Typography>
                    <img src="/aws_cognito_user_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    A Federated Identity Provider is what allows use to integrate OAuth2.0 in our application. This is the functionality you see with "Sign in with Google".
                    </Typography>
                    <img src="/aws_cognito_user_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    User Pool Options
                    </Typography>
                    <Typography>
                    You can configure Amazon Cognito so that users can sign in with their email address, phone number, or user name. If you enable sign-in with a user name, you can set a "preferred user name" attribute (preferred_username) that works as an alternate value for the user name attribute (username). Attributes that users can use to sign in are known as aliases.
                    </Typography>
                    <img src="/aws_cognito_user_4.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Federated Identity Provider Options
                    </Typography>
                    <Typography>
                    Amazon Cognito supports OAuth 2.0 integration with Google, Facebook, Login with Amazon, and Sign in with Apple. You can also integrate other identity providers that support OIDC or SAML 2.0.
                    </Typography>
                    <img src="/aws_cognito_user_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 3: Configuring Security Requirements
                    </Typography>
                    <Typography>
                    In this step we will setup a strong password requirement in addition to multi-factor authentication to protect your application users.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Password Policy
                    </Typography>
                    <Typography>
                    Amazon Cognito comes with a default password policy that ensures your users maintain a password with a minimum length and complexity.
                    </Typography>
                    <img src="/aws_cognito_user_6.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Custom Password Policy
                    </Typography>
                    <Typography>
                    You can also customize the password policy to require a number, a special character, an uppercase character, a lowercase character, or any combination of these. You can also change the default minimum password length, though you can't set this to fewer than 6 characters.
                    </Typography>
                    <img src="/aws_cognito_user_7.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    When you perform a password reset, a temporary password is generated and sent to the user. You can change the duration before this temporary password expires so that access with a temporary password does not become a potential vulnerability. Password policy only applies to users that sign in to your user pool. Manage password policy for federated users at the federated identity provider.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Multi-factor Authentication
                    </Typography>
                    <Typography>
                    With multi-factor authentication (MFA), you can prompt your users to provide a second factor when they sign in, either as a code that your user pool sends by SMS message, or as a code that an authenticator app generates. When you choose to activate MFA for your user pool, Amazon Cognito can prompt each new user to set up MFA, or you can manage user choices in your app.
                    </Typography>
                    <img src="/aws_cognito_user_8.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will select to have MFA as required and Authenticator Apps as the MFA method in my application.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    User Account Recovery
                    </Typography>
                    <Typography>
                    You can choose whether users can reset their own passwords.
                    </Typography>
                    <img src="/aws_cognito_user_9.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 4: Configure Sign-up Experience
                    </Typography>
                    <Typography>
                    In this step we will determine how new users will verify their identities when signing up and which attributes should be required or optional during the user sign-up flow.
                    </Typography>
                    <img src="/aws_cognito_user_10.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Self-service sign-up
                    </Typography>
                    <Typography>
                    You can choose to enable anyone with access to your public sign-up endpoints to create an account in your user pool. Selecting "Enable self-registration" adds a "Sign up" link to the sign-in page in the hosted UI.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Cognito-assisted verification and confirmation
                    </Typography>
                    <Typography>
                    By default, Amazon Cognito automatically sends messages to new users to verify their accounts. These messages are sent to the email address or phone number the user provides during sign-up. New users must verify their email address or phone number before they can sign in to your user pool. Users created by the administrator are also sent verification messages. This process helps prevent the fraudulent creation of accounts in your user pool.
                    </Typography>
                    <img src="/aws_cognito_user_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Required attributes
                    </Typography>
                    <Typography>
                    Amazon Cognito uses a list of standard attributes taken from the OpenID Connect (OIDC) standard. You can make a subset of them required when users sign up. As an alternative to setting required attributes, you can use your own application code to ensure that the attributes you need are captured.
                    </Typography>
                    <img src="/aws_cognito_user_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Additional default attributes are:
                    </Typography>
                    <ul>
                    <li>address</li>
                    <li>birthdate</li>
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
                    <li>updated_at</li>
                    <li>website</li>
                    <li>zoneinfo</li>
                    </ul>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 5: Configure Message Delivery
                    </Typography>
                    <Typography>
                    Amazon Cognito sends messages to your users for sign-up, sign-in, MFA, and account recovery workflows. In this step, you will configure the email and SMS settings that will integrate Amazon Cognito messages with your AWS account. For production levels of message delivery, Amazon SES and Amazon SNS, which are integrated with Amazon Cognito, will add cost to your bill.
                    </Typography>
                    <img src="/aws_cognito_user_13.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    In order to use the SES option, we will need to configure a verified sender with Amazon SES. I don't want to do that right now, do I will choose "Send email with `Cognito`". Choosing "Send email with `Cognito`" is a typically used in development as it will only allow you to send 50 emails a day.
                    </Typography>
                    <img src="/aws_cognito_user_14.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 6: Connect Federated Identity Providers
                    </Typography>
                    <Typography>
                    An Amazon Cognito user pool can be a user directory, authentication front-end, and OAuth 2.0 server for your app. In this step, you will create an app client to connect your app to the user pool and authorize Amazon Cognito to generate OAuth 2.0 tokens.
                    </Typography>
                    <img src="/aws_cognito_user_15.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will save how the OAuth2.0 setup for another blog post as this will already be quite long. There is an option to skip the signup.
                    </Typography>
                    <img src="/aws_cognito_user_16.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 7: Integrate your app
                    </Typography>
                    <img src="/aws_cognito_user_17.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    For the User pool name, I chose `aws-cognito-test`. There is also a mandatory selection box for hosted authentication pages. Your web and mobile app users can sign in through social identity providers (IdP) like Facebook, Google, Amazon, and Apple. With the built-in hosted web UI, Amazon Cognito provides token handling and management for all authenticated users. This way, your backend systems can standardize on one set of user pool tokens. You must enable the hosted UI to integrate with supported social identity providers. When Amazon Cognito builds your hosted UI, it creates OAuth 2.0 endpoints that Amazon Cognito and your OIDC and social IdPs use to exchange information.
                    </Typography>
                    <img src="/aws_cognito_user_18.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Domain
                    </Typography>
                    <Typography>
                    Each user pool and each app client in Amazon Cognito can use a customized domain, either Amazon-owned or your own. When you choose a domain and configure the hosted UI to use it, you will have access to web pages for user pool sign-up and sign-in, as well as the endpoints required for OAuth 2.0.
                    </Typography>
                    <img src="/aws_cognito_user_19.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Initial App Client
                    </Typography>
                    <Typography>
                    The OAuth 2.0 standard defines two client types: public and confidential clients. The best settings for your app client depend on the type of app you build. You can choose the default settings for a public or confidential client. You can also select Other and chose settings that meet your requirements. I will choose the default settings for the Public client.
                    </Typography>
                    <img src="/aws_cognito_user_20.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 8: Review
                    </Typography>
                    <img src="/aws_cognito_user_21.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    User Pool is now configured.
                    </Typography>
                    <img src="/aws_cognito_user_22.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 9: Hosted UI
                    </Typography>
                    <Typography>
                    This part was a little confusing to figure out. When AWS cognito is created, I wanted to go to the website that has the sign in feature. When going to the created website https://WEBSITE.auth.us-east-1.amazoncognito.com, I got just a blank page.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    The issue was that I was missing parameters when trying to view the UI. This wasn't explained anywhere after setting up cognito. https://stackoverflow.com/questions/49569256/empty-page-for-the-sign-up-and-sign-in-pages-hosted-by-aws-cognito.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    By going to Amazon Cognito &gt; User pools &gt; YOUR_USER_POOL_NAME &gt; App integration &gt; scroll to the bottom and select you App client name.
                    </Typography>
                    <img src="/aws_cognito_user_23.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    From here you can select the `View Hosted UI` option to view your website.
                    </Typography>
                    <img src="/aws_cognito_user_24.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    TADA!
                    </Typography>
                    <img src="/aws_cognito_user_25.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 9: Register a User
                    </Typography>
                    <Typography>
                    Now that we have Cognito setup, lets register a user. Click on sign up and fill in the form.
                    </Typography>
                    <img src="/aws_cognito_user_26.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    After filling out the form, I got the following to verify my email address.
                    </Typography>
                    <img src="/aws_cognito_user_27.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    In my email, I got a message from `no-reply@verificationemail.com` with a code. Remember back in Step 5: Configure Message Delivery I set the option for email delivery to be from AWS cognito (limiting us to 50 emails per day). This is the email that will send the code by default.
                    </Typography>
                    <img src="/aws_cognito_user_28.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    MFA
                    </Typography>
                    <Typography>
                    After verify my email with the code I get an MFA prompt. Remember back in Step 3: Configuring Security Requirements, I configured MFA to be required.
                    </Typography>
                    <img src="/aws_cognito_user_29.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will use Duo on my mobile device to setup MFA. With all this done, I am sent back to the sign in screen. So lets sign in.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 10: Cognito Dashboard Management
                    </Typography>
                    <Typography>
                    After registering my account, I can view in the Cognito dashboard that my account is successfully registered with a verified email address.
                    </Typography>
                    <img src="/aws_cognito_user_30.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will register another user with a random email address, and as you can see the Email Verified is set to "No" with a Confirmation status of "Unconfirmed".
                    </Typography>
                    <img src="/aws_cognito_user_31.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default AWS_Cognito_User_Pools;
