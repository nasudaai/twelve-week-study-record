import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

//check spelling on the first line.
//console.log(createServer);  


//read html
const html = readFileSync("./index.html", "utf-8");
console.log(html);
