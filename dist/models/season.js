"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const utils_1 = require("../utils");
const league_1 = __importDefault(require("./league"));
const team_1 = __importDefault(require("./team"));
class Season extends league_1.default {
    // year is the year the season started, also it is the seasonID
    year;
    teamIDs;
    teams;
    constructor(leagueId, year) {
        super(leagueId);
        this.year = year;
    }
    async init() {
        let parser;
        let seasonDocument;
        const data = await (0, utils_1.fetchLeagueSeason)(this.getID(), this.year);
        parser = new jsdom_1.JSDOM(data);
        seasonDocument = parser.window.document;
        this.teamIDs = (0, utils_1.applyFiltersToArray)(Array.from(seasonDocument.querySelectorAll('td.no-border-links > a'))
            .map(a => (0, utils_1.applyFiltersToElement)(a.getAttribute('href'), utils_1.appendURLToRoot) ?? ''), utils_1.removeDuplicates, utils_1.removeHashLinks, utils_1.removeInvalidTeamLinks, utils_1.getIDsFromURLs)
            .map(id => Number(id));
        this.teams = [];
        return this;
    }
    getYear = () => this.year;
    getTeamIDs = () => this.teamIDs;
    getTeams = () => this.teams;
    getURL = () => (0, utils_1.getLeagueSeasonURLfromID)(this.getID(), this.year);
    getTeamURLs = () => this.teamIDs.map(id => (0, utils_1.getTeamURLfromID)(id, this.year));
    /**
     * fetches teams, stores them in the teams prop of the Season instance and returns it.
     * @returns fetched teams
     */
    fetchTeams = async () => {
        for (const teamID of this.teamIDs) {
            const team = new team_1.default(teamID, this.year);
            await team.init();
            this.teams.push(team);
        }
        return this.teams;
    };
}
exports.default = Season;
