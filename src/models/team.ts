class Team {
    private teamID: number;

    private name: string;

    private city: string;

    private playerIDs: number[];

    private leagueID: number;

    private season: number;

    constructor(teamID: number, name: string, city: string, playerIDs: number[], leagueID: number, season: number) {
        this.teamID = teamID;
        this.name = name;
        this.city = city;
        this.playerIDs = playerIDs;
        this.leagueID = leagueID;
        this.season = season;
    }

    public getTeamID(): number {
        return this.teamID;
    }

    public getName(): string {
        return this.name;
    }

    public getCity(): string {
        return this.city;
    }

    public getPlayerIDs(): number[] {
        return this.playerIDs;
    }

    public getLeagueID(): number {
        return this.leagueID;
    }

    public getSeason(): number {
        return this.season;
    }

    public setTeamID(teamID: number): void {
        this.teamID = teamID;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public setPlayerIDs(playerIDs: number[]): void {
        this.playerIDs = playerIDs;
    }

    public setLeagueID(leagueID: number): void {
        this.leagueID = leagueID;
    }

    public setSeason(season: number): void {
        this.season = season;
    }
}

export default Team;
