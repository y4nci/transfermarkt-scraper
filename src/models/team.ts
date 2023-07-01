import { utils } from '../main';

/**
 * an instance of a football team for a given season. 
 */
class Team {
    private url: string;

    private name: string;

    private coachName: string;

    /**
     * we hold the players, and basically everything else, as urls.
     * because we fetch the data and parse it only when we need it.
     */
    private playerURLs: string[];

    private leagueURL: string;

    private season: number;

    private seasonURL: string;

    /**
     * parses the given url to extract the team's props and initialize the instance.
     * @param url 
     */
    constructor(url: string) {
        const parser = new DOMParser();
        let teamDocument: Document;

        utils.fetcher(url).then((data) => {
            teamDocument = parser.parseFromString(data, 'text/html');
        });

        this.url = url;

        this.name = utils.removeWhitespaceAtEnds(teamDocument.querySelector('h1.data-header__headline-wrapper').textContent);

        this.coachName = teamDocument.querySelector('div.container-main')?.getAttribute('href') ?? '';

        // TODO: maybe append these urls to the root url
        this.playerURLs = utils.removeDuplicates(Array.from(teamDocument.querySelectorAll('td.hauptlink > div > span > a'))
            .map(a => a.getAttribute('href') ?? ''));

        this.leagueURL = teamDocument.querySelector('span.data-header__club > a')?.getAttribute('href') ?? '';

        this.season = Number(url.match(/saison_id\/(\d+)/)?.[1]) ?? new Date().getFullYear();

        this.seasonURL = utils.teamURLWithSeason(this.leagueURL, this.season);
    }

    // getters
    public getURL = () => this.url;

    public getName = () => this.name;

    public getCoachName = () => this.coachName;

    public getPlayerURLs = () => this.playerURLs;

    public getLeagueURL = () => this.leagueURL;

    public getSeason = () => this.season;

    public getSeasonURL = () => this.seasonURL;

    // setters
    public setURL = (url: string) => {
        this.url = url;
    };

    public setName = (name: string) => {
        this.name = name;
    };

    public setCoachName = (coachName: string) => {
        this.coachName = coachName;
    };

    public setPlayerURLs = (playerURLs: string[]) => {
        this.playerURLs = playerURLs;
    };

    public setLeagueURL = (leagueURL: string) => {
        this.leagueURL = leagueURL;
    };

    public setSeason = (season: number) => {
        this.season = season;
    };

    public setSeasonURL = (seasonURL: string) => {
        this.seasonURL = seasonURL;
    };
}

export default Team;
