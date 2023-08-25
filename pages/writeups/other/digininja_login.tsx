import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const digininja_login = () => {

    const syntax_1 = `
    <html>
        <head>
            <title>PostMessage Lab</title>
            <script src="/exploit.js"></script>
        </head>
        <h1>Shelled's Website</h1>
        <body>
            <iframe src="https://html5server.digi.ninja/l_child.php" width="1000" height="1000"/>
        </body>
    </html>`

    const syntax_2 = `
    function receiveMessage(message) {
        console.log(message.data)
    }
    
    window.addEventListener("message", receiveMessage, false);`

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
                    DigiNinja postMessage - Login Lab
                    </Typography>
                    <pre>2023/08/25 9:57PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    In this scenario, the login for the system is performed by a script hosted on a different domain. The login page is held in an `iframe` and on a successful login it sends the token up to the parent, this page, so it can also use it.
                    </Typography>
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Summary
                    </Typography>
                    <Typography>
                    This lab involves a child `iframe` that has an insecure configuration where the child `iframe` will send sensitive data to any parent. This is an issue if the `X-Frame-Options` header is not set because that means you can `iframe` the child website to receive the sensitive information.
                    </Typography>
                    <Box pt={5}/>
                    <Typography>
                     Note: This attack doesn't always work on chrome browsers. If you want to test the exploit, I recommend using Firefox.
                    </Typography>
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 1
                    </Typography>
                    <Typography>
                    We have a main website and then we also have an `iframe` with the login form.
                    </Typography>
                    <img src="/digininja_login_1.png" style={{width: "80%", height: "80%"}} />
                    <Box pt={5}/>
                    <Typography>
                    If you go to the "Sources" tab in chrome dev tools, you can see that there is another `iframe` on the page.
                    </Typography>
                    <img src="/digininja_login_2.png" style={{width: "50%", height: "50%"}} />
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 2
                    </Typography>
                    <Typography>
                    When we enter in our login information, we receive back a login token from the child `iframe`.
                    </Typography>
                    <img src="/digininja_login_3.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 3
                    </Typography>
                    <Typography>
                    Having a look at the parent website code we can see that the parent is including the child in an `iframe`.
                    </Typography>
                    <img src="/digininja_login_4.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Having a look at the child `iframe` code we can see that the `iframe` includes a JS file.
                    </Typography>
                    <img src="/digininja_login_5.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Having a look at the JS code, we can see that the child `iframe` is sending the sensitive login token to the parent using the wildcard origin. The means that the origin of the parent can be anything.
                    </Typography>
                    <img src="/digininja_login_6.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 4
                    </Typography>
                    <Typography>
                    Before we can exploit this `postMessage` vulnerability, we first need to check if we can put the child `iframe` on to our own website. The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a `&lt;frame&gt;, &lt;iframe&gt;, &lt;embed&gt; or &lt;object&gt;.`
                    </Typography>
                    <Box pt={5}/>
                    <Typography>
                    To check if the `X-Frame-Options` HTTP header is being set on a child `iframe` we can use chrome dev tools network tab and filter for Doc.
                    </Typography>
                    <img src="/digininja_login_7.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    When we click on the `l_child.php` document, we can see that there is no `X-Frame-Options` header meaning we can put this document in an `iframe` on our own website.
                    </Typography>
                    <img src="/digininja_login_8.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 5
                    </Typography>
                    <Typography>
                    To setup the exploit I will host the following code on an EC2 instance.
                    </Typography>
                    <Box pt={5}/>
                    <Typography>
                    exploit.html
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="html">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box pt={5}/>
                    <Typography>
                    exploit.js
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box pt={5}/>
                    <Typography>
                    As you can see, I have a website an I'm putting the child `iframe` into the website.
                    </Typography>
                    <img src="/digininja_login_9.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    This now means that the when the code in the child `iframe` `window.parent.postMessage(token, "*")` is executed, I will be the parent. In order to receive the message from the child `iframe`, I will need to have a listener for the message event. This can be seen in the `exploit.js` file.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box pt={5}/>
                    <Typography>
                    When the message is received, it will be logged in the console.
                    </Typography>
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 6
                    </Typography>
                    <Typography>
                    Lets login to the application. As you can see, the sensitive token is being logged on our website.
                    </Typography>
                    <img src="/digininja_login_10.png" style={{width: "70%", height: "70%"}} />
                    <Box pt={5}/>
                    <Typography>
                    To see a video view here: https://www.youtube.com/watch?v=9OAJVX--zJg&ab_channel=Shelled
                    </Typography>
                    <Box pt={5}/>
                    <Typography>
                    Shoutout to [DigiNinja](https://twitter.com/digininja) for the awesome lab. You can try it out here: https://html5.digi.ninja/l_parent.php
                    </Typography>

                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default digininja_login;
