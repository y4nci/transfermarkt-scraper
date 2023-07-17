import Season from '../dist/models/season';

describe('Season', () => {
    const season = new Season('https://www.transfermarkt.com/ligue-1/startseite/wettbewerb/FR1', 2016);

    it('should create a season', () => {
        expect(season.getYear()).toBe(2016);
    });

    it('should initialize a season', async () => {
        const expected = [
            162,
            583,
            417,
            1041,
            244,
            40,
            995,
            618,
            273,
            855,
            1082,
            1420,
            415,
            347,
            969,
            2969,
            1162,
            1158,
            1159,
            595
        ];
        let equal = true;
        await season.init();

        season.getTeamIDs().forEach((teamURL) => {
            if (expected.indexOf(teamURL) === -1) {
                equal = false;
            }
        });

        expect(equal).toBe(true);
    });

    it('should fetch teams', async () => {
        const expected = [
            'AS Monaco',           'Paris Saint-Germain',
            'OGC Nice',            'Olympique Lyon',
            'Olympique Marseille', 'FC Girondins Bordeaux',
            'FC Nantes',           'AS Saint-Étienne',
            'Stade Rennais FC',    'EA Guingamp',
            'LOSC Lille',          'Angers SCO',
            'FC Toulouse',         'FC Metz',
            'Montpellier HSC',     'Dijon FCO',
            'SM Caen',             'FC Lorient',
            'AS Nancy-Lorraine',   'SC Bastia'
        ];
        let equal = true;
        await season.fetchTeams();

        season.getTeams().forEach((team) => {
            if (expected.indexOf(team.getName()) === -1) {
                equal = false;
            }
        });

        expect(equal).toBe(true);
    }, 8_000_000);
});
