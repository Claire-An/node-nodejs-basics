import fs from 'node:fs';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const read = async () => {
    const folderName = 'files';
    const fileName = 'fileToRead.txt';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);
    const stream = fs.createReadStream(filePath, 'utf8');

    stream.pipe(process.stdout);
};

await read();
