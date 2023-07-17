import { JSDOM } from 'jsdom';

import {
    appendURLToRoot, applyFiltersToArray, applyFiltersToElement, fetcher, getIDsFromURLs, getLeagueSeasonURLfromID, getTeamURLfromID,
    removeDuplicates,
    removeHashLinks, removeInvalidTeamLinks,
} from '../utils';
import League from './league';
import Team from './team';

class Season extends League {
    // year is the year the season started, also it is the seasonID
    private year: number;

    private teamIDs: number[];

    private teams: Team[];

    constructor(leagueId: string, year: number) {
        super(leagueId);

        this.year = year;
    }

    public async init() {
        let parser: JSDOM;
        let seasonDocument: Document;

        const data = await fetcher(this.getID());

        parser = new JSDOM(data);
        seasonDocument = parser.window.document;

        this.teamIDs = applyFiltersToArray(
            Array.from(seasonDocument.querySelectorAll('td.no-border-links > a'))
                .map(a => applyFiltersToElement(a.getAttribute('href'), appendURLToRoot) ?? ''),
            removeDuplicates, removeHashLinks, removeInvalidTeamLinks, getIDsFromURLs,
        )
            .map(id => Number(id));

        this.teams = [];

        return this;
    }

    public getYear = () => this.year;

    public getTeamIDs = () => this.teamIDs;

    public getTeams = () => this.teams;

    public getURL = () => getLeagueSeasonURLfromID(this.getID(), this.year);

    public getTeamURLs = () => this.teamIDs.map(id => getTeamURLfromID(id, this.year));

    /**
     * fetches teams, stores them in the teams prop of the Season instance and returns it.
     * @returns fetched teams
     */
    public fetchTeams = async () => {
        for (const teamID of this.teamIDs) {
            const team = new Team(teamID, this.year);
            await team.init();
            this.teams.push(team);
        }

        return this.teams;
    };
}

export default Season;
