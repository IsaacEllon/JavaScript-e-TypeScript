const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue; // Não mostra a pasta git
        if (/\node_modules/g.test(fileFullPath)) continue; // Não mostra a pasta node_modeles

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
        ) continue; // Apenas arquivos CSS

        console.log(file, stats.isDirectory());
    }
}

readdir('/Users/atend/OneDrive/Documentos/GitHub/JavaScript-e-TypeScript/');