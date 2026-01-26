import { createWriteStream } from 'node:fs';


const ws = createWriteStream("memo.txt", { flags: "a" });
ws.write("a");

//process.stdin.pipe(createWriteStream("memo.txt"));
process.stdin.pipe(ws);

ws.write(process.argv.slice(2).join());
