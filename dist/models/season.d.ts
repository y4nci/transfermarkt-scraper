import League from './league';
import Team from './team';
declare class Season extends League {
    private year;
    private teamURLs;
    private teams;
    constructor(url: string, year: number);
    init(): Promise<this>;
    getYear: () => number;
    getTeamURLs: () => string[];
    getTeams: () => Team[];
    setYear: (year: number) => void;
    setTeamURLs: (teamURLs: string[]) => void;
    /**
     * fetches teams, stores them in the teams prop of the Season instance and returns it.
     * @returns fetched teams
     */
    fetchTeams: () => Team[];
}
export default Season;
