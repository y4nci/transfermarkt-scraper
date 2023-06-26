class Player {
    private name: string;

    private playerID: number;

    private teamID: number;

    constructor(name: string, playerID: number, teamID: number) {
        this.name = name;
        this.playerID = playerID;
        this.teamID = teamID;
    }

    public getName(): string {
        return this.name;
    }

    public getPlayerID(): number {
        return this.playerID;
    }

    public getTeamID(): number {
        return this.teamID;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setPlayerID(playerID: number): void {
        this.playerID = playerID;
    }

    public setTeamID(teamID: number): void {
        this.teamID = teamID;
    }
}

export default Player;
