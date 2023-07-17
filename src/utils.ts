import fetch, { RequestInit, Response } from 'node-fetch';

import { TRANSFERMARKT_URL } from './constants';

const requestInit: RequestInit = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    },
    method: 'GET',
    agent: null,
};

const ensureSlash = (url: string) => url.endsWith('/') ? url : `${url}/`;

export const leagueURLWithSeason = (url: string, season: number) => {
    return `${ensureSlash(url)}plus/?saison_id=${season}`;
};

export const teamURLWithSeason = (url: string, season: number) => {
    return `${ensureSlash(url)}saison_id/${season}`;
};

export const appendURLToRoot = (url: string) => {
    return `${TRANSFERMARKT_URL}${url.startsWith('/') ? '' : '/'}${url}`;
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

export const teamLinkIsNotValid = (teamLink: string) => teamLink === '' || teamLink.includes('relegation');

export const removeInvalidTeamLinks = (teamLinks: string[]) => teamLinks.filter(val => !teamLinkIsNotValid(val));

export const getTeamURLfromID = (teamID: number, season?: number) => {
    const dryLink = `${TRANSFERMARKT_URL}/team/startseite/verein/${teamID}`;

    return season === undefined
        ? dryLink
        : teamURLWithSeason(dryLink, season);
};

export const getPlayerURLfromID = (playerID: number) => {
    return `${TRANSFERMARKT_URL}/player/profil/spieler/${playerID}`;
};

export const getLeagueSeasonURLfromID = (leagueID: string, season?: number) => {
    const dryLink = `${TRANSFERMARKT_URL}/league/startseite/wettbewerb/${leagueID}`;

    return season === undefined
        ? dryLink
        : leagueURLWithSeason(dryLink, season);
};

export const responseIsOK = (response: Response) => response.status === 200;

export const fetcher = async (url: string) => fetch(url, requestInit).then((res) => {
    if (responseIsOK(res)) {
        return res.text();
    }
    throw new Error(`Response status ${res.status} for ${url}`);
});

export const fetchTeam = async (teamId: number) => {
    const teamURL = `${TRANSFERMARKT_URL}/team/startseite/verein/${teamId}`;
    const data = await fetcher(teamURL);

    return data;
};

export const fetchPlayer = async (playerId: number) => {
    const playerURL = `${TRANSFERMARKT_URL}/player/profil/spieler/${playerId}`;
    const data = await fetcher(playerURL);

    return data;
};

export const fetchLeagueSeason = async (leagueId: string, season: number) => {
    const leagueSeasonURL = getLeagueSeasonURLfromID(leagueId, season);
    const data = await fetcher(leagueSeasonURL);

    return data;
};

export const getIDfromURL = (url: string) => {
    const splitted = removeSeasonInfoFromTeamURL(url).split('/');
    return splitted.pop() || splitted.pop();
};

export const getIDsFromURLs = (urls: string[]) => urls.map(getIDfromURL);

export const removeWhitespaceAtEnds = (str: string) => str.replace(/^\s+|\s+$/g, '');

export const removeEmptyStrings = (arr: string[]) => arr.filter(str => str !== '');

export const removeDuplicates = (arr: string[]) => (arr.map(v => v.replace('spielplan', 'startseite')))
    .filter((str, index) => arr.indexOf(str) === index);

export const removeHashLinks = (arr: string[]) => arr.filter(str => !str.includes('#'));

export const removeNumbers = (str: string) => str.replace(/[#\d]+/g, '');

export const removeParantheticals = (str: string) => str.replace(/\([^)]+\)/g, '');

export const removeSeasonInfoFromTeamURL = (str: string) => str.indexOf('saison_id') !== -1 ? str.replace(/saison_id\/\d+/, '') : str;

export const seasonInRange = (season: number) => season >= 1980 && season <= new Date().getFullYear() + 1;

type ArrayFilter = (arr: any[]) => any[];

type ElementFilter = (elem: any) => any;

export function applyFiltersToArray<ElementT>(arr: ElementT[], ...filters: ArrayFilter[]) {
    let result = arr;

    for (const arrFilter of filters) {
        result = arrFilter(result);
    }

    return result;
}

export function applyFiltersToElement<ElementT>(elem: ElementT, ...filters: ElementFilter[]) {
    let result = elem;

    for (const elemFilter of filters) {
        result = elemFilter(result);
    }

    return result;
}
