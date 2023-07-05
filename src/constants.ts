export const TRANSFERMARKT_URL = 'https://transfermarkt.com';

export const LEAGUE_URLS = {
    PREMIER_LEAGUE: 'https://www.transfermarkt.com/premier-league/startseite/wettbewerb/GB1',
    LA_LIGA: 'https://www.transfermarkt.com/laliga/startseite/wettbewerb/ES1',
    SERIE_A: 'https://www.transfermarkt.com/serie-a/startseite/wettbewerb/IT1',
    BUNDESLIGA: 'https://www.transfermarkt.com/bundesliga/startseite/wettbewerb/L1',
    LIGUE_1: 'https://www.transfermarkt.com/ligue-1/startseite/wettbewerb/FR1',
    SUPER_LIG: 'https://www.transfermarkt.com/super-lig/startseite/wettbewerb/TR1',
    EREDIVISIE: 'https://www.transfermarkt.com/eredivisie/startseite/wettbewerb/NL1',
    PRIMEIRA_LIGA: 'https://www.transfermarkt.com/liga-nos/startseite/wettbewerb/PO1',
    SCOTTISH_PREMIERSHIP: 'https://www.transfermarkt.com/scottish-premiership/startseite/wettbewerb/SC1',
    JUPILER_PRO_LEAGUE: 'https://www.transfermarkt.com/jupiler-pro-league/startseite/wettbewerb/BE1',
    AUSTRIAN_BUNDESLIGA: 'https://www.transfermarkt.com/bundesliga/startseite/wettbewerb/A1',
    UKRAINIAN_PREMIER_LEAGUE: 'https://www.transfermarkt.com/premier-liga/startseite/wettbewerb/UKR1',
    RUSSIAN_PREMIER_LEAGUE: 'https://www.transfermarkt.com/premier-liga/startseite/wettbewerb/RU1',
    SUPER_LEAGUE_GREECE: 'https://www.transfermarkt.com/super-league-1/startseite/wettbewerb/GR1',
    SUPER_LEAGUE_SWITZERLAND: 'https://www.transfermarkt.com/super-league/startseite/wettbewerb/C1',
    CROATIAN_FIRST_FOOTBALL_LEAGUE: 'https://www.transfermarkt.com/supersport-hnl/startseite/wettbewerb/KR1',
    POLISH_EKSTRAKLASA: 'https://www.transfermarkt.com/pko-ekstraklasa/startseite/wettbewerb/PL1',
    DANISH_SUPERLIGA: 'https://www.transfermarkt.com/superligaen/startseite/wettbewerb/DK1',
    CZECH_FIRST_LEAGUE: 'https://www.transfermarkt.com/fortuna-liga/startseite/wettbewerb/TS1',
    ELITESERIEN: 'https://www.transfermarkt.com/eliteserien/startseite/wettbewerb/NO1',
    ALLSVENSKAN: 'https://www.transfermarkt.com/allsvenskan/startseite/wettbewerb/SE1',
    LIGAT_HAAL: 'https://www.transfermarkt.com/ligat-haal/startseite/wettbewerb/ISR1',
    NEMZETI_BAJNOKSAG: 'https://www.transfermarkt.com/nemzeti-bajnoksag/startseite/wettbewerb/UNG1',
    EFBET_LIGA: 'https://www.transfermarkt.com/efbet-liga/startseite/wettbewerb/BU1',
};

export type LeagueName = keyof typeof LEAGUE_URLS;

export const PREMIER_LEAGUE_URLS = {
    'Manchester City': 'https://transfermarkt.com/manchester-city/startseite/verein/281/',
    'Arsenal FC': 'https://transfermarkt.com/fc-arsenal/startseite/verein/11/',
    'Chelsea FC': 'https://transfermarkt.com/chelsea-fc/startseite/verein/631/',
    'Liverpool FC': 'https://transfermarkt.com/fc-liverpool/startseite/verein/31/',
    'Manchester United': 'https://transfermarkt.com/manchester-united/startseite/verein/985/',
    'Tottenham Hotspur': 'https://transfermarkt.com/tottenham-hotspur/startseite/verein/148/',
    'Newcastle United': 'https://transfermarkt.com/newcastle-united/startseite/verein/762/',
    'Aston Villa': 'https://transfermarkt.com/aston-villa/startseite/verein/405/',
    'Brighton & Hove Albion': 'https://transfermarkt.com/brighton-amp-hove-albion/startseite/verein/1237/',
    'West Ham United': 'https://transfermarkt.com/west-ham-united/startseite/verein/379/',
    'Brentford FC': 'https://transfermarkt.com/fc-brentford/startseite/verein/1148/',
    'Wolverhampton Wanderers': 'https://transfermarkt.com/wolverhampton-wanderers/startseite/verein/543/',
    'Everton FC': 'https://transfermarkt.com/fc-everton/startseite/verein/29/',
    'Nottingham Forest': 'https://transfermarkt.com/nottingham-forest/startseite/verein/703/',
    'Crystal Palace': 'https://transfermarkt.com/crystal-palace/startseite/verein/873/',
    'AFC Bournemouth': 'https://transfermarkt.com/afc-bournemouth/startseite/verein/989/',
    'Fulham FC': 'https://transfermarkt.com/fc-fulham/startseite/verein/931/',
    'Burnley FC': 'https://transfermarkt.com/fc-burnley/startseite/verein/1132/',
    'Sheffield United': 'https://transfermarkt.com/sheffield-united/startseite/verein/350/',
    'Luton Town': 'https://transfermarkt.com/luton-town/startseite/verein/1031/'
};

