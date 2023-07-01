class League {
    constructor(private url: string) {}

    getURL(): string {
        return this.url;
    }

    setURL(url: string): void {
        this.url = url;
    }
}

export default League;
