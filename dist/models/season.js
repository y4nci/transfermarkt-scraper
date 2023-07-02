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
    constructor(url, year) {
        super(url);
        this.getYear = () => this.year;
        this.getTeamURLs = () => this.teamURLs;
        this.getTeams = () => this.teams;
        this.setYear = (year) => {
            this.year = year;
        };
        this.setTeamURLs = (teamURLs) => {
            this.teamURLs = teamURLs;
        };
        /**
         * fetches teams, stores them in the teams prop of the Season instance and returns it.
         * @returns fetched teams
         */
        this.fetchTeams = () => {
            this.teamURLs.forEach((teamURL) => {
                const team = new team_1.default();
                team.init(teamURL);
                this.teams.push(team);
            });
            return this.teams;
        };
        this.year = year;
    }
    async init() {
        let parser;
        let seasonDocument;
        const data = await (0, utils_1.fetcher)(this.getURL());
        parser = new jsdom_1.JSDOM(data);
        seasonDocument = parser.window.document;
        this.teamURLs = (0, utils_1.removeHashLinks)((0, utils_1.removeDuplicates)(Array.from(seasonDocument.querySelectorAll('td.no-border-links > a'))
            .map(a => a.getAttribute('href') ?? '')));
        this.teams = [];
        return this;
    }
}
exports.default = Season;
