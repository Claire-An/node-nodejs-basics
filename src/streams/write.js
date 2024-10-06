import fs from 'node:fs';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const write = async () => {
    const folderName = 'files';
    const fileName = 'fileToWrite.txt';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);
    const streamWrite = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.pipe(streamWrite);
};

await write();