export const LA_LIGA_URLS = {
    'Real Madrid': 'https://transfermarkt.com/real-madrid/startseite/verein/418/',
    'FC Barcelona': 'https://transfermarkt.com/fc-barcelona/startseite/verein/131/',
    'Atlético de Madrid': 'https://transfermarkt.com/atletico-madrid/startseite/verein/13/',
    'Real Sociedad': 'https://transfermarkt.com/real-sociedad-san-sebastian/startseite/verein/681/',
    'Villarreal CF': 'https://transfermarkt.com/fc-villarreal/startseite/verein/1050/',
    'Real Betis Balompié': 'https://transfermarkt.com/real-betis-sevilla/startseite/verein/150/',
    'Sevilla FC': 'https://transfermarkt.com/fc-sevilla/startseite/verein/368/',
    'Athletic Bilbao': 'https://transfermarkt.com/athletic-bilbao/startseite/verein/621/',
    'Valencia CF': 'https://transfermarkt.com/fc-valencia/startseite/verein/1049/',
    'CA Osasuna': 'https://transfermarkt.com/ca-osasuna/startseite/verein/331/',
    'Celta de Vigo': 'https://transfermarkt.com/celta-vigo/startseite/verein/940/',
    'Getafe CF': 'https://transfermarkt.com/fc-getafe/startseite/verein/3709/',
    'RCD Mallorca': 'https://transfermarkt.com/rcd-mallorca/startseite/verein/237/',
    'Girona FC': 'https://transfermarkt.com/fc-girona/startseite/verein/12321/',
    'UD Almería': 'https://transfermarkt.com/ud-almeria/startseite/verein/3302/',
    'Rayo Vallecano': 'https://transfermarkt.com/rayo-vallecano/startseite/verein/367/',
    'Cádiz CF': 'https://transfermarkt.com/fc-cadiz/startseite/verein/2687/',
    'Granada CF': 'https://transfermarkt.com/fc-granada/startseite/verein/16795/',
    'UD Las Palmas': 'https://transfermarkt.com/ud-las-palmas/startseite/verein/472/',
    'Deportivo Alavés': 'https://transfermarkt.com/deportivo-alaves/startseite/verein/1108/'
};

export const SERIE_A_URLS = {
    'SSC Napoli': 'https://transfermarkt.com/ssc-neapel/startseite/verein/6195/',
    'Inter Milan': 'https://transfermarkt.com/inter-mailand/startseite/verein/46/',
    'Juventus FC': 'https://transfermarkt.com/juventus-turin/startseite/verein/506/',
    'AC Milan': 'https://transfermarkt.com/ac-mailand/startseite/verein/5/',
    'Atalanta BC': 'https://transfermarkt.com/atalanta-bergamo/startseite/verein/800/',
    'AS Roma': 'https://transfermarkt.com/as-rom/startseite/verein/12/',
    'SS Lazio': 'https://transfermarkt.com/lazio-rom/startseite/verein/398/',
    'ACF Fiorentina': 'https://transfermarkt.com/ac-florenz/startseite/verein/430/',
    'US Sassuolo': 'https://transfermarkt.com/us-sassuolo/startseite/verein/6574/',
    'Udinese Calcio': 'https://transfermarkt.com/udinese-calcio/startseite/verein/410/',
    'Torino FC': 'https://transfermarkt.com/fc-turin/startseite/verein/416/',
    'Bologna FC 1909': 'https://transfermarkt.com/fc-bologna/startseite/verein/1025/',
    'AC Monza': 'https://transfermarkt.com/ac-monza/startseite/verein/2919/',
    'US Salernitana 1919': 'https://transfermarkt.com/us-salernitana-1919/startseite/verein/380/',
    'US Lecce': 'https://transfermarkt.com/us-lecce/startseite/verein/1005/',
    'FC Empoli': 'https://transfermarkt.com/fc-empoli/startseite/verein/749/',
    'Hellas Verona': 'https://transfermarkt.com/hellas-verona/startseite/verein/276/',
    'Genoa CFC': 'https://transfermarkt.com/genua-cfc/startseite/verein/252/',
    'Cagliari Calcio': 'https://transfermarkt.com/cagliari-calcio/startseite/verein/1390/',
    'Frosinone Calcio': 'https://transfermarkt.com/frosinone-calcio/startseite/verein/8970/'
};

export const BUNDESLIGA_URLS = {
    'Bayern Munich': 'https://transfermarkt.com/fc-bayern-munchen/startseite/verein/27/',
    'Bayer 04 Leverkusen': 'https://transfermarkt.com/bayer-04-leverkusen/startseite/verein/15/',
    'Borussia Dortmund': 'https://transfermarkt.com/borussia-dortmund/startseite/verein/16/',
    'RB Leipzig': 'https://transfermarkt.com/rasenballsport-leipzig/startseite/verein/23826/',
    'Eintracht Frankfurt': 'https://transfermarkt.com/eintracht-frankfurt/startseite/verein/24/',
    'VfL Wolfsburg': 'https://transfermarkt.com/vfl-wolfsburg/startseite/verein/82/',
    'Borussia Mönchengladbach': 'https://transfermarkt.com/borussia-monchengladbach/startseite/verein/18/',
    'SC Freiburg': 'https://transfermarkt.com/sc-freiburg/startseite/verein/60/',
    '1.FC Union Berlin': 'https://transfermarkt.com/1-fc-union-berlin/startseite/verein/89/',
    'FC Augsburg': 'https://transfermarkt.com/fc-augsburg/startseite/verein/167/',
    '1.FSV Mainz 05': 'https://transfermarkt.com/1-fsv-mainz-05/startseite/verein/39/',
    'VfB Stuttgart': 'https://transfermarkt.com/vfb-stuttgart/startseite/verein/79/',
    'TSG 1899 Hoffenheim': 'https://transfermarkt.com/tsg-1899-hoffenheim/startseite/verein/533/',
    'SV Werder Bremen': 'https://transfermarkt.com/sv-werder-bremen/startseite/verein/86/',
    '1.FC Köln': 'https://transfermarkt.com/1-fc-koln/startseite/verein/3/',
    'VfL Bochum': 'https://transfermarkt.com/vfl-bochum/startseite/verein/80/',
    '1.FC Heidenheim 1846': 'https://transfermarkt.com/1-fc-heidenheim-1846/startseite/verein/2036/',
    'SV Darmstadt 98': 'https://transfermarkt.com/sv-darmstadt-98/startseite/verein/105/'
};

