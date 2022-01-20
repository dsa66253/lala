import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const app = express();


app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res)=> {
  // console.log(req);
  console.log("client reach")
  console.log("client header", JSON.stringify(req.headers));
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("client ip", ip); // ip address of the user
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(port, () => {
    console.log(`Hello Server is up on port ${port}!`);
 });
