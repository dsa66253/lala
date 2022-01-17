import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const app = express();


app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); // ip address of the user
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });
