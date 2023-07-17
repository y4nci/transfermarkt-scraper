export declare const TRANSFERMARKT_URL = "https://transfermarkt.com";
export declare const LEAGUE_IDS: {
    PREMIER_LEAGUE: string;
    LA_LIGA: string;
    SERIE_A: string;
    BUNDESLIGA: string;
    LIGUE_1: string;
    SUPER_LIG: string;
    EREDIVISIE: string;
    PRIMEIRA_LIGA: string;
    SCOTTISH_PREMIERSHIP: string;
    JUPILER_PRO_LEAGUE: string;
    AUSTRIAN_BUNDESLIGA: string;
    UKRAINIAN_PREMIER_LEAGUE: string;
    RUSSIAN_PREMIER_LEAGUE: string;
    SUPER_LEAGUE_GREECE: string;
    SUPER_LEAGUE_SWITZERLAND: string;
    CROATIAN_FIRST_FOOTBALL_LEAGUE: string;
    POLISH_EKSTRAKLASA: string;
    DANISH_SUPERLIGA: string;
    CZECH_FIRST_LEAGUE: string;
    ELITESERIEN: string;
    ALLSVENSKAN: string;
    LIGAT_HAAL: string;
    NEMZETI_BAJNOKSAG: string;
    EFBET_LIGA: string;
};
export type LeagueName = keyof typeof LEAGUE_IDS;
export declare const PREMIER_LEAGUE_IDS: {
    'Manchester City': number;
    'Arsenal FC': number;
    'Chelsea FC': number;
    'Liverpool FC': number;
    'Manchester United': number;
    'Tottenham Hotspur': number;
    'Newcastle United': number;
    'Aston Villa': number;
    'Brighton & Hove Albion': number;
    'West Ham United': number;
    'Brentford FC': number;
    'Wolverhampton Wanderers': number;
    'Everton FC': number;
    'Nottingham Forest': number;
    'Crystal Palace': number;
    'AFC Bournemouth': number;
    'Fulham FC': number;
    'Burnley FC': number;
    'Sheffield United': number;
    'Luton Town': number;
};
export declare const LA_LIGA_IDS: {
    'Real Madrid': number;
    'FC Barcelona': number;
    'Atl\u00E9tico de Madrid': number;
    'Real Sociedad': number;
    'Villarreal CF': number;
    'Real Betis Balompi\u00E9': number;
    'Sevilla FC': number;
    'Athletic Bilbao': number;
    'Valencia CF': number;
    'CA Osasuna': number;
    'Celta de Vigo': number;
    'Getafe CF': number;
    'RCD Mallorca': number;
    'Girona FC': number;
    'UD Almer\u00EDa': number;
    'Rayo Vallecano': number;
    'C\u00E1diz CF': number;
    'Granada CF': number;
    'UD Las Palmas': number;
    'Deportivo Alav\u00E9s': number;
};
export declare const SERIE_A_IDS: {
    'SSC Napoli': number;
    'Inter Milan': number;
    'Juventus FC': number;
    'AC Milan': number;
    'Atalanta BC': number;
    'AS Roma': number;
    'SS Lazio': number;
    'ACF Fiorentina': number;
    'US Sassuolo': number;
    'Udinese Calcio': number;
    'Torino FC': number;
    'Bologna FC 1909': number;
    'AC Monza': number;
    'US Salernitana 1919': number;
    'US Lecce': number;
    'FC Empoli': number;
    'Hellas Verona': number;
    'Genoa CFC': number;
    'Cagliari Calcio': number;
    'Frosinone Calcio': number;
};
export declare const BUNDESLIGA_IDS: {
    'Bayern Munich': number;
    'Bayer 04 Leverkusen': number;
    'Borussia Dortmund': number;
    'RB Leipzig': number;
    'Eintracht Frankfurt': number;
    'VfL Wolfsburg': number;
    'Borussia M\u00F6nchengladbach': number;
    'SC Freiburg': number;
    '1.FC Union Berlin': number;
    'FC Augsburg': number;
    '1.FSV Mainz 05': number;
    'VfB Stuttgart': number;
    'TSG 1899 Hoffenheim': number;
    'SV Werder Bremen': number;
    '1.FC K\u00F6ln': number;
    'VfL Bochum': number;
    '1.FC Heidenheim 1846': number;
    'SV Darmstadt 98': number;
};
export declare const LIGUE_1_IDS: {
    'Paris Saint-Germain': number;
    'AS Monaco': number;
    'Stade Rennais FC': number;
    'Olympique Marseille': number;
    'Olympique Lyon': number;
    'OGC Nice': number;
    'RC Lens': number;
    'LOSC Lille': number;
    'Montpellier HSC': number;
    'FC Nantes': number;
    'Stade Reims': number;
    'FC Lorient': number;
    'RC Strasbourg Alsace': number;
    'FC Toulouse': number;
    'Stade Brestois 29': number;
    'Clermont Foot 63': number;
    'FC Metz': number;
    'Le Havre AC': number;
};
export declare const SUPER_LIG_IDS: {
    Fenerbahce: number;
    Galatasaray: number;
    Trabzonspor: number;
    'Besiktas JK': number;
    'Basaksehir FK': number;
    Alanyaspor: number;
    'Adana Demirspor': number;
    Antalyaspor: number;
    Konyaspor: number;
    'MKE Ankarag\u00FCc\u00FC': number;
    Hatayspor: number;
    'Gaziantep FK': number;
    'Fatih Karag\u00FCmr\u00FCk': number;
    Kayserispor: number;
    Samsunspor: number;
    Sivasspor: number;
    Kasimpasa: number;
    'Caykur Rizespor': number;
    Istanbulspor: number;
    Pendikspor: number;
};
export declare const EREDIVISIE_IDS: {
    'Ajax Amsterdam': number;
    'Feyenoord Rotterdam': number;
    'PSV Eindhoven': number;
    'AZ Alkmaar': number;
    'FC Utrecht': number;
    'Twente Enschede FC': number;
    'SC Heerenveen': number;
    'Sparta Rotterdam': number;
    'Vitesse Arnhem': number;
    'NEC Nijmegen': number;
    'Go Ahead Eagles': number;
    'Fortuna Sittard': number;
    'FC Volendam': number;
    'Heracles Almelo': number;
    'PEC Zwolle': number;
    'Excelsior Rotterdam': number;
    'Almere City FC': number;
    'RKC Waalwijk': number;
};
export declare const PRIMEIRA_LIGA_IDS: {
    'SL Benfica': number;
    'Sporting CP': number;
    'FC Porto': number;
    'SC Braga': number;
    'Vit\u00F3ria Guimar\u00E3es SC': number;
    'FC Famalic\u00E3o': number;
    'Gil Vicente FC': number;
    'Boavista FC': number;
    'FC Arouca': number;
    'Portimonense SC': number;
    'GD Estoril Praia': number;
    'Rio Ave FC': number;
    'Casa Pia AC': number;
    'FC Vizela': number;
    'GD Chaves': number;
    'Moreirense FC': number;
    'SC Farense': number;
    'CF Estrela Amadora SAD': number;
};
export declare const SCOTTISH_PREMIERSHIP_IDS: {
    'Celtic FC': number;
    'Rangers FC': number;
    'Heart of Midlothian FC': number;
    'Aberdeen FC': number;
    'Hibernian FC': number;
    'Livingston FC': number;
    'Ross County FC': number;
    'St. Mirren FC': number;
    'Motherwell FC': number;
    'St. Johnstone FC': number;
    'Kilmarnock FC': number;
    'Dundee FC': number;
};
export declare const JUPILER_PRO_LEAGUE_IDS: {
    'Club Brugge KV': number;
    'KRC Genk': number;
    'KAA Gent': number;
    'Royal Antwerp FC': number;
    'RSC Anderlecht': number;
    'Royale Union Saint Gilloise': number;
    'RSC Charleroi': number;
    'Standard Li\u00E8ge': number;
    'Oud-Heverlee Leuven': number;
    'Cercle Brugge': number;
    'KV Mechelen': number;
    'KVC Westerlo': number;
    'KV Kortrijk': number;
    'KAS Eupen': number;
    'Sint-Truidense VV': number;
    'RWD Molenbeek': number;
};
export declare const AUSTRIAN_BUNDESLIGA_IDS: {
    'Red Bull Salzburg': number;
    'SK Sturm Graz': number;
    LASK: number;
    'Rapid Vienna': number;
    'Austria Vienna': number;
    'Wolfsberger AC': number;
    'SK Austria Klagenfurt': number;
    'WSG Tirol': number;
    'SCR Altach': number;
    'TSV Hartberg': number;
    'SC Austria Lustenau': number;
    'FC Blau-Weiss Linz': number;
};
export declare const UKRAINIAN_PREMIER_LEAGUE_IDS: {
    'Shakhtar Donetsk': number;
    'Dynamo Kyiv': number;
    'SK Dnipro-1': number;
    'Zorya Lugansk': number;
    'Vorskla Poltava': number;
    'Kolos Kovalivka': number;
    'FK Oleksandriya': number;
    'Rukh Lviv': number;
    'FK Polissya Zhytomyr': number;
    'Kryvbas Kryvyi Rig': number;
    'Metalist 1925 Kharkiv': number;
    'Chornomorets Odessa': number;
    'NK Veres Rivne': number;
    'LNZ Cherkasy': number;
    'FK Obolon Kyiv': number;
    'FK Minaj': number;
};
export declare const RUSSIAN_PREMIER_LEAGUE_IDS: {
    'Zenit St. Petersburg': number;
    'CSKA Moscow': number;
    'Dynamo Moscow': number;
    'Spartak Moscow': number;
    'Lokomotiv Moscow': number;
    'FK Krasnodar': number;
    'FK Rostov': number;
    'Krylya Sovetov Samara': number;
    'Akhmat Grozny': number;
    'FC Sochi': number;
    'Rubin Kazan': number;
    'FK Orenburg': number;
    'Ural Yekaterinburg': number;
    'FC Pari Nizhniy Novgorod': number;
    'Baltika Kaliningrad': number;
    'Fakel Voronezh': number;
};
export declare const SUPER_LEAGUE_GREECE_IDS: {
    'Olympiacos Piraeus': number;
    'AEK Athens': number;
    'PAOK Thessaloniki': number;
    'Panathinaikos Athens': number;
    'Aris Thessaloniki': number;
    'OFI Crete FC': number;
    'Panetolikos GFS': number;
    'Volos NPS': number;
    'Asteras Tripolis': number;
    'PAS Giannina': number;
    'Atromitos Athens': number;
    'PAS Lamia 1964': number;
    Panserraikos: number;
    'AE Kifisias': number;
};
export declare const SUPER_LEAGUE_SWITZERLAND_IDS: {
    'BSC Young Boys': number;
    'FC Basel 1893': number;
    'FC Luzern': number;
    'FC Lugano': number;
    'Servette FC': number;
    'FC St. Gallen 1879': number;
    'FC Z\u00FCrich': number;
    'Grasshopper Club Zurich': number;
    'FC Lausanne-Sport': number;
    'FC Winterthur': number;
    'FC Stade-Lausanne-Ouchy': number;
    'Yverdon Sport FC': number;
};
export declare const CROATIAN_FIRST_FOOTBALL_LEAGUE_IDS: {
    'GNK Dinamo Zagreb': number;
    'HNK Hajduk Split': number;
    'HNK Rijeka': number;
    'NK Osijek': number;
    'NK Lokomotiva Zagreb': number;
    'HNK Gorica': number;
    'NK Varazdin': number;
    'NK Istra 1961': number;
    'Slaven Belupo Koprivnica': number;
    'NK Rudes': number;
};
export declare const POLISH_EKSTRAKLASA_IDS: {
    'Rakow Czestochowa': number;
    'Legia Warszawa': number;
    'Lech Poznan': number;
    'Pogon Szczecin': number;
    'G\u00F3rnik Zabrze': number;
    'Zaglebie Lubin': number;
    'Piast Gliwice': number;
    Cracovia: number;
    'Radomiak Radom': number;
    'Slask Wroclaw': number;
    'Jagiellonia Bialystok': number;
    'Widzew Lodz': number;
    'Warta Poznan': number;
    'Korona Kielce': number;
    'LKS Lodz': number;
    'Ruch Chorzow': number;
    'Puszcza Niepolomice': number;
    'Stal Mielec': number;
};
export declare const DANISH_SUPERLIGA_IDS: {
    'FC Copenhagen': number;
    'FC Midtjylland': number;
    'Br\u00F6ndby IF': number;
    'FC Nordsjaelland': number;
    'Aarhus GF': number;
    'Silkeborg IF': number;
    'Randers FC': number;
    'Viborg FF': number;
    'Odense Boldklub': number;
    'Lyngby BK': number;
    'Vejle Boldklub': number;
    'Hvidovre IF': number;
};
export declare const CZECH_FIRST_LEAGUE_IDS: {
    'SK Slavia Prague': number;
    'AC Sparta Prague': number;
    'FC Viktoria Plzen': number;
    'FC Banik Ostrava': number;
    'FC Slovan Liberec': number;
    '1.FC Slovacko': number;
    'SK Sigma Olomouc': number;
    'FK Mlada Boleslav': number;
    'FC Hradec Kralove': number;
    'FK Jablonec': number;
    'Bohemians Prague 1905': number;
    'SK Dynamo Ceske Budejovice': number;
    'FK Teplice': number;
    'FK Pardubice': number;
    'MFK Karvina': number;
    'FC Zlin': number;
};
export declare const ELITESERIEN_IDS: {
    'FK Bod\u00F8/Glimt': number;
    'Molde FK': number;
    'Rosenborg BK': number;
    'Lillestr\u00F8m SK': number;
    'Viking FK': number;
    'V\u00E5lerenga Fotball': number;
    'Odds BK': number;
    'SK Brann': number;
    'Sarpsborg 08 FF': number;
    'Troms\u00F8 IL': number;
    'Str\u00F8msgodset IF': number;
    'Stab\u00E6k Fotball': number;
    'Aalesunds FK': number;
    'FK Haugesund': number;
    Hamarkameratene: number;
    'Sandefjord Fotball': number;
};
export declare const ALLSVENSKAN_IDS: {
    'Malm\u00F6 FF': number;
    'BK H\u00E4cken': number;
    'Djurg\u00E5rdens IF': number;
    'Hammarby IF': number;
    'IF Elfsborg': number;
    'AIK Solna': number;
    'IFK Norrk\u00F6ping': number;
    'IFK G\u00F6teborg': number;
    'Kalmar FF': number;
    'Mj\u00E4llby AIF': number;
    'IK Sirius': number;
    'IFK V\u00E4rnamo': number;
    'Halmstads BK': number;
    'Degerfors IF': number;
    'Varbergs BoIS': number;
    'IF Brommapojkarna': number;
};
export declare const LIGAT_HAAL_IDS: {
    'Maccabi Tel Aviv': number;
    'Maccabi Haifa': number;
    'Hapoel Beer Sheva': number;
    'Maccabi Netanya': number;
    'FC Ashdod': number;
    'Hapoel Tel Aviv': number;
    'Beitar Jerusalem': number;
    'Hapoel Haifa': number;
    'Maccabi Petah Tikva': number;
    'Hapoel Jerusalem': number;
    'Maccabi Bnei Reineh': number;
    'Ihud Bnei Sakhnin': number;
    'Hapoel Hadera': number;
    'Hapoel Petah Tikva': number;
};
export declare const NEMZETI_BAJNOKSAG_IDS: {
    'Ferencv\u00E1rosi TC': number;
    'Pusk\u00E1s Akad\u00E9mia FC': number;
    'Feh\u00E9rv\u00E1r FC': number;
    'Debreceni VSC': number;
    'MTK Budapest': number;
    'Mez\u0151k\u00F6vesd Zs\u00F3ry FC': number;
    'Kisv\u00E1rda FC': number;
    '\u00DAjpest FC': number;
    'Paksi FC': number;
    'Di\u00F3sgy\u0151ri VTK': number;
    'Zalaegerszegi TE FC': number;
    'Kecskem\u00E9ti TE': number;
};
export declare const EFBET_LIGA_IDS: {
    'Ludogorets Razgrad': number;
    'CSKA-Sofia': number;
    'Levski Sofia': number;
    'CSKA 1948': number;
    'Botev Plovdiv': number;
    'Arda Kardzhali': number;
    'Lokomotiv Plovdiv': number;
    'Cherno More Varna': number;
    'Slavia Sofia': number;
    'Lokomotiv Sofia': number;
    'Etar Veliko Tarnovo': number;
    'Botev Vratsa': number;
    'Hebar Pazardzhik': number;
    Krumovgrad: number;
    'Beroe Stara Zagora': number;
    'Pirin Blagoevgrad': number;
};
/**
 * Object containing all the urls for the teams in the different leagues.
 * If you want to fetch information for a specific season, you should add the season to the url via
 * transfermarkt_scraper_utils.teamURLWithSeason(teamUrl, season) function.
 */
