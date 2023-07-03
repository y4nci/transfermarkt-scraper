import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const commonConfig = {
    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
    rootDir: path.resolve(__dirname),
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    testEnvironment: "node",    
    transform: {
        "^.+\\.ts$": "ts-jest"
    }
}

export default {
    displayName: '@y4nci/transfermarkt-scraper',
    projects: [
        {
            ...commonConfig,
            displayName: 'season',
            testMatch: ['<rootDir>/test/season.test.ts'],
        },
        {
            ...commonConfig,
            displayName: 'player',
            testMatch: ['<rootDir>/test/player.test.ts'],
        },
    ],
  }