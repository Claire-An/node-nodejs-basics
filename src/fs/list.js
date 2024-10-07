import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const list = async () => {
    const folderName = 'files';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const folderPath = join(__dirname, folderName);

    fs.readdir(folderPath, (err, filesList) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(filesList);
    });
};

await list();