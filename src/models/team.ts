import { utils } from '../scraper';

/**
 * an instance of a football team for a given season. 
 */
class Team {
    private url: string;

    private name: string;

    private city: string;

    private playerURLs: string[];

    private leagueTitle: LeagueTitle;

    private season: number;

    constructor(url: string, name: string, city: string, playerURLs: string[], leagueTitle: LeagueTitle, season: number) {
        this.url = url;
        this.name = name;
        this.city = city;
        this.playerURLs = playerURLs;
        this.leagueTitle = leagueTitle;
        this.season = season;
    }

    getURL(): string {
        return this.url;
    }

    getName(): string {
        return this.name;
    }

    getCity(): string {
        return this.city;
    }

    getPlayerURLs(): string[] {
        return this.playerURLs;
    }

    getLeagueTitle(): LeagueTitle {
        return this.leagueTitle;
    }

    getSeason(): number {
        return this.season;
    }

    setURL(url: string): void {
        this.url = url;
    }

    setName(name: string): void {
        this.name = name;
    }

    setCity(city: string): void {
        this.city = city;
    }

    setPlayerURLs(playerURLs: string[]): void {
        this.playerURLs = playerURLs;
    }

    setLeagueTitle(leagueTitle: LeagueTitle): void {
        this.leagueTitle = leagueTitle;
    }

    setSeason(season: number): void {
        this.season = season;
    }

    addPlayerURL(playerURL: string): void {
        this.playerURLs.push(playerURL);
    }

    removePlayerURL(playerURL: string): void {
        this.playerURLs = this.playerURLs.filter(url => url !== playerURL);
    }

    getLeagueURL(): string {
        return utils.leagueURLWithSeason(this.url, this.season);
    }
}

export default Team;
