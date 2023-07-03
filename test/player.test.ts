import Player from '../dist/models/player';

describe('Player', () => {
    const player = new Player();

    it('should create a player', () => {
        expect(player).toBeDefined();
    });

    it('should initialize a player', async () => {
        await player.init('https://www.transfermarkt.com/zlatan-ibrahimovi%C4%87/profil/spieler/3455');
        expect(player.getNationality()).toBe('Sweden');
    });

    it('should fetch teams', async () => {
        const expected = [
            'AC Milan',
            'Los Angeles Galaxy',
            'Manchester United',
            'Paris Saint-Germain',
            'FC Barcelona',
            'Inter Milan',
            'Juventus FC',
            'Ajax Amsterdam',
            'Malmö FF',
            'Malmö FF U19',
            'Malmö FF U17',
            'FBK Balkan',
            'Malmö ABI'
        ];
        await player.fetchTeams();
        expect(player.getTeams().map(team => team.getName())).toEqual(expected);
    }, 8_000_000);
});