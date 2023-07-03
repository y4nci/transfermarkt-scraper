import { fetchLeagueSeason, getTeamURLsForLastNSeasons } from '../dist';

describe('main', () => {
    it('should fetch a league season', async () => {
        const leagueSeason = await fetchLeagueSeason('BUNDESLIGA', 2020);
        console.log(leagueSeason);
        expect(leagueSeason).toBeDefined();
    });

    it('should fetch team URLs for last n seasons', async () => {
        const teamURLs = await getTeamURLsForLastNSeasons('BUNDESLIGA', 3);
        console.log(teamURLs);
        expect(teamURLs).toBeDefined();
    });
});
