import * as CONSTANTS from './constants';
import { League, Player, Season, Team } from './models';
import { seasonInRange } from './utils';

export const fetchLeagueSeason = (leagueTitle: LeagueTitle, season: number) => {
    if (!seasonInRange(season)) {
        throw new Error(`Season ${season} is not in range`);
    }

    const leagueSeason = new Season(CONSTANTS.LEAGUE_URLS[leagueTitle], season);
    return leagueSeason;
};

export {
    League,
    Player,
    Season,
    Team,
    CONSTANTS,
};
