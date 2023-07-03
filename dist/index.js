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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = exports.Season = exports.Player = exports.League = exports.getTeamURLsForLastNSeasons = exports.fetchLeagueSeason = void 0;
const CONSTANTS = __importStar(require("./constants"));
const models_1 = require("./models");
Object.defineProperty(exports, "League", { enumerable: true, get: function () { return models_1.League; } });
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return models_1.Player; } });
Object.defineProperty(exports, "Season", { enumerable: true, get: function () { return models_1.Season; } });
Object.defineProperty(exports, "Team", { enumerable: true, get: function () { return models_1.Team; } });
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
    const leagueSeason = new models_1.Season(CONSTANTS.LEAGUE_URLS[league], season);
    await leagueSeason.init();
    return leagueSeason;
};
exports.fetchLeagueSeason = fetchLeagueSeason;
/**
 * fetches all the teams who played in the given league for the last n seasons.
 * @param league
 * @param n
 */
const getTeamURLsForLastNSeasons = async (league, n) => {
    const teamURLs = [];
    const currentSeason = new Date().getFullYear();
    const startSeason = currentSeason - n + 1;
    for (let season = startSeason; season <= currentSeason; season++) {
        const leagueSeason = await (0, exports.fetchLeagueSeason)(league, season);
        teamURLs.push(...leagueSeason.getTeamURLs());
    }
    return teamURLs;
};
exports.getTeamURLsForLastNSeasons = getTeamURLsForLastNSeasons;
__exportStar(require("./constants"), exports);
