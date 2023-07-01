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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANTS = exports.Team = exports.Season = exports.Player = exports.League = exports.fetchLeagueSeason = void 0;
const CONSTANTS = __importStar(require("./constants"));
exports.CONSTANTS = CONSTANTS;
const models_1 = require("./models");
Object.defineProperty(exports, "League", { enumerable: true, get: function () { return models_1.League; } });
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return models_1.Player; } });
Object.defineProperty(exports, "Season", { enumerable: true, get: function () { return models_1.Season; } });
Object.defineProperty(exports, "Team", { enumerable: true, get: function () { return models_1.Team; } });
const utils_1 = require("./utils");
const fetchLeagueSeason = (leagueTitle, season) => {
    if (!(0, utils_1.seasonInRange)(season)) {
        throw new Error(`Season ${season} is not in range`);
    }
    const leagueSeason = new models_1.Season(CONSTANTS.LEAGUE_URLS[leagueTitle], season);
    return leagueSeason;
};
exports.fetchLeagueSeason = fetchLeagueSeason;
