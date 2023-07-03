import { LeagueName } from './constants';
import League from './models/league';
import Player from './models/player';
import Season from './models/season';
import Team from './models/team';
/**
 * fetches a league season from transfermarkt.com and initializes it.
 * @param league
 * @param season
 * @returns
 */
export declare const fetchLeagueSeason: (league: LeagueName, season: number) => Promise<Season>;
/**
 * fetches all the teams' urls who played in the given league for the last n seasons.
 * returns an array of urls corresponding to each team's page for the given season.
 * for removing the season info and duplicate urls, set removeSeasonInfo to true.
 * @param league
 * @param n
 * @param removeSeasonInfo removes the season info from the url and removes duplicates if set to true
 */
export declare const getTeamURLsForLastNSeasons: (league: LeagueName, n: number, removeSeasonInfo?: boolean) => Promise<string[]>;
export { League, Player, Season, Team, };
export * from './constants';
