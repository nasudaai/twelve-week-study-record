import { writeFile } from 'node:fs';

writeFile("out/out.txt", "test\n", () => {
  console.log("test");
});
