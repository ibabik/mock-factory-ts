import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

export class DataReader {
    static read(fileName: string) {
        const filePath = path.resolve(__dirname, '../mock-data', fileName);

        try {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            return yaml.load(fileContents);
        } catch (e) {
            console.error('Error reading or parsing YAML file:', e);
        }
    }
}