export const LIGUE_1_URLS = {
    'Paris Saint-Germain': 'https://transfermarkt.com/fc-paris-saint-germain/startseite/verein/583/',
    'AS Monaco': 'https://transfermarkt.com/as-monaco/startseite/verein/162/',
    'Stade Rennais FC': 'https://transfermarkt.com/fc-stade-rennes/startseite/verein/273/',
    'Olympique Marseille': 'https://transfermarkt.com/olympique-marseille/startseite/verein/244/',
    'Olympique Lyon': 'https://transfermarkt.com/olympique-lyon/startseite/verein/1041/',
    'OGC Nice': 'https://transfermarkt.com/ogc-nizza/startseite/verein/417/',
    'RC Lens': 'https://transfermarkt.com/rc-lens/startseite/verein/826/',
    'LOSC Lille': 'https://transfermarkt.com/losc-lille/startseite/verein/1082/',
    'Montpellier HSC': 'https://transfermarkt.com/montpellier-hsc/startseite/verein/969/',
    'FC Nantes': 'https://transfermarkt.com/fc-nantes/startseite/verein/995/',
    'Stade Reims': 'https://transfermarkt.com/stade-reims/startseite/verein/1421/',
    'FC Lorient': 'https://transfermarkt.com/fc-lorient/startseite/verein/1158/',
    'RC Strasbourg Alsace': 'https://transfermarkt.com/rc-strassburg-alsace/startseite/verein/667/',
    'FC Toulouse': 'https://transfermarkt.com/fc-toulouse/startseite/verein/415/',
    'Stade Brestois 29': 'https://transfermarkt.com/stade-brest-29/startseite/verein/3911/',
    'Clermont Foot 63': 'https://transfermarkt.com/clermont-foot-63/startseite/verein/3524/',
    'FC Metz': 'https://transfermarkt.com/fc-metz/startseite/verein/347/',
    'Le Havre AC': 'https://transfermarkt.com/ac-le-havre/startseite/verein/738/'
};

export const SUPER_LIG_URLS = {
    Fenerbahce: 'https://transfermarkt.com/fenerbahce-istanbul/startseite/verein/36/',
    Galatasaray: 'https://transfermarkt.com/galatasaray-istanbul/startseite/verein/141/',
    Trabzonspor: 'https://transfermarkt.com/trabzonspor/startseite/verein/449/',
    'Besiktas JK': 'https://transfermarkt.com/besiktas-istanbul/startseite/verein/114/',
    'Basaksehir FK': 'https://transfermarkt.com/istanbul-basaksehir-fk/startseite/verein/6890/',
    Alanyaspor: 'https://transfermarkt.com/alanyaspor/startseite/verein/11282/',
    'Adana Demirspor': 'https://transfermarkt.com/adana-demirspor/startseite/verein/3840/',
    Antalyaspor: 'https://transfermarkt.com/antalyaspor/startseite/verein/589/',
    Konyaspor: 'https://transfermarkt.com/konyaspor/startseite/verein/2293/',
    'MKE Ankaragücü': 'https://transfermarkt.com/mke-ankaragucu/startseite/verein/868/',
    Hatayspor: 'https://transfermarkt.com/hatayspor/startseite/verein/7775/',
    'Gaziantep FK': 'https://transfermarkt.com/gaziantep-fk/startseite/verein/2832/',
    'Fatih Karagümrük': 'https://transfermarkt.com/fatih-karagumruk/startseite/verein/6646/',
    Kayserispor: 'https://transfermarkt.com/kayserispor/startseite/verein/3205/',
    Samsunspor: 'https://transfermarkt.com/samsunspor/startseite/verein/152/',
    Sivasspor: 'https://transfermarkt.com/sivasspor/startseite/verein/2381/',
    Kasimpasa: 'https://transfermarkt.com/kasimpasa/startseite/verein/10484/',
    'Caykur Rizespor': 'https://transfermarkt.com/caykur-rizespor/startseite/verein/126/',
    Istanbulspor: 'https://transfermarkt.com/istanbulspor/startseite/verein/924/',
    Pendikspor: 'https://transfermarkt.com/pendikspor/startseite/verein/3209/'
};

export const EREDIVISIE_URLS = {
    'Ajax Amsterdam': 'https://transfermarkt.com/ajax-amsterdam/startseite/verein/610/',
    'Feyenoord Rotterdam': 'https://transfermarkt.com/feyenoord-rotterdam/startseite/verein/234/',
    'PSV Eindhoven': 'https://transfermarkt.com/psv-eindhoven/startseite/verein/383/',
    'AZ Alkmaar': 'https://transfermarkt.com/az-alkmaar/startseite/verein/1090/',
    'FC Utrecht': 'https://transfermarkt.com/fc-utrecht/startseite/verein/200/',
    'Twente Enschede FC': 'https://transfermarkt.com/fc-twente-enschede/startseite/verein/317/',
    'SC Heerenveen': 'https://transfermarkt.com/sc-heerenveen/startseite/verein/306/',
    'Sparta Rotterdam': 'https://transfermarkt.com/sparta-rotterdam/startseite/verein/468/',
    'Vitesse Arnhem': 'https://transfermarkt.com/vitesse-arnheim/startseite/verein/499/',
    'NEC Nijmegen': 'https://transfermarkt.com/nec-nijmegen/startseite/verein/467/',
    'Go Ahead Eagles': 'https://transfermarkt.com/go-ahead-eagles-deventer/startseite/verein/1435/',
    'Fortuna Sittard': 'https://transfermarkt.com/fortuna-sittard/startseite/verein/385/',
    'FC Volendam': 'https://transfermarkt.com/fc-volendam/startseite/verein/724/',
    'Heracles Almelo': 'https://transfermarkt.com/heracles-almelo/startseite/verein/1304/',
    'PEC Zwolle': 'https://transfermarkt.com/pec-zwolle/startseite/verein/1269/',
    'Excelsior Rotterdam': 'https://transfermarkt.com/sbv-excelsior-rotterdam/startseite/verein/798/',
    'Almere City FC': 'https://transfermarkt.com/almere-city-fc/startseite/verein/723/',
    'RKC Waalwijk': 'https://transfermarkt.com/rkc-waalwijk/startseite/verein/235/'
};

