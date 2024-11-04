import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class City {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class HistoryService {
    constructor() {
        this.filePath = path.join(__dirname, 'searchHistory.json');
    }
    async read() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data);
        }
        catch (error) {
            return [];
        }
    }
    async write(cities) {
        await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2));
    }
    async getCities() {
        return await this.read();
    }
    async addCity(name) {
        const cities = await this.read();
        const id = new Date().toISOString();
        cities.push(new City(name, id));
        await this.write(cities);
    }
    async removeCity(id) {
        let cities = await this.read();
        cities = cities.filter(city => city.id !== id);
        await this.write(cities);
    }
}
export default new HistoryService();
