import Team from './team';
declare class Player {
    private id;
    private name;
    private nationality;
    private teamIDs;
    private birthDate;
    /**
     * we only initialise this variable if the user wants it.
     */
    private teams;
    constructor(id: number);
    init(): Promise<void>;
    getID: () => number;
    getName: () => string;
    getNationality: () => string;
    getTeamIDs: () => number[];
    getBirthDate: () => Date;
    getTeams: () => Team[];
    getURL: () => string;
    getTeamURLs: () => string[];
    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    fetchTeams: () => Promise<Team[]>;
}
export default Player;
