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
    setURL: (url: string) => void;
    setName: (name: string) => void;
    setNationality: (nationality: string) => void;
    setTeamURLs: (teamURLs: string[]) => void;
    setBirthDate: (birthDate: Date) => void;
    /**
     * fetches teams, stores them in the teams prop of the Player instance and returns it.
     * @returns fetched teams
     */
    fetchTeams: () => Team[];
}
export default Player;
