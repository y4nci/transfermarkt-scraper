"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const league_1 = __importDefault(require("./league"));
const team_1 = __importDefault(require("./team"));
class Season extends league_1.default {
    constructor(url, year) {
        const parser = new DOMParser();
        let seasonDocument;
        (0, utils_1.fetcher)(url).then((data) => {
            seasonDocument = parser.parseFromString(data, 'text/html');
        });
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
                this.teams.push(new team_1.default(teamURL));
            });
            return this.teams;
        };
        this.year = year;
        this.teamURLs = (0, utils_1.removeHashLinks)((0, utils_1.removeDuplicates)(Array.from(seasonDocument.querySelectorAll('td.no-border-links > a'))
            .map(a => a.getAttribute('href') ?? '')));
        this.teams = [];
    }
}
exports.default = Season;
