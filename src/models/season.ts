import { utils } from '../scraper';
import League from './league';

class Season extends League {
    // year is the year the season started, also it is the seasonID
    private year: number;

    private teamIDs: number[];

    constructor(year: number, teamIDs: number[], leagueID: number, title: LeagueTitle, seasons?: number[]) {
        super(leagueID, title, seasons);
        this.year = year;
        this.teamIDs = teamIDs;
    }

    /**
     * @returns the year, which is also the seasonID
     */
    public getYear(): number {
        return this.year;
    }

    public getTeamIDs(): number[] {
        return this.teamIDs;
    }

    public getURL(): string {
        return utils.leagueURLWithSeason(super.getURL(), this.year);
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public setTeamIDs(teamIDs: number[]): void {
        this.teamIDs = teamIDs;
    }
}

export default Season;
