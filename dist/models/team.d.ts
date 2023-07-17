import Player from './player';
/**
 * an instance of a football team for a given season.
 */
declare class Team {
    private id;
    private name;
    private coachName;
    /**
     * we hold the players, and basically everything else, as urls.
     * because we fetch the data and parse it only when we need it.
     */
    private playerIDs;
    private leagueID;
    private season;
    private players;
    constructor(id: number, season?: number);
    init(): Promise<void>;
    getID: () => number;
    getName: () => string;
    getCoachName: () => string;
    getPlayerIDs: () => number[];
    getLeagueID: () => string;
    getSeason: () => number;
    getPlayers: () => Player[];
    getURL: () => string;
    getPlayerURLs: () => string[];
    /**
     * fetches players, stores them in the teams prop of the Team instance and returns it.
     * @returns fetched players
     */
    fetchPlayers: () => Promise<Player[]>;
}
export default Team;
