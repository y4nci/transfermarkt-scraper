import { LEAGUE_URLS, LeagueName, Team, fetchLeagueSeason, getTeamURLsForLastNSeasons } from '../dist';

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
        
        for (let i = 0; i < expected.length; i++) {
            if (leagueSeason.getTeamURLs()[i] !== expected[i]) {
                equal = false;
                break;
            }
        }

        expect(equal).toBe(true);
    });

    it('should print the team URLs for last n seasons for all leagues available', async () => {
        const leagueNames: string[] = Object.keys(LEAGUE_URLS);
        const teamURLs: { [key: string]: { [key: string]: string } } = {};

        for (const leagueName of leagueNames) {
            const lastNSeasonTeams = await getTeamURLsForLastNSeasons(leagueName as LeagueName, 1, true);
            if (!teamURLs[leagueName]) {
                teamURLs[leagueName] = {};
            }
            console.log(leagueName);
            for (const teamURL of lastNSeasonTeams) {
                const team = new Team();
                await team.init(teamURL);
                
                teamURLs[leagueName][team.getName()] = (teamURL);
            }

            console.log(teamURLs[leagueName]);
        }

        expect(true).toBe(true);
    }, 8_000_000);
});
