"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const player_1 = __importDefault(require("./player"));
const jsdom_1 = require("jsdom");
/**
 * an instance of a football team for a given season.
 */
class Team {
    url;
    name;
    coachName;
    /**
     * we hold the players, and basically everything else, as urls.
     * because we fetch the data and parse it only when we need it.
     */
    playerURLs;
    leagueURL;
    season;
    seasonURL;
    players;
    /**
     * parses the given url to extract the team's props and initialize the instance.
     * @param url
     */
    constructor() {
    }
    async init(url) {
        let parser;
        let teamDocument;
        const data = await (0, utils_1.fetcher)(url);
        parser = new jsdom_1.JSDOM(data);
        teamDocument = parser.window.document;
        this.url = url;
        this.name = (0, utils_1.applyFiltersToString)(teamDocument.querySelector('h1.data-header__headline-wrapper')?.textContent, utils_1.removeWhitespaceAtEnds);
        this.coachName = teamDocument.querySelector('div.container-main')?.getAttribute('href') ?? '';
        this.playerURLs = (0, utils_1.applyFiltersToArray)(Array.from(teamDocument.querySelectorAll('td.hauptlink > div > span > a'))
            .map(a => (0, utils_1.applyFiltersToString)(a.getAttribute('href'), utils_1.appendURLToRoot) ?? ''), utils_1.removeDuplicates);
        this.leagueURL = teamDocument.querySelector('span.data-header__club > a')?.getAttribute('href') ?? '';
        this.season = Number(url.match(/saison_id\/(\d+)/)?.[1]) ?? new Date().getFullYear();
        this.seasonURL = (0, utils_1.teamURLWithSeason)(this.leagueURL, this.season);
        this.players = [];
    }
    ;
    // getters
    getURL = () => this.url;
    getName = () => this.name;
    getCoachName = () => this.coachName;
    getPlayerURLs = () => this.playerURLs;
    getLeagueURL = () => this.leagueURL;
    getSeason = () => this.season;
    getSeasonURL = () => this.seasonURL;
    getPlayers = () => this.players;
    /**
     * fetches players, stores them in the teams prop of the Team instance and returns it.
     * @returns fetched players
     */
    fetchPlayers = async () => {
        for (const playerURL of this.playerURLs) {
            const player = new player_1.default();
            await player.init(playerURL);
            this.players.push(player);
        }
        return this.players;
    };
}
exports.default = Team;
