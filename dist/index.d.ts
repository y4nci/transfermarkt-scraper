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
 * fetches all the teams who played in the given league for the last n seasons.
 * @param league
 * @param n
 */
export declare const getTeamURLsForLastNSeasons: (league: LeagueName, n: number) => Promise<string[]>;
export { League, Player, Season, Team, };
export * from './constants';
