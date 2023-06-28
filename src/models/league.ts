class League {
    private title: LeagueTitle;

    private seasons: number[];

    constructor(title: LeagueTitle, seasons?: number[]) {
        this.title = title;
        this.seasons = seasons || [];
    }

    getTitle(): LeagueTitle {
        return this.title;
    }

    getSeasons(): number[] {
        return this.seasons;
    }

    getURL(): string {
        return LEAGUE_URLS[this.title];
    }

    setTitle(title: LeagueTitle): void {
        this.title = title;
    }

    setSeasons(seasons: number[]): void {
        this.seasons = seasons;
    }
}

export default League;
