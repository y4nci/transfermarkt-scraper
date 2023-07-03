import Team from './team';
declare class Player {
    private url;
    private name;
    private nationality;
    private teamURLs;
    private birthDate;
    /**
     * we only initialise this variable if the user wants it.
     */
    private teams;
    constructor();
    init(url: string): Promise<void>;
    getURL: () => string;
    getName: () => string;
    getNationality: () => string;
    getTeamURLs: () => string[];
    getBirthDate: () => Date;
    getTeams: () => Team[];
    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    fetchTeams: () => Promise<Team[]>;
}
export default Player;
