import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fork } from 'node:child_process';

const folderName = 'files';
const fileName = 'script.js';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const folderPath = join(__dirname, folderName, fileName);
    const child = fork(folderPath, args);
    child.on('message', (data) => {
        process.stdout.write(data);
    });
    child.on('error', () => {
        throw new Error('FS operation failed');
    });
};

spawnChildProcess(process.argv.slice(2));
