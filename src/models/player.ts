import { JSDOM } from 'jsdom';

import {
    applyFiltersToArray, applyFiltersToElement, fetchPlayer, getIDsFromURLs, getPlayerURLfromID, removeDuplicates, removeInvalidTeamLinks,
    removeNumbers, removeParantheticals, removeSeasonInfoFromTeamURL, removeWhitespaceAtEnds,
} from '../utils';
import Team from './team';

class Player {
    private id: number;

    private name: string;

    private nationality: string;

    private teamIDs: number[];

    private birthDate: Date;

    /**
     * we only initialise this variable if the user wants it.
     */
    private teams: Team[];

    constructor(id: number) {
        this.id = id;
    }

    public async init() {
        let parser: JSDOM;
        let playerDocument: Document;

        const data = await fetchPlayer(this.id);
        parser = new JSDOM(data);
        playerDocument = parser.window.document;

        Array.from(playerDocument.querySelectorAll('span.data-header__content'))
            .forEach((span) => {
                const text = applyFiltersToElement(span.textContent ?? '', removeWhitespaceAtEnds);
                const itemprop = span.getAttribute('itemprop');

                if (itemprop === 'birthDate') {
                    this.birthDate = new Date(applyFiltersToElement(text, removeParantheticals));
                } else if (itemprop === 'nationality') {
                    this.nationality = text;
                }
            });

        this.name = applyFiltersToElement(
            playerDocument.querySelector('h1.data-header__headline-wrapper')?.textContent,
            removeNumbers, removeWhitespaceAtEnds,
        )
            ?? '';

        this.teamIDs = applyFiltersToArray(
            Array.from(playerDocument.querySelectorAll('a.tm-player-transfer-history-grid__club-link'))
                .map(a => applyFiltersToElement(a.getAttribute('href'), removeSeasonInfoFromTeamURL) ?? ''),
            removeDuplicates, removeInvalidTeamLinks, getIDsFromURLs,
        )
            .map(Id => Number(Id));

        this.teams = [];
    }

    public getID = () => this.id;

    public getName = () => this.name;

    public getNationality = () => this.nationality;

    public getTeamIDs = () => this.teamIDs;

    public getBirthDate = () => this.birthDate;

    public getTeams = () => this.teams;

    public getURL = () => getPlayerURLfromID(this.id);

    public getTeamURLs = () => this.teamIDs.map(id => getPlayerURLfromID(id));

    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    public fetchTeams = async () => {
        for (const teamID of this.teamIDs) {
            const team = new Team(teamID);
            await team.init();
            this.teams.push(team);
        }

        return this.teams;
    };
}

export default Player;
