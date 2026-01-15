import { writeFile, readFile } from 'node:fs';

writeFile("out/text.txt", "text", (err) => {
  if (err) {
    console.error(err);
  } else {
    readFile("out/text.txt", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    });
  }
});
