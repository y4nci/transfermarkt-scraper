"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seasonInRange = exports.removeParantheticals = exports.removeNumbers = exports.removeHashLinks = exports.removeDuplicates = exports.removeEmptyStrings = exports.removeWhitespaceAtEnds = exports.fetcher = exports.responseIsOK = exports.pluralSuffix = exports.appendURLToRoot = exports.teamURLWithSeason = exports.leagueURLWithSeason = void 0;
const constants_1 = require("./constants");
const leagueURLWithSeason = (url, season) => {
    return `${url}/plus/?saison_id=${season}`;
};
exports.leagueURLWithSeason = leagueURLWithSeason;
const teamURLWithSeason = (url, season) => {
    return `${url}/saison_id/${season}`;
};
exports.teamURLWithSeason = teamURLWithSeason;
const appendURLToRoot = (url) => {
    return `${constants_1.TRANSFERMARKT_URL}${url}`;
};
exports.appendURLToRoot = appendURLToRoot;
const pluralSuffix = (count) => {
    return count > 1 ? 's' : '';
};
exports.pluralSuffix = pluralSuffix;
const responseIsOK = (response) => response.status === 200;
exports.responseIsOK = responseIsOK;
const fetcher = async (url) => fetch(url).then((res) => {
    if ((0, exports.responseIsOK)(res)) {
        console.log(`DAMMMM`, res.text());
        return res.text();
    }
    throw new Error(`Response status ${res.status} for ${url}`);
});
exports.fetcher = fetcher;
const removeWhitespaceAtEnds = (str) => str.replace(/^\s+|\s+$/g, '');
exports.removeWhitespaceAtEnds = removeWhitespaceAtEnds;
const removeEmptyStrings = (arr) => arr.filter(str => str !== '');
exports.removeEmptyStrings = removeEmptyStrings;
const removeDuplicates = (arr) => arr.filter((str, index) => arr.indexOf(str) === index);
exports.removeDuplicates = removeDuplicates;
const removeHashLinks = (arr) => arr.filter(str => !str.startsWith('#'));
exports.removeHashLinks = removeHashLinks;
const removeNumbers = (str) => str.replace(/[#\d]+/g, '');
exports.removeNumbers = removeNumbers;
const removeParantheticals = (str) => str.replace(/\([^)]+\)/g, '');
exports.removeParantheticals = removeParantheticals;
const seasonInRange = (season) => season >= 1980 && season <= new Date().getFullYear() + 1;
exports.seasonInRange = seasonInRange;
