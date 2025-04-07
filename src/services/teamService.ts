
import { Team } from "@/types";

// Teams data
const teams: Team[] = [
  {
    id: "1",
    name: "Russia",
    code: "RUS",
    flagCode: "ru",
    group: "A"
  },
  {
    id: "2",
    name: "Saudi Arabia",
    code: "KSA",
    flagCode: "sa",
    group: "A"
  },
  {
    id: "3",
    name: "Egypt",
    code: "EGY",
    flagCode: "eg",
    group: "A"
  },
  {
    id: "4",
    name: "Uruguay",
    code: "URU",
    flagCode: "uy",
    group: "A"
  },
  {
    id: "5",
    name: "Portugal",
    code: "POR",
    flagCode: "pt",
    group: "B"
  },
  {
    id: "6",
    name: "Spain",
    code: "ESP",
    flagCode: "es",
    group: "B"
  },
  {
    id: "7",
    name: "Morocco",
    code: "MAR",
    flagCode: "ma",
    group: "B"
  },
  {
    id: "8",
    name: "Iran",
    code: "IRN",
    flagCode: "ir",
    group: "B"
  },
  {
    id: "9",
    name: "France",
    code: "FRA",
    flagCode: "fr",
    group: "C"
  },
  {
    id: "10",
    name: "Australia",
    code: "AUS",
    flagCode: "au",
    group: "C"
  },
  {
    id: "11",
    name: "Peru",
    code: "PER",
    flagCode: "pe",
    group: "C"
  },
  {
    id: "12",
    name: "Denmark",
    code: "DEN",
    flagCode: "dk",
    group: "C"
  },
  {
    id: "13",
    name: "Argentina",
    code: "ARG",
    flagCode: "ar",
    group: "D"
  },
  {
    id: "14",
    name: "Iceland",
    code: "ISL",
    flagCode: "is",
    group: "D"
  },
  {
    id: "15",
    name: "Croatia",
    code: "CRO",
    flagCode: "hr",
    group: "D"
  },
  {
    id: "16",
    name: "Nigeria",
    code: "NGA",
    flagCode: "ng",
    group: "D"
  },
  {
    id: "17",
    name: "Brazil",
    code: "BRA",
    flagCode: "br",
    group: "E"
  },
  {
    id: "18",
    name: "Switzerland",
    code: "SUI",
    flagCode: "ch",
    group: "E"
  },
  {
    id: "19",
    name: "Costa Rica",
    code: "CRC",
    flagCode: "cr",
    group: "E"
  },
  {
    id: "20",
    name: "Serbia",
    code: "SRB",
    flagCode: "rs",
    group: "E"
  },
  {
    id: "21",
    name: "Germany",
    code: "GER",
    flagCode: "de",
    group: "F"
  },
  {
    id: "22",
    name: "Mexico",
    code: "MEX",
    flagCode: "mx",
    group: "F"
  },
  {
    id: "23",
    name: "Sweden",
    code: "SWE",
    flagCode: "se",
    group: "F"
  },
  {
    id: "24",
    name: "South Korea",
    code: "KOR",
    flagCode: "kr",
    group: "F"
  },
  {
    id: "25",
    name: "Belgium",
    code: "BEL",
    flagCode: "be",
    group: "G"
  },
  {
    id: "26",
    name: "Panama",
    code: "PAN",
    flagCode: "pa",
    group: "G"
  },
  {
    id: "27",
    name: "Tunisia",
    code: "TUN",
    flagCode: "tn",
    group: "G"
  },
  {
    id: "28",
    name: "England",
    code: "ENG",
    flagCode: "gb-eng",
    group: "G"
  },
  {
    id: "29",
    name: "Poland",
    code: "POL",
    flagCode: "pl",
    group: "H"
  },
  {
    id: "30",
    name: "Senegal",
    code: "SEN",
    flagCode: "sn",
    group: "H"
  },
  {
    id: "31",
    name: "Colombia",
    code: "COL",
    flagCode: "co",
    group: "H"
  },
  {
    id: "32",
    name: "Japan",
    code: "JPN",
    flagCode: "jp",
    group: "H"
  }
];

// Gets all teams
export const getTeams = (): Promise<Team[]> => {
  return Promise.resolve(teams);
};

// Gets a specific team by ID
export const getTeamById = (id: string): Promise<Team | undefined> => {
  const team = teams.find(t => t.id === id);
  return Promise.resolve(team);
};

// Gets all teams for a specific group
export const getTeamsByGroup = (group: string): Promise<Team[]> => {
  const filteredTeams = teams.filter(t => t.group === group);
  return Promise.resolve(filteredTeams);
};
