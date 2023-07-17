import { JSDOM } from 'jsdom';

import {
    applyFiltersToArray, applyFiltersToElement, fetchTeam, getIDfromURL, getIDsFromURLs, getPlayerURLfromID, getTeamURLfromID,
    removeDuplicates, removeWhitespaceAtEnds,
} from '../utils';
import Player from './player';

/**
 * an instance of a football team for a given season. 
 */
class Team {
    private id: number;

    private name: string;

    private coachName: string;

    /**
     * we hold the players, and basically everything else, as urls.
     * because we fetch the data and parse it only when we need it.
     */
    private playerIDs: number[];

    private leagueID: string;

    private season: number;

    private players: Player[];

    constructor(
        id: number,
        season?: number,
    ) {
        this.id = id;
        this.season = Number(season ?? new Date().getFullYear());
    }

    public async init() {
        let parser: JSDOM;
        let teamDocument: Document;

        const data = await fetchTeam(this.id, this.season);
        parser = new JSDOM(data);
        teamDocument = parser.window.document;

        this.name = applyFiltersToElement(
            teamDocument.querySelector('h1.data-header__headline-wrapper')?.textContent,
            removeWhitespaceAtEnds,
        );

        this.coachName = teamDocument.querySelector('div.container-main')?.getAttribute('href') ?? '';

        this.playerIDs = applyFiltersToArray(
            Array.from(teamDocument.querySelectorAll('td.hauptlink > div > span > a'))
                .map(a => a.getAttribute('href') ?? ''),
            removeDuplicates, getIDsFromURLs,
        )
            .map(Id => Number(Id));

        this.leagueID = getIDfromURL(teamDocument.querySelector('span.data-header__club > a')?.getAttribute('href') ?? '');

        this.players = [];
    }

    // getters
    public getID = () => this.id;

    public getName = () => this.name;

    public getCoachName = () => this.coachName;

    public getPlayerIDs = () => this.playerIDs;

    public getLeagueID = () => this.leagueID;

    public getSeason = () => this.season;

    public getPlayers = () => this.players;

    public getURL = () => getTeamURLfromID(this.id, this.season);

    public getPlayerURLs = () => this.playerIDs.map(id => getPlayerURLfromID(id));

    /**
     * fetches players, stores them in the teams prop of the Team instance and returns it.
     * @returns fetched players
     */
    public fetchPlayers = async () => {
        for (const playerID of this.playerIDs) {
            const player = new Player(playerID);
            await player.init();
            this.players.push(player);
        }

        return this.players;
    };
}

export default Team;
