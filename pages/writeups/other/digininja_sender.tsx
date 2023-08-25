import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const digininja_sender = () => {

    const syntax_1 = `
    <html>
        <head>
            <title>PostMessage Lab</title>
        </head>
        <h1>Shelled's Website</h1>
        <input type="text" id="message" name="message" value="hi">
        <input type="button" id="send_message_button" value="Send Message">
        <body>
            <iframe id="child_i" src="https://html5server.digi.ninja/s_child.html?origin=https://html5.digi.ninja" width="500" height="500"></iframe>
            <script>
                const sendMessage = () => {
                    const childFrame = document.getElementById('child_i');
                    const messageInput = document.getElementById('message');

                    childFrame.contentWindow.postMessage(messageInput.value, '*')
                }

                const sendMessageButton = document.getElementById("send_message_button");
                sendMessageButton.addEventListener("click", sendMessage, false);
            </script>
        </body>
    </html>`

    const syntax_2 = `
    const regex = /https?:\\/\\//gi
	const CLIENT_DOMAIN='https://html5.digi.ninja';
	
	let messages = document.getElementById("s_messages");
	let just_domain = CLIENT_DOMAIN.replace(regex, '');

	if (!e.origin.match(just_domain)) {
		alert ("Message came in from wrong origin");
		return;
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
                    DigiNinja postMessage - Sender Lab
                    </Typography>
                    <pre>2023/08/25 10:18PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    This page logs usage to the iframe, setup an environment where it is possible to spoof log messages from your own domain.
                    </Typography>
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 1
                    </Typography>
                    <img src="/digininja_sender_1.png" style={{width: "80%", height: "80%"}} />
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 2
                    </Typography>
                    <Typography>
                    Using the parent `iframe` we can send log messages to the child `iframe`.
                    </Typography>
                    <img src="/digininja_sender_2.png" style={{width: "80%", height: "80%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Checking out the "Sources" tab in chrome dev tools we can see that the child `iframe` along with its JS files.
                    </Typography>
                    <img src="/digininja_sender_3.png" style={{width: "50%", height: "50%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Looking at the code in the parent, we can see the child `iframe` is called "`s_iframe`".
                    </Typography>
                    <img src="/digininja_sender_4.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Looking at the parent JS files, we can see that we are getting a reference to the child `iframe` and sending it a `postMessage`.
                    </Typography>
                    <img src="/digininja_sender_5.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Checking out the child `iframe` code we can see that the child `iframe` is accepting a `postMessage`.
                    </Typography>
                    <img src="/digininja_sender_6.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 3
                    </Typography>
                    <Typography>
                    Before we can exploit this `postMessage` vulnerability, we first need to check if we can put the child `iframe` on to our own website. The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a `&lt;frame&gt;, &lt;iframe&gt;, &lt;embed&gt; or &lt;object&gt;.`
                    </Typography>
                    <Box pt={5}/>
                    <Typography>
                    To check if the `X-Frame-Options` HTTP header is being set on a child `iframe` we can use chrome dev tools network tab and filter for Doc.
                    </Typography>
                    <img src="/digininja_sender_7.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Clicking on the child document we can see that there is no `X-Frame-Options` header in the response headers. This means we can host this document on our own website with the child document in an `iframe`.
                    </Typography>
                    <img src="/digininja_sender_8.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 4
                    </Typography>
                    <Typography>
                    Using the following code, I will host the child `iframe` on my localhost using python webserver.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="html">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 5
                    </Typography>
                    <Typography>
                    When sending a request, you will notice that an alert will pop-up indicating that the origin is incorrect.
                    </Typography>
                    <img src="/digininja_sender_9.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Inspecting the code in the child `iframe` we can see that there is a check to see if the origin is same as CLIENT_DOMAIN.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box pt={5}/>
                    <Typography>
                    The check is done using `origin.match()`. The match method retrieves the result of matching the string against a regular expression. This is what the call looks like:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {"if(!'http://localhost'.match('html5.digi.ninja'))"}
                    </SyntaxHighlighter>
                    <Box pt={5}/>
                    <Typography>
                    This may not seem like it, but there is a vulnerability in here. The `.match` function will check against regex and the `.` (period) character is not being escaped properly. The dot matches a single character, without caring what that character is. The only exception are line break characters.
                    </Typography>
                    <Box pt={5}/>
                    <Typography>
                    Therefore, we can use the following, and the regex will match:
                    </Typography>
                    <img src="/digininja_sender_10.png" style={{width: "60%", height: "60%"}} />
                    <Typography>
                    As you can see, we can place any character where the `.` (period) used to be in order to get a match. The `.match()` also will not check if the regex is starting or ending with that regex meaning we can also put the regex check as a subdomain of our own website.
                    </Typography>
                    <Box pt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 6
                    </Typography>
                    <Typography>
                    I will edit my `hosts` file (no need to buy a new domain) to be `html5xdigixninja.com`.
                    </Typography>
                    <img src="/digininja_sender_11.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    Now, when the postMessage is sent to the child `iframe` the origin check will be bypassed.
                    </Typography>
                    <img src="/digininja_sender_12.png" style={{width: "100%", height: "100%"}} />
                    <Box pt={5}/>
                    <Typography>
                    To see a video view here: https://www.youtube.com/watch?v=6F4SRcUoEgE&ab_channel=Shelled
                    </Typography>
                    <Box pt={5}/>
                    <Typography>
                    Shoutout to [DigiNinja](https://twitter.com/digininja) for the awesome lab. You can try it out here: https://html5.digi.ninja/s_parent.html
                    </Typography>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default digininja_sender;
