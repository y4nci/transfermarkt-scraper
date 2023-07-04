"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfermarkt_scraper_utils = exports.Team = exports.Season = exports.Player = exports.League = exports.getTeamURLsForLastNSeasons = exports.fetchLeagueSeason = void 0;
const constants_1 = require("./constants");
const league_1 = __importDefault(require("./models/league"));
exports.League = league_1.default;
const player_1 = __importDefault(require("./models/player"));
exports.Player = player_1.default;
const season_1 = __importDefault(require("./models/season"));
exports.Season = season_1.default;
const team_1 = __importDefault(require("./models/team"));
exports.Team = team_1.default;
const utils_1 = require("./utils");
/**
 * fetches a league season from transfermarkt.com and initializes it.
 * @param league
 * @param season
 * @returns
 */
const fetchLeagueSeason = async (league, season) => {
    if (!(0, utils_1.seasonInRange)(season)) {
        throw new Error(`Season ${season} is not in range`);
    }
    const leagueSeason = new season_1.default(constants_1.LEAGUE_URLS[league], season);
    await leagueSeason.init();
    return leagueSeason;
};
exports.fetchLeagueSeason = fetchLeagueSeason;
/**
 * fetches all the teams' urls who played in the given league for the last n seasons.
 * returns an array of urls corresponding to each team's page for the given season.
 * for removing the season info and duplicate urls, set removeSeasonInfo to true.
 * @param league
 * @param n
 * @param removeSeasonInfo removes the season info from the url and removes duplicates if set to true
 */
const getTeamURLsForLastNSeasons = async (league, n, removeSeasonInfo = false) => {
    const teamURLs = [];
    const currentSeason = new Date().getFullYear();
    const startSeason = currentSeason - n + 1;
    for (let season = startSeason; season <= currentSeason; season++) {
        const leagueSeason = await (0, exports.fetchLeagueSeason)(league, season);
        teamURLs.push(...leagueSeason.getTeamURLs());
    }
    return removeSeasonInfo
        ? (0, utils_1.applyFiltersToArray)(teamURLs, (arr) => arr.map(utils_1.removeSeasonInfoFromTeamURL), utils_1.removeDuplicates) : teamURLs;
};
exports.getTeamURLsForLastNSeasons = getTeamURLsForLastNSeasons;
__exportStar(require("./constants"), exports);
exports.transfermarkt_scraper_utils = __importStar(require("./utils"));
