import Player from './player';
/**
 * an instance of a football team for a given season.
 */
declare class Team {
    private url;
    private name;
    private coachName;
    /**
     * we hold the players, and basically everything else, as urls.
     * because we fetch the data and parse it only when we need it.
     */
    private playerURLs;
    private leagueURL;
    private season;
    private seasonURL;
    private players;
    /**
     * parses the given url to extract the team's props and initialize the instance.
     * @param url
     */
    constructor();
    init(url: string): Promise<void>;
    getURL: () => string;
    getName: () => string;
    getCoachName: () => string;
    getPlayerURLs: () => string[];
    getLeagueURL: () => string;
    getSeason: () => number;
    getSeasonURL: () => string;
    getPlayers: () => Player[];
    /**
     * fetches players, stores them in the teams prop of the Team instance and returns it.
     * @returns fetched players
     */
    fetchPlayers: () => Promise<Player[]>;
}
export default Team;
