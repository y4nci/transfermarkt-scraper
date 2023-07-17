import { LEAGUE_IDS, LeagueName } from './constants';
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

    const leagueSeason = new Season(LEAGUE_IDS[league], season);
    await leagueSeason.init();

    return leagueSeason;
};

/**
 * fetches all the teams' ids who played in the given league for the last n seasons.
 * returns an array of urls corresponding to each team's page for the given season.
 * @param league 
 * @param n 
 */
export const getTeamIDsForLastNSeasons = async (league: LeagueName, n: number) => {
    const teamIDs: number[] = [];
    const currentSeason = new Date().getFullYear();
    const startSeason = currentSeason - n + 1;

    for (let season = startSeason; season <= currentSeason; season++) {
        const leagueSeason = await fetchLeagueSeason(league, season);
        teamIDs.push(...leagueSeason.getTeamIDs());
    }

    return teamIDs;
};

export {
    League,
    Player,
    Season,
    Team,
};

export * from './constants';

export * as transfermarkt_scraper_utils from './utils';
