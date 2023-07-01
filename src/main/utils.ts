import { TRANSFERMARKT_URL } from './constants';

export const leagueURLWithSeason = (url: string, season: number) => {
    return `${url}/plus/?saison_id=${season}`;
};

export const teamURLWithSeason = (url: string, season: number) => {
    return `${url}/saison_id/${season}`;
};

export const appendURLToRoot = (url: string) => {
    return `${TRANSFERMARKT_URL}${url}`;
};

export const pluralSuffix = (count: number) => {
    return count > 1 ? 's' : '';
};

export const responseIsOK = (response: Response) => response.status === 200;

export const fetcher = async (url: string) => fetch(url).then((res) => {
    if (responseIsOK(res)) {
        return res.text();
    }
    throw new Error(`Response status ${res.status} for ${url}`);
});

export const removeWhitespaceAtEnds = (str: string) => str.replace(/^\s+|\s+$/g, '');

export const removeEmptyStrings = (arr: string[]) => arr.filter(str => str !== '');

export const removeDuplicates = (arr: string[]) => arr.filter((str, index) => arr.indexOf(str) === index);

export const removeHashLinks = (arr: string[]) => arr.filter(str => !str.startsWith('#'));

export const removeNumbers = (str: string) => str.replace(/[#\d]+/g, '');

export const removeParantheticals = (str: string) => str.replace(/\([^)]+\)/g, '');
