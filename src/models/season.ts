import { fetcher, removeDuplicates, removeHashLinks } from '../utils';
import League from './league';
import Team from './team';

import { JSDOM } from 'jsdom';

class Season extends League {
    // year is the year the season started, also it is the seasonID
    private year: number;

    private teamURLs: string[];

    private teams: Team[];

    constructor(url: string, year: number) {
        super(url);

        this.year = year;
    }

    public async init() {
        let parser: JSDOM;
        let seasonDocument: Document;

        const data = await fetcher(this.getURL());
        
        parser = new JSDOM(data);
        seasonDocument = parser.window.document;

        this.teamURLs = removeHashLinks(removeDuplicates(Array.from(seasonDocument.querySelectorAll('td.no-border-links > a'))
            .map(a => a.getAttribute('href') ?? '')));

        this.teams = [];

        return this;
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
            const team = new Team();
            team.init(teamURL);
            this.teams.push(team);
        });

        return this.teams;
    };
}

export default Season;
