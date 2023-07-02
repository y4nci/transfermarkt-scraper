import Season from '../dist/models/season';

describe('Season', () => {
    const season = new Season('https://www.transfermarkt.com/ligue-1/startseite/wettbewerb/FR1', 2023);

    it('should create a season', () => {
        expect(season.getYear()).toBe(2023);
    });
    
    it('should fetch the teams of the season', () => {
        const teams = season.getTeams();
        expect(teams.length).toBeGreaterThan(0);
    });
});
