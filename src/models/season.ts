import { fetcher, removeDuplicates, removeHashLinks } from '../utils';
import League from './league';

class Season extends League {
    // year is the year the season started, also it is the seasonID
    private year: number;

    private teamURLs: string[];

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
    }

    public getYear = () => this.year;

    public getTeamURLs = () => this.teamURLs;

    public setYear = (year: number) => {
        this.year = year;
    };

    public setTeamURLs = (teamURLs: string[]) => {
        this.teamURLs = teamURLs;
    };
}

export default Season;
