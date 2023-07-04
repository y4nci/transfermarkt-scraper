import { appendURLToRoot, applyFiltersToArray, applyFiltersToString, fetcher, removeDuplicates, removeWhitespaceAtEnds, teamURLWithSeason } from '../utils';
import Player from './player';

import { JSDOM } from 'jsdom';

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

    private players: Player[];

    /**
     * parses the given url to extract the team's props and initialize the instance.
     * @param url 
     */
    constructor() {
    }

    public async init(url: string) {
        let parser: JSDOM;
        let teamDocument: Document;

        const data = await fetcher(url);
        parser = new JSDOM(data);
        teamDocument = parser.window.document;

        this.url = url;

        this.name = applyFiltersToString(teamDocument.querySelector('h1.data-header__headline-wrapper')?.textContent,
            removeWhitespaceAtEnds);

        this.coachName = teamDocument.querySelector('div.container-main')?.getAttribute('href') ?? '';

        this.playerURLs = applyFiltersToArray(Array.from(teamDocument.querySelectorAll('td.hauptlink > div > span > a'))
            .map(a => applyFiltersToString(a.getAttribute('href'), appendURLToRoot) ?? ''), removeDuplicates);

        this.leagueURL = teamDocument.querySelector('span.data-header__club > a')?.getAttribute('href') ?? '';

        this.season = Number(url.match(/saison_id\/(\d+)/)?.[1] ?? new Date().getFullYear());

        this.seasonURL = teamURLWithSeason(this.leagueURL, this.season);

        this.players = [];
    };

    // getters
    public getURL = () => this.url;

    public getName = () => this.name;

    public getCoachName = () => this.coachName;

    public getPlayerURLs = () => this.playerURLs;

    public getLeagueURL = () => this.leagueURL;

    public getSeason = () => this.season;

    public getSeasonURL = () => this.seasonURL;

    public getPlayers = () => this.players;

    /**
     * fetches players, stores them in the teams prop of the Team instance and returns it.
     * @returns fetched players
     */
    public fetchPlayers = async () => {
        for (const playerURL of this.playerURLs) {
            const player = new Player();
            await player.init(playerURL);
            this.players.push(player);
        }

        return this.players;
    };
}

export default Team;
