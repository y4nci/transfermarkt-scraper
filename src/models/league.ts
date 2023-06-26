class League {
    private leagueID: number;

    private title: LeagueTitle;

    private seasons: number[];

    constructor(leagueID: number, title: LeagueTitle, seasons?: number[]) {
        this.leagueID = leagueID;
        this.title = title;
        this.seasons = seasons || [];
    }

    public getLeagueID(): number {
        return this.leagueID;
    }

    public getTitle(): LeagueTitle {
        return this.title;
    }

    public getSeasons(): number[] {
        return this.seasons;
    }

    public getURL(): string {
        return LEAGUE_URLS[this.title];
    }

    public setLeagueID(leagueID: number): void {
        this.leagueID = leagueID;
    }

    public setTitle(title: LeagueTitle): void {
        this.title = title;
    }

    public setSeasons(seasons: number[]): void {
        this.seasons = seasons;
    }
}

export default League;
