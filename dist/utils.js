"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyFiltersToElement = exports.applyFiltersToArray = exports.seasonInRange = exports.removeSeasonInfoFromTeamURL = exports.removeParantheticals = exports.removeNumbers = exports.removeHashLinks = exports.removeDuplicates = exports.removeEmptyStrings = exports.removeWhitespaceAtEnds = exports.getIDsFromURLs = exports.getIDfromURL = exports.fetchLeagueSeason = exports.fetchPlayer = exports.fetchTeam = exports.fetcher = exports.responseIsOK = exports.getLeagueSeasonURLfromID = exports.getPlayerURLfromID = exports.getTeamURLfromID = exports.removeInvalidTeamLinks = exports.teamLinkIsNotValid = exports.pluralSuffix = exports.convertToTeamURL = exports.appendURLToRoot = exports.teamURLWithSeason = exports.leagueURLWithSeason = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("./constants");
const requestInit = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    },
    method: 'GET',
    agent: null,
};
const ensureSlash = (url) => url.endsWith('/') ? url : `${url}/`;
const leagueURLWithSeason = (url, season) => {
    return `${ensureSlash(url)}plus/?saison_id=${season}`;
};
exports.leagueURLWithSeason = leagueURLWithSeason;
const teamURLWithSeason = (url, season) => {
    return `${ensureSlash(url)}saison_id/${season}`;
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
const removeInvalidTeamLinks = (teamLinks) => teamLinks.filter(val => !(0, exports.teamLinkIsNotValid)(val));
exports.removeInvalidTeamLinks = removeInvalidTeamLinks;
const getTeamURLfromID = (teamID, season) => {
    const dryLink = `${constants_1.TRANSFERMARKT_URL}/team/startseite/verein/${teamID}`;
    return season === undefined
        ? dryLink
        : (0, exports.teamURLWithSeason)(dryLink, season);
};
exports.getTeamURLfromID = getTeamURLfromID;
const getPlayerURLfromID = (playerID) => {
    return `${constants_1.TRANSFERMARKT_URL}/player/profil/spieler/${playerID}`;
};
exports.getPlayerURLfromID = getPlayerURLfromID;
const getLeagueSeasonURLfromID = (leagueID, season) => {
    const dryLink = `${constants_1.TRANSFERMARKT_URL}/league/startseite/wettbewerb/${leagueID}`;
    return season === undefined
        ? dryLink
        : (0, exports.leagueURLWithSeason)(dryLink, season);
};
exports.getLeagueSeasonURLfromID = getLeagueSeasonURLfromID;
const responseIsOK = (response) => response.status === 200;
exports.responseIsOK = responseIsOK;
const fetcher = async (url) => (0, node_fetch_1.default)(url, requestInit).then((res) => {
    if ((0, exports.responseIsOK)(res)) {
        return res.text();
    }
    throw new Error(`Response status ${res.status} for ${url}`);
});
exports.fetcher = fetcher;
const fetchTeam = async (teamId) => {
    const teamURL = `${constants_1.TRANSFERMARKT_URL}/team/startseite/verein/${teamId}`;
    const data = await (0, exports.fetcher)(teamURL);
    return data;
};
exports.fetchTeam = fetchTeam;
const fetchPlayer = async (playerId) => {
    const playerURL = `${constants_1.TRANSFERMARKT_URL}/player/profil/spieler/${playerId}`;
    const data = await (0, exports.fetcher)(playerURL);
    return data;
};
exports.fetchPlayer = fetchPlayer;
const fetchLeagueSeason = async (leagueId, season) => {
    const leagueSeasonURL = (0, exports.getLeagueSeasonURLfromID)(leagueId, season);
    const data = await (0, exports.fetcher)(leagueSeasonURL);
    return data;
};
exports.fetchLeagueSeason = fetchLeagueSeason;
const getIDfromURL = (url) => {
    const splitted = (0, exports.removeSeasonInfoFromTeamURL)(url).split('/');
    return splitted.pop() || splitted.pop();
};
exports.getIDfromURL = getIDfromURL;
const getIDsFromURLs = (urls) => urls.map(exports.getIDfromURL);
exports.getIDsFromURLs = getIDsFromURLs;
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
function applyFiltersToArray(arr, ...filters) {
    let result = arr;
    for (const arrFilter of filters) {
        result = arrFilter(result);
    }
    return result;
}
exports.applyFiltersToArray = applyFiltersToArray;
function applyFiltersToElement(elem, ...filters) {
    let result = elem;
    for (const elemFilter of filters) {
        result = elemFilter(result);
    }
    return result;
}
exports.applyFiltersToElement = applyFiltersToElement;
