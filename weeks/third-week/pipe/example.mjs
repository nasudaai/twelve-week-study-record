import { Readable } from 'node:stream';
//process.stdin.pipe(process.stdout);

const args = process.argv.slice(2);

const readable = Readable.from(args.join(" "));

readable.pipe(process.stdout);
