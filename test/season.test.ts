import Season from '../dist/models/season';

describe('Season', () => {
    const season = new Season('https://www.transfermarkt.com/ligue-1/startseite/wettbewerb/FR1', 2016);

    it('should create a season', () => {
        expect(season.getYear()).toBe(2016);
    });

    it('should initialize a season', async () => {
        await season.init();
        expect(season.getTeamURLs().length).toBeGreaterThan(0);
    });
});
