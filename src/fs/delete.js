import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const remove = async () => {
    const folderName = 'files';
    const fileName = 'fileToRemove.txt';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);

    fs.unlink(filePath, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
    });

};

await remove();
