"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const utils_1 = require("../utils");
const team_1 = __importDefault(require("./team"));
class Player {
    id;
    name;
    nationality;
    teamIDs;
    birthDate;
    /**
     * we only initialise this variable if the user wants it.
     */
    teams;
    constructor(id) {
        this.id = id;
    }
    async init() {
        let parser;
        let playerDocument;
        const data = await (0, utils_1.fetchPlayer)(this.id);
        parser = new jsdom_1.JSDOM(data);
        playerDocument = parser.window.document;
        Array.from(playerDocument.querySelectorAll('span.data-header__content'))
            .forEach((span) => {
            const text = (0, utils_1.applyFiltersToElement)(span.textContent ?? '', utils_1.removeWhitespaceAtEnds);
            const itemprop = span.getAttribute('itemprop');
            if (itemprop === 'birthDate') {
                this.birthDate = new Date((0, utils_1.applyFiltersToElement)(text, utils_1.removeParantheticals));
            }
            else if (itemprop === 'nationality') {
                this.nationality = text;
            }
        });
        this.name = (0, utils_1.applyFiltersToElement)(playerDocument.querySelector('h1.data-header__headline-wrapper')?.textContent, utils_1.removeNumbers, utils_1.removeWhitespaceAtEnds)
            ?? '';
        this.teamIDs = (0, utils_1.applyFiltersToArray)(Array.from(playerDocument.querySelectorAll('a.tm-player-transfer-history-grid__club-link'))
            .map(a => (0, utils_1.applyFiltersToElement)(a.getAttribute('href'), utils_1.removeSeasonInfoFromTeamURL) ?? ''), utils_1.removeDuplicates, utils_1.removeInvalidTeamLinks, utils_1.getIDsFromURLs)
            .map(Id => Number(Id));
        this.teams = [];
    }
    getID = () => this.id;
    getName = () => this.name;
    getNationality = () => this.nationality;
    getTeamIDs = () => this.teamIDs;
    getBirthDate = () => this.birthDate;
    getTeams = () => this.teams;
    getURL = () => (0, utils_1.getPlayerURLfromID)(this.id);
    getTeamURLs = () => this.teamIDs.map(id => (0, utils_1.getPlayerURLfromID)(id));
    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    fetchTeams = async () => {
        for (const teamID of this.teamIDs) {
            const team = new team_1.default(teamID);
            await team.init();
            this.teams.push(team);
        }
        return this.teams;
    };
}
exports.default = Player;