export const PRIMEIRA_LIGA_URLS = {
    'SL Benfica': 'https://transfermarkt.com/benfica-lissabon/startseite/verein/294/',
    'Sporting CP': 'https://transfermarkt.com/sporting-lissabon/startseite/verein/336/',
    'FC Porto': 'https://transfermarkt.com/fc-porto/startseite/verein/720/',
    'SC Braga': 'https://transfermarkt.com/sc-braga/startseite/verein/1075/',
    'Vitória Guimarães SC': 'https://transfermarkt.com/vitoria-guimaraes-sc/startseite/verein/2420/',
    'FC Famalicão': 'https://transfermarkt.com/fc-famalicao/startseite/verein/3329/',
    'Gil Vicente FC': 'https://transfermarkt.com/gil-vicente-fc/startseite/verein/2424/',
    'Boavista FC': 'https://transfermarkt.com/boavista-porto-fc/startseite/verein/2503/',
    'FC Arouca': 'https://transfermarkt.com/fc-arouca/startseite/verein/8024/',
    'Portimonense SC': 'https://transfermarkt.com/portimonense-sc/startseite/verein/7378/',
    'GD Estoril Praia': 'https://transfermarkt.com/gd-estoril-praia/startseite/verein/1465/',
    'Rio Ave FC': 'https://transfermarkt.com/rio-ave-fc/startseite/verein/2425/',
    'Casa Pia AC': 'https://transfermarkt.com/casa-pia-ac/startseite/verein/3268/',
    'FC Vizela': 'https://transfermarkt.com/fc-vizela/startseite/verein/6912/',
    'GD Chaves': 'https://transfermarkt.com/gd-chaves/startseite/verein/3325/',
    'Moreirense FC': 'https://transfermarkt.com/moreirense-fc/startseite/verein/979/',
    'SC Farense': 'https://transfermarkt.com/sc-farense/startseite/verein/4294/',
    'CF Estrela Amadora SAD': 'https://transfermarkt.com/cf-estrela-amadora-sad/startseite/verein/2431/'
};

export const SCOTTISH_PREMIERSHIP_URLS = {
    'Celtic FC': 'https://transfermarkt.com/celtic-glasgow/startseite/verein/371/',
    'Rangers FC': 'https://transfermarkt.com/glasgow-rangers/startseite/verein/124/',
    'Heart of Midlothian FC': 'https://transfermarkt.com/heart-of-midlothian-fc/startseite/verein/43/',
    'Aberdeen FC': 'https://transfermarkt.com/aberdeen-fc/startseite/verein/370/',
    'Hibernian FC': 'https://transfermarkt.com/hibernian-fc/startseite/verein/903/',
    'Livingston FC': 'https://transfermarkt.com/livingston-fc/startseite/verein/1241/',
    'Ross County FC': 'https://transfermarkt.com/ross-county-fc/startseite/verein/2759/',
    'St. Mirren FC': 'https://transfermarkt.com/st-mirren-fc/startseite/verein/465/',
    'Motherwell FC': 'https://transfermarkt.com/motherwell-fc/startseite/verein/987/',
    'St. Johnstone FC': 'https://transfermarkt.com/st-johnstone-fc/startseite/verein/2578/',
    'Kilmarnock FC': 'https://transfermarkt.com/kilmarnock-fc/startseite/verein/2553/',
    'Dundee FC': 'https://transfermarkt.com/dundee-fc/startseite/verein/511/'
};

export const JUPILER_PRO_LEAGUE_URLS = {
    'Club Brugge KV': 'https://transfermarkt.com/fc-brugge/startseite/verein/2282/',
    'KRC Genk': 'https://transfermarkt.com/krc-genk/startseite/verein/1184/',
    'KAA Gent': 'https://transfermarkt.com/kaa-gent/startseite/verein/157/',
    'Royal Antwerp FC': 'https://transfermarkt.com/royal-antwerpen-fc/startseite/verein/1096/',
    'RSC Anderlecht': 'https://transfermarkt.com/rsc-anderlecht/startseite/verein/58/',
    'Royale Union Saint Gilloise': 'https://transfermarkt.com/royale-union-saint-gilloise/startseite/verein/3948/',
    'RSC Charleroi': 'https://transfermarkt.com/rsc-charleroi/startseite/verein/172/',
    'Standard Liège': 'https://transfermarkt.com/standard-luttich/startseite/verein/3057/',
    'Oud-Heverlee Leuven': 'https://transfermarkt.com/oud-heverlee-leuven/startseite/verein/2727/',
    'Cercle Brugge': 'https://transfermarkt.com/cercle-brugge/startseite/verein/520/',
    'KV Mechelen': 'https://transfermarkt.com/kv-mechelen/startseite/verein/354/',
    'KVC Westerlo': 'https://transfermarkt.com/kvc-westerlo/startseite/verein/968/',
    'KV Kortrijk': 'https://transfermarkt.com/kv-kortrijk/startseite/verein/601/',
    'KAS Eupen': 'https://transfermarkt.com/kas-eupen/startseite/verein/1245/',
    'Sint-Truidense VV': 'https://transfermarkt.com/vv-st-truiden/startseite/verein/475/',
    'RWD Molenbeek': 'https://transfermarkt.com/rwd-molenbeek/startseite/verein/54189/'
};

export const AUSTRIAN_BUNDESLIGA_URLS = {
    'Red Bull Salzburg': 'https://transfermarkt.com/red-bull-salzburg/startseite/verein/409/',
    'SK Sturm Graz': 'https://transfermarkt.com/sk-sturm-graz/startseite/verein/122/',
    LASK: 'https://transfermarkt.com/lask/startseite/verein/413/',
    'Rapid Vienna': 'https://transfermarkt.com/sk-rapid-wien/startseite/verein/170/',
    'Austria Vienna': 'https://transfermarkt.com/fk-austria-wien/startseite/verein/14/',
    'Wolfsberger AC': 'https://transfermarkt.com/wolfsberger-ac/startseite/verein/4441/',
    'SK Austria Klagenfurt': 'https://transfermarkt.com/sk-austria-klagenfurt/startseite/verein/28760/',
    'WSG Tirol': 'https://transfermarkt.com/wsg-tirol/startseite/verein/2446/',
    'SCR Altach': 'https://transfermarkt.com/scr-altach/startseite/verein/3551/',
    'TSV Hartberg': 'https://transfermarkt.com/tsv-hartberg/startseite/verein/4467/',
    'SC Austria Lustenau': 'https://transfermarkt.com/sc-austria-lustenau/startseite/verein/541/',
    'FC Blau-Weiss Linz': 'https://transfermarkt.com/fc-blau-weiss-linz/startseite/verein/2157/'
};

