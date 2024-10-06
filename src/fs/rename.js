import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const rename = async () => {
    const folderName = 'files';
    const fileName = 'wrongFilename.txt';
    const fileNewName = 'properFilename.md';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);
    const fileNewPath = join(__dirname, folderName, fileNewName);

    fs.stat(filePath, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
        fs.stat(fileNewPath, (err) => {
            if(!err) {
                throw new Error('FS operation failed');
            }
            fs.rename(filePath, fileNewPath, (err) => {
                if(err) {
                    throw new Error('FS operation failed');
                }
            }); 
        });
    });
};

await rename();
