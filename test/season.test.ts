import Season from '../dist/models/season';

describe('Season', () => {
    const season = new Season('https://www.transfermarkt.com/ligue-1/startseite/wettbewerb/FR1', 2016);

    it('should create a season', () => {
        expect(season.getYear()).toBe(2016);
    });

    it('should initialize a season', async () => {
        const expected = [
            'https://transfermarkt.com/as-monaco/startseite/verein/162/saison_id/2016',
            'https://transfermarkt.com/fc-paris-saint-germain/startseite/verein/583/saison_id/2016',
            'https://transfermarkt.com/ogc-nizza/startseite/verein/417/saison_id/2016',
            'https://transfermarkt.com/olympique-lyon/startseite/verein/1041/saison_id/2016',
            'https://transfermarkt.com/olympique-marseille/startseite/verein/244/saison_id/2016',
            'https://transfermarkt.com/fc-girondins-bordeaux/startseite/verein/40/saison_id/2016',
            'https://transfermarkt.com/fc-nantes/startseite/verein/995/saison_id/2016',
            'https://transfermarkt.com/as-saint-etienne/startseite/verein/618/saison_id/2016',
            'https://transfermarkt.com/fc-stade-rennes/startseite/verein/273/saison_id/2016',
            'https://transfermarkt.com/ea-guingamp/startseite/verein/855/saison_id/2016',
            'https://transfermarkt.com/losc-lille/startseite/verein/1082/saison_id/2016',
            'https://transfermarkt.com/sco-angers/startseite/verein/1420/saison_id/2016',
            'https://transfermarkt.com/fc-toulouse/startseite/verein/415/saison_id/2016',
            'https://transfermarkt.com/fc-metz/startseite/verein/347/saison_id/2016',
            'https://transfermarkt.com/montpellier-hsc/startseite/verein/969/saison_id/2016',
            'https://transfermarkt.com/dijon-fco/startseite/verein/2969/saison_id/2016',
            'https://transfermarkt.com/sm-caen/startseite/verein/1162/saison_id/2016',
            'https://transfermarkt.com/fc-lorient/startseite/verein/1158/saison_id/2016',
            'https://transfermarkt.com/as-nancy-lorraine/startseite/verein/1159/saison_id/2016',
            'https://transfermarkt.com/sc-bastia/startseite/verein/595/saison_id/2016'
        ];
        await season.init();

        expect(season.getTeamURLs()).toEqual(expected);
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
