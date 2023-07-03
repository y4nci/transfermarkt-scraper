import Team from '../dist/models/team';

describe('Team', () => {
    const team = new Team();

    it('should create a team', () => {
        expect(team).toBeDefined();
    });

    it('should initialize a team', async () => {
        await team.init('https://www.transfermarkt.com/fc-barcelona/startseite/verein/131/saison_id/2020');
        expect(team.getName()).toBe('FC Barcelona');
    });

    it('should fetch players', async () => {
        const expected = [
            'Marc-André ter Stegen', 'Neto',
            'Iñaki Peña',            'Arnau Tenas',
            'Ronald Araújo',         'Clément Lenglet',
            'Óscar Mingueza',        'Gerard Piqué',
            'Samuel Umtiti',         'Santiago Ramos Mingo',
            'Jordi Alba',            'Junior Firpo',
            'Sergiño Dest',          'Sergi Roberto',
            'Sergio Busquets',       'Matheus Fernandes',
            'Frenkie de Jong',       'Pedri',
            'Ilaix Moriba',          'Miralem Pjanic',
            'Riqui Puig',            'Carles Aleñá',
            'Rafinha',               'Ansu Fati',
            'Philippe Coutinho',     'Konrad de la Fuente',
            'Lionel Messi',          'Ousmane Dembélé',
            'Trincão',               'Álex Collado',
            'Antoine Griezmann',     'Martin Braithwaite'
        ];
        let equal = true;

        team.getPlayers().forEach((player) => {
            if (expected.indexOf(player.getName()) === -1) {
                equal = false;
            }
        });

        await team.fetchPlayers();
        expect(equal).toBe(true);
    }, 8_000_000);
});