export const UKRAINIAN_PREMIER_LEAGUE_URLS = {
    'Shakhtar Donetsk': 'https://transfermarkt.com/shakhtar-donetsk/startseite/verein/660/',
    'Dynamo Kyiv': 'https://transfermarkt.com/dynamo-kiew/startseite/verein/338/',
    'SK Dnipro-1': 'https://transfermarkt.com/sk-dnipro-1/startseite/verein/60551/',
    'Zorya Lugansk': 'https://transfermarkt.com/zorya-lugansk/startseite/verein/10690/',
    'Vorskla Poltava': 'https://transfermarkt.com/vorskla-poltava/startseite/verein/2740/',
    'Kolos Kovalivka': 'https://transfermarkt.com/kolos-kovalivka/startseite/verein/48332/',
    'FK Oleksandriya': 'https://transfermarkt.com/fk-oleksandriya/startseite/verein/18303/',
    'Rukh Lviv': 'https://transfermarkt.com/rukh-lviv/startseite/verein/48726/',
    'FK Polissya Zhytomyr': 'https://transfermarkt.com/fk-polissya-zhytomyr/startseite/verein/53646/',
    'Kryvbas Kryvyi Rig': 'https://transfermarkt.com/kryvbas-kryvyi-rig/startseite/verein/3592/',
    'Metalist 1925 Kharkiv': 'https://transfermarkt.com/metalist-1925-kharkiv/startseite/verein/55686/',
    'Chornomorets Odessa': 'https://transfermarkt.com/chornomorets-odessa/startseite/verein/6992/',
    'NK Veres Rivne': 'https://transfermarkt.com/nk-veres-rivne/startseite/verein/26459/',
    'LNZ Cherkasy': 'https://transfermarkt.com/lnz-lebedyn/startseite/verein/63007/',
    'FK Obolon Kyiv': 'https://transfermarkt.com/fk-obolon-kiew/startseite/verein/39097/',
    'FK Minaj': 'https://transfermarkt.com/fk-minaj/startseite/verein/61825/'
};

export const RUSSIAN_PREMIER_LEAGUE_URLS = {
    'Zenit St. Petersburg': 'https://transfermarkt.com/zenit-st-petersburg/startseite/verein/964/',
    'CSKA Moscow': 'https://transfermarkt.com/zska-moskau/startseite/verein/2410/',
    'Dynamo Moscow': 'https://transfermarkt.com/dinamo-moskau/startseite/verein/121/',
    'Spartak Moscow': 'https://transfermarkt.com/spartak-moskau/startseite/verein/232/',
    'Lokomotiv Moscow': 'https://transfermarkt.com/lokomotiv-moskau/startseite/verein/932/',
    'FK Krasnodar': 'https://transfermarkt.com/fk-krasnodar/startseite/verein/16704/',
    'FK Rostov': 'https://transfermarkt.com/fk-rostov/startseite/verein/1083/',
    'Krylya Sovetov Samara': 'https://transfermarkt.com/krylya-sovetov-samara/startseite/verein/2696/',
    'Akhmat Grozny': 'https://transfermarkt.com/akhmat-grozny/startseite/verein/3725/',
    'FC Sochi': 'https://transfermarkt.com/fk-sochi/startseite/verein/41231/',
    'Rubin Kazan': 'https://transfermarkt.com/rubin-kazan/startseite/verein/2698/',
    'FK Orenburg': 'https://transfermarkt.com/fk-orenburg/startseite/verein/14589/',
    'Ural Yekaterinburg': 'https://transfermarkt.com/ural-ekaterinburg/startseite/verein/11127/',
    'FC Pari Nizhniy Novgorod': 'https://transfermarkt.com/fk-nizhny-novgorod/startseite/verein/49702/',
    'Baltika Kaliningrad': 'https://transfermarkt.com/baltika-kaliningrad/startseite/verein/2741/',
    'Fakel Voronezh': 'https://transfermarkt.com/fakel-voronezh/startseite/verein/1124/'
};

export const SUPER_LEAGUE_GREECE_URLS = {
    'Olympiacos Piraeus': 'https://transfermarkt.com/olympiakos-piraus/startseite/verein/683/',
    'AEK Athens': 'https://transfermarkt.com/aek-athen/startseite/verein/2441/',
    'PAOK Thessaloniki': 'https://transfermarkt.com/paok-thessaloniki/startseite/verein/1091/',
    'Panathinaikos Athens': 'https://transfermarkt.com/panathinaikos-athen/startseite/verein/265/',
    'Aris Thessaloniki': 'https://transfermarkt.com/aris-thessaloniki/startseite/verein/605/',
    'OFI Crete FC': 'https://transfermarkt.com/ofi-kreta/startseite/verein/653/',
    'Panetolikos GFS': 'https://transfermarkt.com/panetolikos-gfs/startseite/verein/6418/',
    'Volos NPS': 'https://transfermarkt.com/volos-nps/startseite/verein/60949/',
    'Asteras Tripolis': 'https://transfermarkt.com/asteras-tripolis/startseite/verein/6676/',
    'PAS Giannina': 'https://transfermarkt.com/pas-giannina/startseite/verein/2671/',
    'Atromitos Athens': 'https://transfermarkt.com/atromitos-athen/startseite/verein/3060/',
    'PAS Lamia 1964': 'https://transfermarkt.com/pas-lamia-1964/startseite/verein/3999/',
    Panserraikos: 'https://transfermarkt.com/panserraikos/startseite/verein/3385/',
    'AE Kifisias': 'https://transfermarkt.com/ae-kifisias/startseite/verein/30120/'
};

