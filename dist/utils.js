"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyFiltersToString = exports.applyFiltersToArray = exports.seasonInRange = exports.removeSeasonInfoFromTeamURL = exports.removeParantheticals = exports.removeNumbers = exports.removeHashLinks = exports.removeDuplicates = exports.removeEmptyStrings = exports.removeWhitespaceAtEnds = exports.fetcher = exports.responseIsOK = exports.removeInvalidTeamLinks = exports.teamLinkIsNotValid = exports.pluralSuffix = exports.convertToTeamURL = exports.appendURLToRoot = exports.teamURLWithSeason = exports.leagueURLWithSeason = void 0;
const constants_1 = require("./constants");
const node_fetch_1 = __importDefault(require("node-fetch"));
const requestInit = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    },
    method: 'GET',
    agent: null,
};
const leagueURLWithSeason = (url, season) => {
    return `${url}${url.endsWith('/') ? '' : '/'}plus/?saison_id=${season}`;
};
exports.leagueURLWithSeason = leagueURLWithSeason;
const teamURLWithSeason = (url, season) => {
    return `${url}${url.endsWith('/') ? '' : '/'}/saison_id/${season}`;
};
exports.teamURLWithSeason = teamURLWithSeason;
const appendURLToRoot = (url) => {
    return `${constants_1.TRANSFERMARKT_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};
exports.appendURLToRoot = appendURLToRoot;
/**
 * takes a transfer url and returns the team url.
 * for example: https://www.transfermarkt.com/fc-barcelona/transfers/verein/131/saison_id/2010 is converted to
 * https://www.transfermarkt.com/fc-barcelona/startseite/verein/131/saison_id/2010
 * @param url
 */
const convertToTeamURL = (url) => {
    return url.replace(/transfers/, 'startseite');
};
exports.convertToTeamURL = convertToTeamURL;
const pluralSuffix = (count) => {
    return count > 1 ? 's' : '';
};
exports.pluralSuffix = pluralSuffix;
const teamLinkIsNotValid = (teamLink) => teamLink === '' || teamLink.includes('relegation');
exports.teamLinkIsNotValid = teamLinkIsNotValid;
const removeInvalidTeamLinks = (teamLinks) => teamLinks.filter((val) => !(0, exports.teamLinkIsNotValid)(val));
exports.removeInvalidTeamLinks = removeInvalidTeamLinks;
const responseIsOK = (response) => response.status === 200;
exports.responseIsOK = responseIsOK;
const fetcher = async (url) => (0, node_fetch_1.default)(url, requestInit).then((res) => {
    if ((0, exports.responseIsOK)(res)) {
        return res.text();
    }
    throw new Error(`Response status ${res.status} for ${url}`);
});
exports.fetcher = fetcher;
const removeWhitespaceAtEnds = (str) => str.replace(/^\s+|\s+$/g, '');
exports.removeWhitespaceAtEnds = removeWhitespaceAtEnds;
const removeEmptyStrings = (arr) => arr.filter(str => str !== '');
exports.removeEmptyStrings = removeEmptyStrings;
const removeDuplicates = (arr) => (arr.map(v => v.replace('spielplan', 'startseite')))
    .filter((str, index) => arr.indexOf(str) === index);
exports.removeDuplicates = removeDuplicates;
const removeHashLinks = (arr) => arr.filter(str => !str.includes('#'));
exports.removeHashLinks = removeHashLinks;
const removeNumbers = (str) => str.replace(/[#\d]+/g, '');
exports.removeNumbers = removeNumbers;
const removeParantheticals = (str) => str.replace(/\([^)]+\)/g, '');
exports.removeParantheticals = removeParantheticals;
const removeSeasonInfoFromTeamURL = (str) => str.indexOf('saison_id') !== -1 ? str.replace(/saison_id\/\d+/, '') : str;
exports.removeSeasonInfoFromTeamURL = removeSeasonInfoFromTeamURL;
const seasonInRange = (season) => season >= 1980 && season <= new Date().getFullYear() + 1;
exports.seasonInRange = seasonInRange;
const applyFiltersToArray = (arr, ...filters) => {
    let result = arr;
    for (const arrFilter of filters) {
        result = arrFilter(result);
    }
    return result;
};
exports.applyFiltersToArray = applyFiltersToArray;
const applyFiltersToString = (str, ...filters) => {
    let result = str;
    for (const strFilter of filters) {
        result = strFilter(result);
    }
    return result;
};
exports.applyFiltersToString = applyFiltersToString;
