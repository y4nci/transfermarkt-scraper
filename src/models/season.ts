import { fetcher, removeDuplicates, removeHashLinks } from '../utils';
import League from './league';
import Team from './team';

class Season extends League {
    // year is the year the season started, also it is the seasonID
    private year: number;

    private teamURLs: string[];

    private teams: Team[];

    constructor(url: string, year: number) {
        const parser = new DOMParser();
        let seasonDocument: Document;

        fetcher(url).then((data) => {
            seasonDocument = parser.parseFromString(data, 'text/html');
        });

        super(url);

        this.year = year;

        this.teamURLs = removeHashLinks(removeDuplicates(Array.from(seasonDocument.querySelectorAll('td.no-border-links > a'))
            .map(a => a.getAttribute('href') ?? '')));

        this.teams = [];
    }

    public getYear = () => this.year;

    public getTeamURLs = () => this.teamURLs;

    public getTeams = () => this.teams;

    public setYear = (year: number) => {
        this.year = year;
    };

    public setTeamURLs = (teamURLs: string[]) => {
        this.teamURLs = teamURLs;
    };

    /**
     * fetches teams, stores them in the teams prop of the Season instance and returns it.
     * @returns fetched teams
     */
    public fetchTeams = () => {
        this.teamURLs.forEach((teamURL) => {
            this.teams.push(new Team(teamURL));
        });

        return this.teams;
    };
}

export default Season;