export const SUPER_LEAGUE_SWITZERLAND_URLS = {
    'BSC Young Boys': 'https://transfermarkt.com/bsc-young-boys/startseite/verein/452/',
    'FC Basel 1893': 'https://transfermarkt.com/fc-basel-1893/startseite/verein/26/',
    'FC Luzern': 'https://transfermarkt.com/fc-luzern/startseite/verein/434/',
    'FC Lugano': 'https://transfermarkt.com/fc-lugano/startseite/verein/2790/',
    'Servette FC': 'https://transfermarkt.com/servette-fc/startseite/verein/61/',
    'FC St. Gallen 1879': 'https://transfermarkt.com/fc-st-gallen-1879/startseite/verein/257/',
    'FC Zürich': 'https://transfermarkt.com/fc-zurich/startseite/verein/260/',
    'Grasshopper Club Zurich': 'https://transfermarkt.com/grasshopper-club-zurich/startseite/verein/504/',
    'FC Lausanne-Sport': 'https://transfermarkt.com/fc-lausanne-sport/startseite/verein/527/',
    'FC Winterthur': 'https://transfermarkt.com/fc-winterthur/startseite/verein/242/',
    'FC Stade-Lausanne-Ouchy': 'https://transfermarkt.com/fc-stade-lausanne-ouchy/startseite/verein/5499/',
    'Yverdon Sport FC': 'https://transfermarkt.com/yverdon-sport-fc/startseite/verein/322/'
};

export const CROATIAN_FIRST_FOOTBALL_LEAGUE_URLS = {
    'GNK Dinamo Zagreb': 'https://transfermarkt.com/gnk-dinamo-zagreb/startseite/verein/419/',
    'HNK Hajduk Split': 'https://transfermarkt.com/hnk-hajduk-split/startseite/verein/447/',
    'HNK Rijeka': 'https://transfermarkt.com/hnk-rijeka/startseite/verein/144/',
    'NK Osijek': 'https://transfermarkt.com/nk-osijek/startseite/verein/327/',
    'NK Lokomotiva Zagreb': 'https://transfermarkt.com/nk-lokomotiva-zagreb/startseite/verein/11194/',
    'HNK Gorica': 'https://transfermarkt.com/hnk-gorica/startseite/verein/24575/',
    'NK Varazdin': 'https://transfermarkt.com/nk-varazdin/startseite/verein/599/',
    'NK Istra 1961': 'https://transfermarkt.com/nk-istra-1961/startseite/verein/999/',
    'Slaven Belupo Koprivnica': 'https://transfermarkt.com/slaven-belupo-koprivnica/startseite/verein/2362/',
    'NK Rudes': 'https://transfermarkt.com/nk-rudes/startseite/verein/11083/'
};

export const POLISH_EKSTRAKLASA_URLS = {
    'Rakow Czestochowa': 'https://transfermarkt.com/rakow-czestochowa/startseite/verein/9644/',
    'Legia Warszawa': 'https://transfermarkt.com/legia-warschau/startseite/verein/255/',
    'Lech Poznan': 'https://transfermarkt.com/lech-posen/startseite/verein/238/',
    'Pogon Szczecin': 'https://transfermarkt.com/pogon-stettin/startseite/verein/324/',
    'Górnik Zabrze': 'https://transfermarkt.com/gornik-zabrze/startseite/verein/428/',
    'Zaglebie Lubin': 'https://transfermarkt.com/zaglebie-lubin/startseite/verein/168/',
    'Piast Gliwice': 'https://transfermarkt.com/piast-gliwice/startseite/verein/6112/',
    Cracovia: 'https://transfermarkt.com/cracovia/startseite/verein/5689/',
    'Radomiak Radom': 'https://transfermarkt.com/radomiak-radom/startseite/verein/7154/',
    'Slask Wroclaw': 'https://transfermarkt.com/slask-wroclaw/startseite/verein/759/',
    'Jagiellonia Bialystok': 'https://transfermarkt.com/jagiellonia-bialystok/startseite/verein/2300/',
    'Widzew Lodz': 'https://transfermarkt.com/widzew-lodz/startseite/verein/88/',
    'Warta Poznan': 'https://transfermarkt.com/warta-posen/startseite/verein/7146/',
    'Korona Kielce': 'https://transfermarkt.com/korona-kielce/startseite/verein/6110/',
    'LKS Lodz': 'https://transfermarkt.com/lks-lodz/startseite/verein/256/',
    'Ruch Chorzow': 'https://transfermarkt.com/ruch-chorzow/startseite/verein/318/',
    'Puszcza Niepolomice': 'https://transfermarkt.com/puszcza-niepolomice/startseite/verein/28893/',
    'Stal Mielec': 'https://transfermarkt.com/stal-mielec/startseite/verein/22431/'
};

export const DANISH_SUPERLIGA_URLS = {
    'FC Copenhagen': 'https://transfermarkt.com/fc-kopenhagen/startseite/verein/190/',
    'FC Midtjylland': 'https://transfermarkt.com/fc-midtjylland/startseite/verein/865/',
    'Bröndby IF': 'https://transfermarkt.com/brondby-if/startseite/verein/206/',
    'FC Nordsjaelland': 'https://transfermarkt.com/fc-nordsjaelland/startseite/verein/2778/',
    'Aarhus GF': 'https://transfermarkt.com/aarhus-gf/startseite/verein/678/',
    'Silkeborg IF': 'https://transfermarkt.com/silkeborg-if/startseite/verein/1177/',
    'Randers FC': 'https://transfermarkt.com/randers-fc/startseite/verein/5724/',
    'Viborg FF': 'https://transfermarkt.com/viborg-ff/startseite/verein/1063/',
    'Odense Boldklub': 'https://transfermarkt.com/odense-boldklub/startseite/verein/173/',
    'Lyngby BK': 'https://transfermarkt.com/lyngby-bk/startseite/verein/369/',
    'Vejle Boldklub': 'https://transfermarkt.com/vejle-boldklub/startseite/verein/443/',
    'Hvidovre IF': 'https://transfermarkt.com/hvidovre-if/startseite/verein/1894/'
};

