export const leagueURLWithSeason = (url: string, season: number) => {
    return `${url}/plus/?saison_id=${season}`;
};

export const teamURLWithSeason = (url: string, season: number) => {
    return `${url}/saison_id/${season}`;
};

export const pluralSuffix = (count: number) => {
    return count > 1 ? 's' : '';
};
