import League from './league';
import Team from './team';
declare class Season extends League {
    private year;
    private teamIDs;
    private teams;
    constructor(leagueId: string, year: number);
    init(): Promise<this>;
    getYear: () => number;
    getTeamIDs: () => number[];
    getTeams: () => Team[];
    getURL: () => string;
    getTeamURLs: () => string[];
    /**
     * fetches teams, stores them in the teams prop of the Season instance and returns it.
     * @returns fetched teams
     */
    fetchTeams: () => Promise<Team[]>;
}
export default Season;
