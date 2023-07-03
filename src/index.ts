import { LeagueName, LEAGUE_URLS } from './constants';
import League from './models/league';
import Player from './models/player';
import Season from './models/season';
import Team from './models/team';
import { seasonInRange } from './utils';

/**
 * fetches a league season from transfermarkt.com and initializes it.
 * @param league 
 * @param season 
 * @returns 
 */
export const fetchLeagueSeason = async (league: LeagueName, season: number) => {
    if (!seasonInRange(season)) {
        throw new Error(`Season ${season} is not in range`);
    }

    const leagueSeason = new Season(LEAGUE_URLS[league], season);
    await leagueSeason.init();

    return leagueSeason;
};

/**
 * fetches all the teams who played in the given league for the last n seasons.
 * @param league 
 * @param n 
 */
export const getTeamURLsForLastNSeasons = async (league: LeagueName, n: number) => {
    const teamURLs: string[] = [];
    const currentSeason = new Date().getFullYear();
    const startSeason = currentSeason - n + 1;

    for (let season = startSeason; season <= currentSeason; season++) {
        const leagueSeason = await fetchLeagueSeason(league, season);
        teamURLs.push(...leagueSeason.getTeamURLs());
    }

    return teamURLs;
};

export {
    League,
    Player,
    Season,
    Team,
};

export * from './constants';
