"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const league_1 = __importDefault(require("./league"));
const team_1 = __importDefault(require("./team"));
const jsdom_1 = require("jsdom");
class Season extends league_1.default {
    // year is the year the season started, also it is the seasonID
    year;
    teamURLs;
    teams;
    constructor(url, year) {
        super(url);
        this.year = year;
    }
    async init() {
        let parser;
        let seasonDocument;
        const data = await (0, utils_1.fetcher)(this.getURL());
        parser = new jsdom_1.JSDOM(data);
        seasonDocument = parser.window.document;
        this.teamURLs = (0, utils_1.removeHashLinks)((0, utils_1.removeDuplicates)(Array.from(seasonDocument.querySelectorAll('td.no-border-links > a'))
            .map(a => (0, utils_1.appendURLToRoot)(a.getAttribute('href')) ?? '')));
        this.teams = [];
        return this;
    }
    getYear = () => this.year;
    getTeamURLs = () => this.teamURLs;
    getTeams = () => this.teams;
    setYear = (year) => {
        this.year = year;
    };
    setTeamURLs = (teamURLs) => {
        this.teamURLs = teamURLs;
    };
    /**
     * fetches teams, stores them in the teams prop of the Season instance and returns it.
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
exports.default = Season;
