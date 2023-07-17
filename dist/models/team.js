"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const utils_1 = require("../utils");
const player_1 = __importDefault(require("./player"));
/**
 * an instance of a football team for a given season.
 */
class Team {
    id;
    name;
    coachName;
    /**
     * we hold the players, and basically everything else, as urls.
     * because we fetch the data and parse it only when we need it.
     */
    playerIDs;
    leagueID;
    season;
    players;
    constructor(id, season) {
        this.id = id;
        this.season = Number(season ?? new Date().getFullYear());
    }
    async init() {
        let parser;
        let teamDocument;
        const data = await (0, utils_1.fetchTeam)(this.id);
        parser = new jsdom_1.JSDOM(data);
        teamDocument = parser.window.document;
        this.name = (0, utils_1.applyFiltersToElement)(teamDocument.querySelector('h1.data-header__headline-wrapper')?.textContent, utils_1.removeWhitespaceAtEnds);
        this.coachName = teamDocument.querySelector('div.container-main')?.getAttribute('href') ?? '';
        this.playerIDs = (0, utils_1.applyFiltersToArray)(Array.from(teamDocument.querySelectorAll('td.hauptlink > div > span > a'))
            .map(a => a.getAttribute('href') ?? ''), utils_1.removeDuplicates, utils_1.getIDsFromURLs)
            .map(Id => Number(Id));
        this.leagueID = (0, utils_1.getIDfromURL)(teamDocument.querySelector('span.data-header__club > a')?.getAttribute('href') ?? '');
        this.players = [];
    }
    // getters
    getID = () => this.id;
    getName = () => this.name;
    getCoachName = () => this.coachName;
    getPlayerIDs = () => this.playerIDs;
    getLeagueID = () => this.leagueID;
    getSeason = () => this.season;
    getPlayers = () => this.players;
    getURL = () => (0, utils_1.getTeamURLfromID)(this.id, this.season);
    getPlayerURLs = () => this.playerIDs.map(id => (0, utils_1.getPlayerURLfromID)(id));
    /**
     * fetches players, stores them in the teams prop of the Team instance and returns it.
     * @returns fetched players
     */
    fetchPlayers = async () => {
        for (const playerID of this.playerIDs) {
            const player = new player_1.default(playerID);
            await player.init();
            this.players.push(player);
        }
        return this.players;
    };
}
exports.default = Team;
