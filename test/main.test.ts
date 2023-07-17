import { PREMIER_LEAGUE_IDS, TEAM_IDS, Team, fetchLeagueSeason } from '../dist';

const findPlayerWhoPlayedForBothTeams = async (team1ID: number, team2ID: number, since?: number) => {
    const players: string[] = [];

    for (let season = since ?? 2007; season <= new Date().getFullYear(); season++) {
        const firstTeam = new Team(team1ID, season);
        await firstTeam.init();

        const firstPlayers = await firstTeam.fetchPlayers();

        for (const player of firstPlayers) {
            if (player.getTeamIDs()
                .includes(team2ID) && players.indexOf(player.getName()) === -1) {
                players.push(player.getName());
            }
        }
    }

    console.log(players);
};

describe('main', () => {
    it('should fetch a league season', async () => {
        const expected = [
            'https://transfermarkt.com/fc-bayern-munchen/startseite/verein/27/saison_id/2020',
            'https://transfermarkt.com/borussia-dortmund/startseite/verein/16/saison_id/2020',
            'https://transfermarkt.com/rasenballsport-leipzig/startseite/verein/23826/saison_id/2020',
            'https://transfermarkt.com/bayer-04-leverkusen/startseite/verein/15/saison_id/2020',
            'https://transfermarkt.com/borussia-monchengladbach/startseite/verein/18/saison_id/2020',
            'https://transfermarkt.com/eintracht-frankfurt/startseite/verein/24/saison_id/2020',
            'https://transfermarkt.com/vfl-wolfsburg/startseite/verein/82/saison_id/2020',
            'https://transfermarkt.com/hertha-bsc/startseite/verein/44/saison_id/2020',
            'https://transfermarkt.com/tsg-1899-hoffenheim/startseite/verein/533/saison_id/2020',
            'https://transfermarkt.com/vfb-stuttgart/startseite/verein/79/saison_id/2020',
            'https://transfermarkt.com/1-fsv-mainz-05/startseite/verein/39/saison_id/2020',
            'https://transfermarkt.com/sc-freiburg/startseite/verein/60/saison_id/2020',
            'https://transfermarkt.com/fc-schalke-04/startseite/verein/33/saison_id/2020',
            'https://transfermarkt.com/1-fc-koln/startseite/verein/3/saison_id/2020',
            'https://transfermarkt.com/sv-werder-bremen/startseite/verein/86/saison_id/2020',
            'https://transfermarkt.com/fc-augsburg/startseite/verein/167/saison_id/2020',
            'https://transfermarkt.com/1-fc-union-berlin/startseite/verein/89/saison_id/2020',
            'https://transfermarkt.com/arminia-bielefeld/startseite/verein/10/saison_id/2020'
        ];
        let equal = true;
        const leagueSeason = await fetchLeagueSeason('BUNDESLIGA', 2020);

        expect(leagueSeason.getYear()).toBe(2020);
        
        for (let i = 0; i < expected.length; i++) {
            if (leagueSeason.getTeamURLs()[i] !== expected[i]) {
                equal = false;
                break;
            }
        }

        expect(equal).toBe(true);
    }, 10_000);

    it('should fetch a team based on id', async () => {
        const team = new Team(TEAM_IDS['MKE Ankaragücü'], 2004);
        await team.init();
        expect(team.getName()).toBe('MKE Ankaragücü');
        expect(team.getSeason()).toBe(2004);
    }, 9_000);

    it('should find all players who played for Real Madrid and Chelsea since 2007', async () => {
        const players: string[] = [];

        for (let season = 2007; season <= new Date().getFullYear(); season++) {
            const realMadridTeam = new Team(TEAM_IDS['Real Madrid'], season);
            await realMadridTeam.init();

            expect(realMadridTeam.getSeason()).toBe(season);
            
            const rmPlayers = await realMadridTeam.fetchPlayers();

            console.log(rmPlayers.map(player => player.getName()));

            for (const player of rmPlayers) {
                if (player.getTeamIDs()
                    .includes(TEAM_IDS['Chelsea FC']) && players.indexOf(player.getName()) === -1) {
                    players.push(player.getName());
                }
            }
        }

        console.log(players);
    }, 8_000_000);
});
