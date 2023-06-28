import { utils } from '../scraper';
import League from './league';

class Season extends League {
    // year is the year the season started, also it is the seasonID
    private year: number;

    private teamURLs: string[];

    constructor(year: number, teamURLs: string[], title: LeagueTitle, seasons?: number[]) {
        super(title, seasons);
        this.year = year;
        this.teamURLs = teamURLs;
    }

    /**
     * @returns the year, which is also the seasonID
     */
    getYear(): number {
        return this.year;
    }

    getTeamIDs(): string[] {
        return this.teamURLs;
    }

    getURL(): string {
        return utils.leagueURLWithSeason(super.getURL(), this.year);
    }

    setYear(year: number): void {
        this.year = year;
    }

    setTeamIDs(teamIDs: string[]): void {
        this.teamURLs = teamIDs;
    }
}

export default Season;