export const CZECH_FIRST_LEAGUE_URLS = {
    'SK Slavia Prague': 'https://transfermarkt.com/sk-slavia-prag/startseite/verein/62/',
    'AC Sparta Prague': 'https://transfermarkt.com/ac-sparta-prag/startseite/verein/197/',
    'FC Viktoria Plzen': 'https://transfermarkt.com/fc-viktoria-pilsen/startseite/verein/941/',
    'FC Banik Ostrava': 'https://transfermarkt.com/fc-banik-ostrau/startseite/verein/377/',
    'FC Slovan Liberec': 'https://transfermarkt.com/fc-slovan-liberec/startseite/verein/697/',
    '1.FC Slovacko': 'https://transfermarkt.com/1-fc-slovacko/startseite/verein/5544/',
    'SK Sigma Olomouc': 'https://transfermarkt.com/sk-sigma-olmutz/startseite/verein/2311/',
    'FK Mlada Boleslav': 'https://transfermarkt.com/fk-mlada-boleslav/startseite/verein/5546/',
    'FC Hradec Kralove': 'https://transfermarkt.com/fc-hradec-kralove/startseite/verein/1897/',
    'FK Jablonec': 'https://transfermarkt.com/fk-jablonec/startseite/verein/1322/',
    'Bohemians Prague 1905': 'https://transfermarkt.com/fc-bohemians-prag-1905/startseite/verein/715/',
    'SK Dynamo Ceske Budejovice': 'https://transfermarkt.com/sk-dynamo-ceske-budejovice/startseite/verein/1321/',
    'FK Teplice': 'https://transfermarkt.com/fk-teplice/startseite/verein/814/',
    'FK Pardubice': 'https://transfermarkt.com/fk-pardubice/startseite/verein/1496/',
    'MFK Karvina': 'https://transfermarkt.com/mfk-karvina/startseite/verein/13726/',
    'FC Zlin': 'https://transfermarkt.com/fc-fastav-zlin/startseite/verein/5545/'
};

export const ELITESERIEN_URLS = {
    'FK Bodø/Glimt': 'https://transfermarkt.com/fk-bodo-glimt/startseite/verein/501/',
    'Molde FK': 'https://transfermarkt.com/molde-fk/startseite/verein/687/',
    'Rosenborg BK': 'https://transfermarkt.com/rosenborg-bk/startseite/verein/195/',
    'Lillestrøm SK': 'https://transfermarkt.com/lillestrom-sk/startseite/verein/353/',
    'Viking FK': 'https://transfermarkt.com/viking-stavanger/startseite/verein/239/',
    'Vålerenga Fotball': 'https://transfermarkt.com/valerenga-fotball/startseite/verein/76/',
    'Odds BK': 'https://transfermarkt.com/odds-bk/startseite/verein/1058/',
    'SK Brann': 'https://transfermarkt.com/sk-brann/startseite/verein/1100/',
    'Sarpsborg 08 FF': 'https://transfermarkt.com/sarpsborg-08-ff/startseite/verein/10217/',
    'Tromsø IL': 'https://transfermarkt.com/tromso-il/startseite/verein/1293/',
    'Strømsgodset IF': 'https://transfermarkt.com/stromsgodset-if/startseite/verein/2817/',
    'Stabæk Fotball': 'https://transfermarkt.com/stabaek-fotball/startseite/verein/1274/',
    'Aalesunds FK': 'https://transfermarkt.com/aalesunds-fk/startseite/verein/5619/',
    'FK Haugesund': 'https://transfermarkt.com/fk-haugesund/startseite/verein/2761/',
    Hamarkameratene: 'https://transfermarkt.com/hamarkameratene/startseite/verein/4309/',
    'Sandefjord Fotball': 'https://transfermarkt.com/sandefjord-fotball/startseite/verein/6399/'
};

export const ALLSVENSKAN_URLS = {
    'Malmö FF': 'https://transfermarkt.com/malmo-ff/startseite/verein/496/',
    'BK Häcken': 'https://transfermarkt.com/bk-hacken/startseite/verein/1109/',
    'Djurgårdens IF': 'https://transfermarkt.com/djurgardens-if/startseite/verein/1044/',
    'Hammarby IF': 'https://transfermarkt.com/hammarby-if/startseite/verein/1059/',
    'IF Elfsborg': 'https://transfermarkt.com/if-elfsborg-boras/startseite/verein/1101/',
    'AIK Solna': 'https://transfermarkt.com/aik-solna/startseite/verein/272/',
    'IFK Norrköping': 'https://transfermarkt.com/ifk-norrkoping/startseite/verein/2844/',
    'IFK Göteborg': 'https://transfermarkt.com/ifk-goteborg/startseite/verein/801/',
    'Kalmar FF': 'https://transfermarkt.com/kalmar-ff/startseite/verein/3654/',
    'Mjällby AIF': 'https://transfermarkt.com/mjallby-aif/startseite/verein/2719/',
    'IK Sirius': 'https://transfermarkt.com/ik-sirius/startseite/verein/7945/',
    'IFK Värnamo': 'https://transfermarkt.com/ifk-varnamo/startseite/verein/3622/',
    'Halmstads BK': 'https://transfermarkt.com/halmstads-bk/startseite/verein/1011/',
    'Degerfors IF': 'https://transfermarkt.com/degerfors-if/startseite/verein/3641/',
    'Varbergs BoIS': 'https://transfermarkt.com/varbergs-bois/startseite/verein/10507/',
    'IF Brommapojkarna': 'https://transfermarkt.com/if-brommapojkarna/startseite/verein/1092/'
};

export const LIGAT_HAAL_URLS = {
    'Maccabi Tel Aviv': 'https://transfermarkt.com/maccabi-tel-aviv/startseite/verein/119/',
    'Maccabi Haifa': 'https://transfermarkt.com/maccabi-haifa/startseite/verein/1064/',
    'Hapoel Beer Sheva': 'https://transfermarkt.com/hapoel-beer-sheva/startseite/verein/2976/',
    'Maccabi Netanya': 'https://transfermarkt.com/maccabi-netanya/startseite/verein/5223/',
    'FC Ashdod': 'https://transfermarkt.com/fc-ashdod/startseite/verein/6105/',
    'Hapoel Tel Aviv': 'https://transfermarkt.com/hapoel-tel-aviv/startseite/verein/1017/',
    'Beitar Jerusalem': 'https://transfermarkt.com/beitar-jerusalem/startseite/verein/3793/',
    'Hapoel Haifa': 'https://transfermarkt.com/hapoel-haifa/startseite/verein/810/',
    'Maccabi Petah Tikva': 'https://transfermarkt.com/maccabi-petah-tikva/startseite/verein/3785/',
    'Hapoel Jerusalem': 'https://transfermarkt.com/hapoel-jerusalem/startseite/verein/43119/',
    'Maccabi Bnei Reineh': 'https://transfermarkt.com/maccabi-bnei-reineh/startseite/verein/70178/',
    'Ihud Bnei Sakhnin': 'https://transfermarkt.com/ihud-bnei-sachnin/startseite/verein/4769/',
    'Hapoel Hadera': 'https://transfermarkt.com/hapoel-hadera/startseite/verein/51931/',
    'Hapoel Petah Tikva': 'https://transfermarkt.com/hapoel-petah-tikva/startseite/verein/262/'
};

