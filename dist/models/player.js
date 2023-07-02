"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const team_1 = __importDefault(require("./team"));
const jsdom_1 = require("jsdom");
class Player {
    constructor(url) {
        this.getURL = () => this.url;
        this.getName = () => this.name;
        this.getNationality = () => this.nationality;
        this.getTeamURLs = () => this.teamURLs;
        this.getBirthDate = () => this.birthDate;
        this.getTeams = () => this.teams;
        this.setURL = (url) => {
            this.url = url;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.setNationality = (nationality) => {
            this.nationality = nationality;
        };
        this.setTeamURLs = (teamURLs) => {
            this.teamURLs = teamURLs;
        };
        this.setBirthDate = (birthDate) => {
            this.birthDate = birthDate;
        };
        /**
         * fetches teams, stores them in the teams prop of the Player instance and returns it.
         * @returns fetched teams
         */
        this.fetchTeams = () => {
            this.teamURLs.forEach((teamURL) => {
                this.teams.push(new team_1.default(teamURL));
            });
            return this.teams;
        };
        let parser;
        let playerDocument;
        (0, utils_1.fetcher)(url).then((data) => {
            parser = new jsdom_1.JSDOM(data);
            playerDocument = parser.window.document;
        });
        this.url = url;
        Array.from(playerDocument.querySelectorAll('span.data-header__content'))
            .forEach((span) => {
            const text = (0, utils_1.removeWhitespaceAtEnds)(span.textContent ?? '');
            const itemprop = span.getAttribute('itemprop');
            if (itemprop === 'birthDate') {
                this.birthDate = new Date((0, utils_1.removeParantheticals)(text));
            }
            else if (itemprop === 'nationality') {
                this.nationality = text;
            }
        });
        this.name = (0, utils_1.removeNumbers)(playerDocument.querySelector('h1.data-header__headline-wrapper')?.textContent)
            ?? '';
        this.teamURLs = (0, utils_1.removeDuplicates)(Array.from(playerDocument.querySelectorAll('a.tm-player-transfer-history-grid__club-link'))
            .map(a => a.getAttribute('href') ?? ''));
        this.teams = [];
    }
}
exports.default = Player;
