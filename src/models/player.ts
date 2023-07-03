import { appendURLToRoot, fetcher, removeDuplicates, removeNumbers, removeParantheticals, removeWhitespaceAtEnds } from '../utils';
import Team from './team';

import { JSDOM } from 'jsdom';

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

    constructor() {
    }

    public async init(url: string) {
        let parser: JSDOM;
        let playerDocument: Document;

        const data = await fetcher(url);
        parser = new JSDOM(data);
        playerDocument = parser.window.document;

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

        this.name = removeWhitespaceAtEnds(removeNumbers(playerDocument.querySelector('h1.data-header__headline-wrapper')?.textContent))
            ?? '';

        this.teamURLs = removeDuplicates(Array.from(playerDocument.querySelectorAll('a.tm-player-transfer-history-grid__club-link'))
            .map(a => appendURLToRoot(a.getAttribute('href')) ?? ''));

        this.teams = [];
    };

    public getURL = () => this.url;

    public getName = () => this.name;

    public getNationality = () => this.nationality;

    public getTeamURLs = () => this.teamURLs;

    public getBirthDate = () => this.birthDate;

    public getTeams = () => this.teams;

    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    public fetchTeams = async () => {
        for (const teamURL of this.teamURLs) {
            const team = new Team();
            await team.init(teamURL);
            this.teams.push(team);
        }

        return this.teams;
    };
}

export default Player;