export const NEMZETI_BAJNOKSAG_URLS = {
    'Ferencvárosi TC': 'https://transfermarkt.com/ferencvaros-budapest/startseite/verein/279/',
    'Puskás Akadémia FC': 'https://transfermarkt.com/puskas-akademia-fc/startseite/verein/37169/',
    'Fehérvár FC': 'https://transfermarkt.com/mol-fehervar-fc/startseite/verein/11107/',
    'Debreceni VSC': 'https://transfermarkt.com/debreceni-vsc/startseite/verein/84/',
    'MTK Budapest': 'https://transfermarkt.com/mtk-budapest/startseite/verein/634/',
    'Mezőkövesd Zsóry FC': 'https://transfermarkt.com/mez%C5%91kovesd-zsory-fc/startseite/verein/24032/',
    'Kisvárda FC': 'https://transfermarkt.com/kisvarda-fc/startseite/verein/30613/',
    'Újpest FC': 'https://transfermarkt.com/ujpest-fc/startseite/verein/708/',
    'Paksi FC': 'https://transfermarkt.com/paksi-fc/startseite/verein/12163/',
    'Diósgyőri VTK': 'https://transfermarkt.com/diosgy%C5%91ri-vtk/startseite/verein/9241/',
    'Zalaegerszegi TE FC': 'https://transfermarkt.com/zalaegerszegi-te-fc/startseite/verein/1391/',
    'Kecskeméti TE': 'https://transfermarkt.com/kecskemeti-te/startseite/verein/12423/'
};

export const EFBET_LIGA_URLS = {
    'Ludogorets Razgrad': 'https://transfermarkt.com/pfk-ludogorets-razgrad/startseite/verein/31614/',
    'CSKA-Sofia': 'https://transfermarkt.com/zska-sofia/startseite/verein/208/',
    'Levski Sofia': 'https://transfermarkt.com/levski-sofia/startseite/verein/156/',
    'CSKA 1948': 'https://transfermarkt.com/cska-1948/startseite/verein/61955/',
    'Botev Plovdiv': 'https://transfermarkt.com/botev-plovdiv/startseite/verein/2531/',
    'Arda Kardzhali': 'https://transfermarkt.com/pfc-arda-kardzhali/startseite/verein/40604/',
    'Lokomotiv Plovdiv': 'https://transfermarkt.com/lokomotive-plovdiv/startseite/verein/2259/',
    'Cherno More Varna': 'https://transfermarkt.com/cherno-more-varna/startseite/verein/967/',
    'Slavia Sofia': 'https://transfermarkt.com/slavia-sofia/startseite/verein/675/',
    'Lokomotiv Sofia': 'https://transfermarkt.com/lokomotiv-sofia/startseite/verein/730/',
    'Etar Veliko Tarnovo': 'https://transfermarkt.com/etar-veliko-tarnovo/startseite/verein/712/',
    'Botev Vratsa': 'https://transfermarkt.com/pofk-botev-vratsa/startseite/verein/26462/',
    'Hebar Pazardzhik': 'https://transfermarkt.com/hebar-pazardzhik/startseite/verein/26563/',
    Krumovgrad: 'https://transfermarkt.com/levski-krumovgrad/startseite/verein/91158/',
    'Beroe Stara Zagora': 'https://transfermarkt.com/pfc-beroe-stara-zagora/startseite/verein/6764/',
    'Pirin Blagoevgrad': 'https://transfermarkt.com/ofk-pirin-blagoevgrad/startseite/verein/521/'
};

/**
 * Object containing all the urls for the teams in the different leagues.
 * If you want to fetch information for a specific season, you should add the season to the url via
 * transfermarkt_scraper_utils.teamURLWithSeason(teamUrl, season) function.
 */
export const TEAM_URLS = {
    PREMIER_LEAGUE: PREMIER_LEAGUE_URLS,
    LA_LIGA: LA_LIGA_URLS,
    SERIE_A: SERIE_A_URLS,
    BUNDESLIGA: BUNDESLIGA_URLS,
    LIGUE_1: LIGUE_1_URLS,
    EREDIVISIE: EREDIVISIE_URLS,
    PRIMEIRA_LIGA: PRIMEIRA_LIGA_URLS,
    JUPILER_PRO_LEAGUE: JUPILER_PRO_LEAGUE_URLS,
    AUSTRIAN_BUNDESLIGA: AUSTRIAN_BUNDESLIGA_URLS,
    UKRAINIAN_PREMIER_LEAGUE: UKRAINIAN_PREMIER_LEAGUE_URLS,
    RUSSIAN_PREMIER_LEAGUE: RUSSIAN_PREMIER_LEAGUE_URLS,
    SUPER_LEAGUE_GREECE: SUPER_LEAGUE_GREECE_URLS,
    SUPER_LEAGUE_SWITZERLAND: SUPER_LEAGUE_SWITZERLAND_URLS,
    CROATIAN_FIRST_FOOTBALL_LEAGUE: CROATIAN_FIRST_FOOTBALL_LEAGUE_URLS,
    POLISH_EKSTRAKLASA: POLISH_EKSTRAKLASA_URLS,
    DANISH_SUPERLIGA: DANISH_SUPERLIGA_URLS,
    CZECH_FIRST_LEAGUE: CZECH_FIRST_LEAGUE_URLS,
    ELITESERIEN: ELITESERIEN_URLS,
    ALLSVENSKAN: ALLSVENSKAN_URLS,
    LIGAT_HAAL: LIGAT_HAAL_URLS,
    NEMZETI_BAJNOKSAG: NEMZETI_BAJNOKSAG_URLS,
    EFBET_LIGA: EFBET_LIGA_URLS,
    SCOTTISH_PREMIERSHIP: SCOTTISH_PREMIERSHIP_URLS,
    SUPER_LIG: SUPER_LIG_URLS,
};
