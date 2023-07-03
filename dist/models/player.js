"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const team_1 = __importDefault(require("./team"));
const jsdom_1 = require("jsdom");
class Player {
    url;
    name;
    nationality;
    teamURLs;
    birthDate;
    /**
     * we only initialise this variable if the user wants it.
     */
    teams;
    constructor() {
    }
    async init(url) {
        let parser;
        let playerDocument;
        const data = await (0, utils_1.fetcher)(url);
        parser = new jsdom_1.JSDOM(data);
        playerDocument = parser.window.document;
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
            .map(a => (0, utils_1.appendURLToRoot)(a.getAttribute('href')) ?? ''));
        this.teams = [];
    }
    ;
    getURL = () => this.url;
    getName = () => this.name;
    getNationality = () => this.nationality;
    getTeamURLs = () => this.teamURLs;
    getBirthDate = () => this.birthDate;
    getTeams = () => this.teams;
    setURL = (url) => {
        this.url = url;
    };
    setName = (name) => {
        this.name = name;
    };
    setNationality = (nationality) => {
        this.nationality = nationality;
    };
    setTeamURLs = (teamURLs) => {
        this.teamURLs = teamURLs;
    };
    setBirthDate = (birthDate) => {
        this.birthDate = birthDate;
    };
    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    fetchTeams = async () => {
        for (const teamURL of this.teamURLs) {
            const team = new team_1.default();
            await team.init(teamURL);
            this.teams.push(team);
        }
        return this.teams;
    };
}
exports.default = Player;
