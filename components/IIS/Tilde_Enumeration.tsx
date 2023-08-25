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

const IIS_Tilde_Enumeration = ({ title }: IProps) => {

  const syntax_2 = `
  give me 100 common files with the regex secret*.txt

  1. secretfile.txt
  2. secret1.txt
  3. secret2.txt
  4. secret_document.txt
  5. secret_report.txt
  6. secret_notes.txt
  7. secret_backup.txt
  8. secret_info.txt
  9. secret_final.txt
  10. secret_archive.txt
  ...`

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
            <Typography variant="h6">
                    Description
                </Typography>
              <Typography>
              Each time you create a new file on Windows, the operating system also generates an MS-DOS-compatible short file name in 8.3 format, to allow MS-DOS-based or 16-bit Windows-based programs to access files which have a long name. The MS-DOS short file format allows filenames to be up to 8 characters in length, followed by a period (.) and an extension of up to 3 characters. 
               </Typography>
          <Box pt={5}></Box>
          <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 1: Fingerprint an IIS Webserver</Typography>
            <img src="/iis_2_16.png" style={{width: "100%", height: "100%"}}  />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 2: Use the Shortname Scanner Tool</Typography>
            <Typography>
              https://github.com/bitquark/shortscan. 
            </Typography>
            <img src="/iis_2_17.png" style={{width: "100%", height: "100%"}}  />
            <Box sx={{ m: 4 }} />
            <Typography variant="h6">Step 3: Fuzz for Full Name</Typography>
            <Typography>
                    Manually guessing is not efficient, we can use a `fuzzer` with a proper wordlist to fuzz for file `secret*.txt`. In order to do this we can use:
                    </Typography>
                    <ol>
                        <li>Google `BigQuery` to create our fuzzing wordlist.</li>
                        <li>ChatGPT to create our fuzzing wordlist</li>
                        <li>Grepping existing wordlist to create our fuzzing wordlist</li>
                    </ol>
                    <Box mt={5}/>
                    <Typography>
                    Google BigQuery
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT path FROM `bigquery-public-data.github_repos.files` WHERE (REGEXP_CONTAINS(path, r'(\\/(?i)siteba[a-z0-9A-Z]+\\.zip|^siteba[a-z0-9A-Z]+\\.zip)')) LIMIT 100"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    ChatGPT
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Existing Wordlists
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {"cat SecLists/Discovery/Web-Content/* | grep -E '^secret'"}
                    </SyntaxHighlighter>
          </Typography>
          <Box pt={5}></Box>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: "fit-content", flexGrow: 1, overflowY: 'auto', color: '#000000' }}
          >
            <TreeItem nodeId="1" label="Resources">
            <a href="https://www.youtube.com/watch?v=HrJW6Y9kHC4&ab_channel=Assetnote" target="_blank">
                <TreeItem nodeId="2" label="Hacking IIS (Recon) (Part 1)" />
              </a>
              <a href="https://www.youtube.com/watch?v=_4W0WXUatiw&ab_channel=Assetnote" target="_blank">
                <TreeItem nodeId="3" label="Hacking IIS (APIs and using BigQuery) (Part 2)" />
              </a>
              <a href="https://www.acunetix.com/blog/web-security-zone/windows-short-8-3-filenames-web-security-problem/" target="_blank">
                <TreeItem nodeId="4" label="Acunetix Blog" />
              </a>
              <a href="https://sonid1263.medium.com/iis-tilde-short-name-scanning-4fc6bb92fd5f" target="_blank">
                <TreeItem nodeId="5" label="IIS Tilde Short Name Scanning" />
              </a>
              <a href="https://blog.assetnote.io/2020/09/18/finding-hidden-files-folders-iis-bigquery/" target="_blank">
                <TreeItem nodeId="6" label="Finding Hidden Files and Folders on IIS using BigQuery" />
              </a>
              <a href="https://www.youtube.com/watch?v=GxkuBFUfnL8&ab_channel=DEFCONConference" target="_blank">
                <TreeItem nodeId="7" label="Supercharge Your Web Recon With Commonspeak" />
              </a>
              
            </TreeItem>
          </TreeView>
        </AccordionDetails>
      </Accordion>
    </>
  );
};


export default IIS_Tilde_Enumeration;
