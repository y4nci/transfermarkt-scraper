import { TRANSFERMARKT_URL } from './constants';

import fetch, { Response, RequestInit } from 'node-fetch';

const requestInit: RequestInit = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    },
    method: 'GET',
    agent: null,
};

export const leagueURLWithSeason = (url: string, season: number) => {
    return `${url}/plus/?saison_id=${season}`;
};

export const teamURLWithSeason = (url: string, season: number) => {
    return `${url}/saison_id/${season}`;
};

export const appendURLToRoot = (url: string) => {
    return `${TRANSFERMARKT_URL}${url}`;
};

/**
 * takes a transfer url and returns the team url.
 * for example: https://www.transfermarkt.com/fc-barcelona/transfers/verein/131/saison_id/2010 is converted to
 * https://www.transfermarkt.com/fc-barcelona/startseite/verein/131/saison_id/2010
 * @param url 
 */
export const convertToTeamURL = (url: string) => {
    return url.replace(/transfers/, 'startseite');
};

export const pluralSuffix = (count: number) => {
    return count > 1 ? 's' : '';
};

export const responseIsOK = (response: Response) => response.status === 200;

export const fetcher = async (url: string) => fetch(url, requestInit).then((res) => {
    if (responseIsOK(res)) {
        return res.text();
    }
    throw new Error(`Response status ${res.status} for ${url}`);
});

export const removeWhitespaceAtEnds = (str: string) => str.replace(/^\s+|\s+$/g, '');

export const removeEmptyStrings = (arr: string[]) => arr.filter(str => str !== '');

export const removeDuplicates = (arr: string[]) => arr.filter((str, index) => 
    arr.indexOf(str) === index && arr.indexOf(str.replace('spielplan', 'startseite')) !== index);

export const removeHashLinks = (arr: string[]) => arr.filter(str => !str.includes('#'));

export const removeNumbers = (str: string) => str.replace(/[#\d]+/g, '');

export const removeParantheticals = (str: string) => str.replace(/\([^)]+\)/g, '');

export const seasonInRange = (season: number) => season >= 1980 && season <= new Date().getFullYear() + 1;