export declare const TEAM_IDS: {
    'Shakhtar Donetsk': number;
    'Dynamo Kyiv': number;
    'SK Dnipro-1': number;
    'Zorya Lugansk': number;
    'Vorskla Poltava': number;
    'Kolos Kovalivka': number;
    'FK Oleksandriya': number;
    'Rukh Lviv': number;
    'FK Polissya Zhytomyr': number;
    'Kryvbas Kryvyi Rig': number;
    'Metalist 1925 Kharkiv': number;
    'Chornomorets Odessa': number;
    'NK Veres Rivne': number;
    'LNZ Cherkasy': number;
    'FK Obolon Kyiv': number;
    'FK Minaj': number;
    Fenerbahce: number;
    Galatasaray: number;
    Trabzonspor: number;
    'Besiktas JK': number;
    'Basaksehir FK': number;
    Alanyaspor: number;
    'Adana Demirspor': number;
    Antalyaspor: number;
    Konyaspor: number;
    'MKE Ankarag\u00FCc\u00FC': number;
    Hatayspor: number;
    'Gaziantep FK': number;
    'Fatih Karag\u00FCmr\u00FCk': number;
    Kayserispor: number;
    Samsunspor: number;
    Sivasspor: number;
    Kasimpasa: number;
    'Caykur Rizespor': number;
    Istanbulspor: number;
    Pendikspor: number;
    'BSC Young Boys': number;
    'FC Basel 1893': number;
    'FC Luzern': number;
    'FC Lugano': number;
    'Servette FC': number;
    'FC St. Gallen 1879': number;
    'FC Z\u00FCrich': number;
    'Grasshopper Club Zurich': number;
    'FC Lausanne-Sport': number;
    'FC Winterthur': number;
    'FC Stade-Lausanne-Ouchy': number;
    'Yverdon Sport FC': number;
    'Olympiacos Piraeus': number;
    'AEK Athens': number;
    'PAOK Thessaloniki': number;
    'Panathinaikos Athens': number;
    'Aris Thessaloniki': number;
    'OFI Crete FC': number;
    'Panetolikos GFS': number;
    'Volos NPS': number;
    'Asteras Tripolis': number;
    'PAS Giannina': number;
    'Atromitos Athens': number;
    'PAS Lamia 1964': number;
    Panserraikos: number;
    'AE Kifisias': number;
    'SSC Napoli': number;
    'Inter Milan': number;
    'Juventus FC': number;
    'AC Milan': number;
    'Atalanta BC': number;
    'AS Roma': number;
    'SS Lazio': number;
    'ACF Fiorentina': number;
    'US Sassuolo': number;
    'Udinese Calcio': number;
    'Torino FC': number;
    'Bologna FC 1909': number;
    'AC Monza': number;
    'US Salernitana 1919': number;
    'US Lecce': number;
    'FC Empoli': number;
    'Hellas Verona': number;
    'Genoa CFC': number;
    'Cagliari Calcio': number;
    'Frosinone Calcio': number;
    'Celtic FC': number;
    'Rangers FC': number;
    'Heart of Midlothian FC': number;
    'Aberdeen FC': number;
    'Hibernian FC': number;
    'Livingston FC': number;
    'Ross County FC': number;
    'St. Mirren FC': number;
    'Motherwell FC': number;
    'St. Johnstone FC': number;
    'Kilmarnock FC': number;
    'Dundee FC': number;
    'Zenit St. Petersburg': number;
    'CSKA Moscow': number;
    'Dynamo Moscow': number;
    'Spartak Moscow': number;
    'Lokomotiv Moscow': number;
    'FK Krasnodar': number;
    'FK Rostov': number;
    'Krylya Sovetov Samara': number;
    'Akhmat Grozny': number;
    'FC Sochi': number;
    'Rubin Kazan': number;
    'FK Orenburg': number;
    'Ural Yekaterinburg': number;
    'FC Pari Nizhniy Novgorod': number;
    'Baltika Kaliningrad': number;
    'Fakel Voronezh': number;
    'SL Benfica': number;
    'Sporting CP': number;
    'FC Porto': number;
    'SC Braga': number;
    'Vit\u00F3ria Guimar\u00E3es SC': number;
    'FC Famalic\u00E3o': number;
    'Gil Vicente FC': number;
    'Boavista FC': number;
    'FC Arouca': number;
    'Portimonense SC': number;
    'GD Estoril Praia': number;
    'Rio Ave FC': number;
    'Casa Pia AC': number;
    'FC Vizela': number;
    'GD Chaves': number;
    'Moreirense FC': number;
    'SC Farense': number;
    'CF Estrela Amadora SAD': number;
    'Manchester City': number;
    'Arsenal FC': number;
    'Chelsea FC': number;
    'Liverpool FC': number;
    'Manchester United': number;
    'Tottenham Hotspur': number;
    'Newcastle United': number;
    'Aston Villa': number;
    'Brighton & Hove Albion': number;
    'West Ham United': number;
    'Brentford FC': number;
    'Wolverhampton Wanderers': number;
    'Everton FC': number;
    'Nottingham Forest': number;
    'Crystal Palace': number;
    'AFC Bournemouth': number;
    'Fulham FC': number;
    'Burnley FC': number;
    'Sheffield United': number;
    'Luton Town': number;
    'Rakow Czestochowa': number;
    'Legia Warszawa': number;
    'Lech Poznan': number;
    'Pogon Szczecin': number;
    'G\u00F3rnik Zabrze': number;
    'Zaglebie Lubin': number;
    'Piast Gliwice': number;
    Cracovia: number;
    'Radomiak Radom': number;
    'Slask Wroclaw': number;
    'Jagiellonia Bialystok': number;
    'Widzew Lodz': number;
    'Warta Poznan': number;
    'Korona Kielce': number;
    'LKS Lodz': number;
    'Ruch Chorzow': number;
    'Puszcza Niepolomice': number;
    'Stal Mielec': number;
    'Ferencv\u00E1rosi TC': number;
    'Pusk\u00E1s Akad\u00E9mia FC': number;
    'Feh\u00E9rv\u00E1r FC': number;
    'Debreceni VSC': number;
    'MTK Budapest': number;
    'Mez\u0151k\u00F6vesd Zs\u00F3ry FC': number;
    'Kisv\u00E1rda FC': number;
    '\u00DAjpest FC': number;
    'Paksi FC': number;
    'Di\u00F3sgy\u0151ri VTK': number;
    'Zalaegerszegi TE FC': number;
    'Kecskem\u00E9ti TE': number;
    'Paris Saint-Germain': number;
    'AS Monaco': number;
    'Stade Rennais FC': number;
    'Olympique Marseille': number;
    'Olympique Lyon': number;
    'OGC Nice': number;
    'RC Lens': number;
    'LOSC Lille': number;
    'Montpellier HSC': number;
    'FC Nantes': number;
    'Stade Reims': number;
    'FC Lorient': number;
    'RC Strasbourg Alsace': number;
    'FC Toulouse': number;
    'Stade Brestois 29': number;
    'Clermont Foot 63': number;
    'FC Metz': number;
    'Le Havre AC': number;
    'Maccabi Tel Aviv': number;
    'Maccabi Haifa': number;
    'Hapoel Beer Sheva': number;
    'Maccabi Netanya': number;
    'FC Ashdod': number;
    'Hapoel Tel Aviv': number;
    'Beitar Jerusalem': number;
    'Hapoel Haifa': number;
    'Maccabi Petah Tikva': number;
    'Hapoel Jerusalem': number;
    'Maccabi Bnei Reineh': number;
    'Ihud Bnei Sakhnin': number;
    'Hapoel Hadera': number;
    'Hapoel Petah Tikva': number;
    'Real Madrid': number;
    'FC Barcelona': number;
    'Atl\u00E9tico de Madrid': number;
    'Real Sociedad': number;
    'Villarreal CF': number;
    'Real Betis Balompi\u00E9': number;
    'Sevilla FC': number;
    'Athletic Bilbao': number;
    'Valencia CF': number;
    'CA Osasuna': number;
    'Celta de Vigo': number;
    'Getafe CF': number;
    'RCD Mallorca': number;
    'Girona FC': number;
    'UD Almer\u00EDa': number;
    'Rayo Vallecano': number;
    'C\u00E1diz CF': number;
    'Granada CF': number;
    'UD Las Palmas': number;
    'Deportivo Alav\u00E9s': number;
    'Club Brugge KV': number;
    'KRC Genk': number;
    'KAA Gent': number;
    'Royal Antwerp FC': number;
    'RSC Anderlecht': number;
    'Royale Union Saint Gilloise': number;
    'RSC Charleroi': number;
    'Standard Li\u00E8ge': number;
    'Oud-Heverlee Leuven': number;
    'Cercle Brugge': number;
    'KV Mechelen': number;
    'KVC Westerlo': number;
    'KV Kortrijk': number;
    'KAS Eupen': number;
    'Sint-Truidense VV': number;
    'RWD Molenbeek': number;
    'Ajax Amsterdam': number;
    'Feyenoord Rotterdam': number;
    'PSV Eindhoven': number;
    'AZ Alkmaar': number;
    'FC Utrecht': number;
    'Twente Enschede FC': number;
    'SC Heerenveen': number;
    'Sparta Rotterdam': number;
    'Vitesse Arnhem': number;
    'NEC Nijmegen': number;
    'Go Ahead Eagles': number;
    'Fortuna Sittard': number;
    'FC Volendam': number;
    'Heracles Almelo': number;
    'PEC Zwolle': number;
    'Excelsior Rotterdam': number;
    'Almere City FC': number;
    'RKC Waalwijk': number;
    'FK Bod\u00F8/Glimt': number;
    'Molde FK': number;
    'Rosenborg BK': number;
    'Lillestr\u00F8m SK': number;
    'Viking FK': number;
    'V\u00E5lerenga Fotball': number;
    'Odds BK': number;
    'SK Brann': number;
    'Sarpsborg 08 FF': number;
    'Troms\u00F8 IL': number;
    'Str\u00F8msgodset IF': number;
    'Stab\u00E6k Fotball': number;
    'Aalesunds FK': number;
    'FK Haugesund': number;
    Hamarkameratene: number;
    'Sandefjord Fotball': number;
    'Ludogorets Razgrad': number;
    'CSKA-Sofia': number;
    'Levski Sofia': number;
    'CSKA 1948': number;
    'Botev Plovdiv': number;
    'Arda Kardzhali': number;
    'Lokomotiv Plovdiv': number;
    'Cherno More Varna': number;
    'Slavia Sofia': number;
    'Lokomotiv Sofia': number;
    'Etar Veliko Tarnovo': number;
    'Botev Vratsa': number;
    'Hebar Pazardzhik': number;
    Krumovgrad: number;
    'Beroe Stara Zagora': number;
    'Pirin Blagoevgrad': number;
    'FC Copenhagen': number;
    'FC Midtjylland': number;
    'Br\u00F6ndby IF': number;
    'FC Nordsjaelland': number;
    'Aarhus GF': number;
    'Silkeborg IF': number;
    'Randers FC': number;
    'Viborg FF': number;
    'Odense Boldklub': number;
    'Lyngby BK': number;
    'Vejle Boldklub': number;
    'Hvidovre IF': number;
    'SK Slavia Prague': number;
    'AC Sparta Prague': number;
    'FC Viktoria Plzen': number;
    'FC Banik Ostrava': number;
    'FC Slovan Liberec': number;
    '1.FC Slovacko': number;
    'SK Sigma Olomouc': number;
    'FK Mlada Boleslav': number;
    'FC Hradec Kralove': number;
    'FK Jablonec': number;
    'Bohemians Prague 1905': number;
    'SK Dynamo Ceske Budejovice': number;
    'FK Teplice': number;
    'FK Pardubice': number;
    'MFK Karvina': number;
    'FC Zlin': number;
    'GNK Dinamo Zagreb': number;
    'HNK Hajduk Split': number;
    'HNK Rijeka': number;
    'NK Osijek': number;
    'NK Lokomotiva Zagreb': number;
    'HNK Gorica': number;
    'NK Varazdin': number;
    'NK Istra 1961': number;
    'Slaven Belupo Koprivnica': number;
    'NK Rudes': number;
    'Bayern Munich': number;
    'Bayer 04 Leverkusen': number;
    'Borussia Dortmund': number;
    'RB Leipzig': number;
    'Eintracht Frankfurt': number;
    'VfL Wolfsburg': number;
    'Borussia M\u00F6nchengladbach': number;
    'SC Freiburg': number;
    '1.FC Union Berlin': number;
    'FC Augsburg': number;
    '1.FSV Mainz 05': number;
    'VfB Stuttgart': number;
    'TSG 1899 Hoffenheim': number;
    'SV Werder Bremen': number;
    '1.FC K\u00F6ln': number;
    'VfL Bochum': number;
    '1.FC Heidenheim 1846': number;
    'SV Darmstadt 98': number;
    'Red Bull Salzburg': number;
    'SK Sturm Graz': number;
    LASK: number;
    'Rapid Vienna': number;
    'Austria Vienna': number;
    'Wolfsberger AC': number;
    'SK Austria Klagenfurt': number;
    'WSG Tirol': number;
    'SCR Altach': number;
    'TSV Hartberg': number;
    'SC Austria Lustenau': number;
    'FC Blau-Weiss Linz': number;
    'Malm\u00F6 FF': number;
    'BK H\u00E4cken': number;
    'Djurg\u00E5rdens IF': number;
    'Hammarby IF': number;
    'IF Elfsborg': number;
    'AIK Solna': number;
    'IFK Norrk\u00F6ping': number;
    'IFK G\u00F6teborg': number;
    'Kalmar FF': number;
    'Mj\u00E4llby AIF': number;
    'IK Sirius': number;
    'IFK V\u00E4rnamo': number;
    'Halmstads BK': number;
    'Degerfors IF': number;
    'Varbergs BoIS': number;
    'IF Brommapojkarna': number;
};
