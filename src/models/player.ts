import { fetcher, removeDuplicates, removeNumbers, removeParantheticals, removeWhitespaceAtEnds } from '../utils';
import Team from './team';

class Player {
    private url: string;

    private name: string;

    private nationality: string;

    private teamURLs: string[];

    private birthDate: Date;

    /**
     * we only initialise this variable if the user wants it.
     */
    private teams: Team[];

    constructor(url: string) {
        const parser = new DOMParser();
        let playerDocument: Document;

        fetcher(url).then((data) => {
            playerDocument = parser.parseFromString(data, 'text/html');
        });

        this.url = url;

        Array.from(playerDocument.querySelectorAll('span.data-header__content'))
            .forEach((span) => {
                const text = removeWhitespaceAtEnds(span.textContent ?? '');
                const itemprop = span.getAttribute('itemprop');

                if (itemprop === 'birthDate') {
                    this.birthDate = new Date(removeParantheticals(text));
                } else if (itemprop === 'nationality') {
                    this.nationality = text;
                }
            });

        this.name = removeNumbers(playerDocument.querySelector('h1.data-header__headline-wrapper')?.textContent)
            ?? '';

        this.teamURLs = removeDuplicates(Array.from(playerDocument.querySelectorAll('a.tm-player-transfer-history-grid__club-link'))
            .map(a => a.getAttribute('href') ?? ''));

        this.teams = [];
    }

    public getURL = () => this.url;

    public getName = () => this.name;

    public getNationality = () => this.nationality;

    public getTeamURLs = () => this.teamURLs;

    public getBirthDate = () => this.birthDate;

    public getTeams = () => this.teams;

    public setURL = (url: string) => {
        this.url = url;
    };

    public setName = (name: string) => {
        this.name = name;
    };

    public setNationality = (nationality: string) => {
        this.nationality = nationality;
    };

    public setTeamURLs = (teamURLs: string[]) => {
        this.teamURLs = teamURLs;
    };

    public setBirthDate = (birthDate: Date) => {
        this.birthDate = birthDate;
    };

    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    public fetchTeams = () => {
        this.teamURLs.forEach((teamURL) => {
            this.teams.push(new Team(teamURL));
        });

        return this.teams;
    };
}

export default Player;
