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
 * fetches all the teams' ids who played in the given league for the last n seasons.
 * returns an array of urls corresponding to each team's page for the given season.
 * @param league
 * @param n
 */
export declare const getTeamIDsForLastNSeasons: (league: LeagueName, n: number) => Promise<number[]>;
export { League, Player, Season, Team, };
export * from './constants';
export * as transfermarkt_scraper_utils from './utils';
