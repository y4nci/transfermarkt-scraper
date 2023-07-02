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
    /**
     * parses the given url to extract the team's props and initialize the instance.
     * @param url
     */
    constructor(url) {
        // getters
        this.getURL = () => this.url;
        this.getName = () => this.name;
        this.getCoachName = () => this.coachName;
        this.getPlayerURLs = () => this.playerURLs;
        this.getLeagueURL = () => this.leagueURL;
        this.getSeason = () => this.season;
        this.getSeasonURL = () => this.seasonURL;
        this.getPlayers = () => this.players;
        // setters
        this.setURL = (url) => {
            this.url = url;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.setCoachName = (coachName) => {
            this.coachName = coachName;
        };
        this.setPlayerURLs = (playerURLs) => {
            this.playerURLs = playerURLs;
        };
        this.setLeagueURL = (leagueURL) => {
            this.leagueURL = leagueURL;
        };
        this.setSeason = (season) => {
            this.season = season;
        };
        this.setSeasonURL = (seasonURL) => {
            this.seasonURL = seasonURL;
        };
        /**
         * fetches players, stores them in the teams prop of the Team instance and returns it.
         * @returns fetched players
         */
        this.fetchPlayers = () => {
            this.playerURLs.forEach((playerURL) => {
                this.players.push(new player_1.default(playerURL));
            });
            return this.players;
        };
        let parser;
        let teamDocument;
        (0, utils_1.fetcher)(url).then((data) => {
            parser = new jsdom_1.JSDOM(data);
            teamDocument = parser.window.document;
        });
        this.url = url;
        this.name = (0, utils_1.removeWhitespaceAtEnds)(teamDocument.querySelector('h1.data-header__headline-wrapper').textContent);
        this.coachName = teamDocument.querySelector('div.container-main')?.getAttribute('href') ?? '';
        // TODO: maybe append these urls to the root url
        this.playerURLs = (0, utils_1.removeDuplicates)(Array.from(teamDocument.querySelectorAll('td.hauptlink > div > span > a'))
            .map(a => a.getAttribute('href') ?? ''));
        this.leagueURL = teamDocument.querySelector('span.data-header__club > a')?.getAttribute('href') ?? '';
        this.season = Number(url.match(/saison_id\/(\d+)/)?.[1]) ?? new Date().getFullYear();
        this.seasonURL = (0, utils_1.teamURLWithSeason)(this.leagueURL, this.season);
        this.players = [];
    }
}
exports.default = Team;
