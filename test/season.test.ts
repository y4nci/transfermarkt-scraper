import Season from '../dist/models/season';

describe('Season', () => {
    const season = new Season('https://www.transfermarkt.com/ligue-1/startseite/wettbewerb/FR1', 2016);

    it('should create a season', () => {
        expect(season.getYear()).toBe(2016);
    });

    it('should initialize a season', async () => {
        const expected = [
            'https://transfermarkt.com/as-monaco/spielplan/verein/162/saison_id/2016',
            'https://transfermarkt.com/fc-paris-saint-germain/spielplan/verein/583/saison_id/2016',
            'https://transfermarkt.com/ogc-nizza/spielplan/verein/417/saison_id/2016',
            'https://transfermarkt.com/olympique-lyon/spielplan/verein/1041/saison_id/2016',
            'https://transfermarkt.com/olympique-marseille/spielplan/verein/244/saison_id/2016',
            'https://transfermarkt.com/fc-girondins-bordeaux/spielplan/verein/40/saison_id/2016',
            'https://transfermarkt.com/fc-nantes/spielplan/verein/995/saison_id/2016',
            'https://transfermarkt.com/as-saint-etienne/spielplan/verein/618/saison_id/2016',
            'https://transfermarkt.com/fc-stade-rennes/spielplan/verein/273/saison_id/2016',
            'https://transfermarkt.com/ea-guingamp/spielplan/verein/855/saison_id/2016',
            'https://transfermarkt.com/losc-lille/spielplan/verein/1082/saison_id/2016',
            'https://transfermarkt.com/sco-angers/spielplan/verein/1420/saison_id/2016',
            'https://transfermarkt.com/fc-toulouse/spielplan/verein/415/saison_id/2016',
            'https://transfermarkt.com/fc-metz/spielplan/verein/347/saison_id/2016',
            'https://transfermarkt.com/montpellier-hsc/spielplan/verein/969/saison_id/2016',
            'https://transfermarkt.com/dijon-fco/spielplan/verein/2969/saison_id/2016',
            'https://transfermarkt.com/sm-caen/spielplan/verein/1162/saison_id/2016',
            'https://transfermarkt.com/fc-lorient/spielplan/verein/1158/saison_id/2016',
            'https://transfermarkt.com/as-nancy-lorraine/spielplan/verein/1159/saison_id/2016',
            'https://transfermarkt.com/sc-bastia/spielplan/verein/595/saison_id/2016'
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
        await season.fetchTeams();
        expect(season.getTeams().map(team => team.getName())).toEqual(expected);
    }, 8_000_000);
});
