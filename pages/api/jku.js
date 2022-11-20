const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(JSON.stringify(req.body.value));
    fs.writeFile(
      path.join(__dirname, "../../../../files", "jku.json"),
      JSON.stringify(req.body.value),
      (err) => {
        if (err) throw err;
        console.log("write conplete");
      }
    );
  }

  if (req.method === "GET") {
    fs.readFile(
      path.join(__dirname, "../../../../files", "jku.json"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        const text =
          '{"keys":[' +
          data
            .replaceAll("\\n", "")
            .replaceAll("\\", "")
            .replaceAll(" ", "")
            .replaceAll('""', "") +
          "]}";
        res.status(200).send(text);
      }
    );
  }
}
