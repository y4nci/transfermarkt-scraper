class Player {
    private name: string;

    private url: string;

    private seasonURLs: string[];

    constructor(name: string, url: string, seasonURLs: string[]) {
        this.name = name;
        this.url = url;
        this.seasonURLs = seasonURLs;
    }

    getName(): string {
        return this.name;
    }

    getURL(): string {
        return this.url;
    }

    getSeasonURLs(): string[] {
        return this.seasonURLs;
    }

    setName(name: string): void {
        this.name = name;
    }

    setURL(url: string): void {
        this.url = url;
    }

    setSeasonURLs(seasonURLs: string[]): void {
        this.seasonURLs = seasonURLs;
    }

    addSeasonURL(seasonURL: string): void {
        this.seasonURLs.push(seasonURL);
    }

    removeSeasonURL(seasonURL: string): void {
        this.seasonURLs = this.seasonURLs.filter(url => url !== seasonURL);
    }
}

export default Player;
