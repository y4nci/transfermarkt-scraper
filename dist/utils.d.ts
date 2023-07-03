import { Response } from 'node-fetch';
export declare const leagueURLWithSeason: (url: string, season: number) => string;
export declare const teamURLWithSeason: (url: string, season: number) => string;
export declare const appendURLToRoot: (url: string) => string;
/**
 * takes a transfer url and returns the team url.
 * for example: https://www.transfermarkt.com/fc-barcelona/transfers/verein/131/saison_id/2010 is converted to
 * https://www.transfermarkt.com/fc-barcelona/startseite/verein/131/saison_id/2010
 * @param url
 */
export declare const convertToTeamURL: (url: string) => string;
export declare const pluralSuffix: (count: number) => "s" | "";
export declare const responseIsOK: (response: Response) => boolean;
export declare const fetcher: (url: string) => Promise<string>;
export declare const removeWhitespaceAtEnds: (str: string) => string;
export declare const removeEmptyStrings: (arr: string[]) => string[];
export declare const removeDuplicates: (arr: string[]) => string[];
export declare const removeHashLinks: (arr: string[]) => string[];
export declare const removeNumbers: (str: string) => string;
export declare const removeParantheticals: (str: string) => string;
export declare const seasonInRange: (season: number) => boolean;
