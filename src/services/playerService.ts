
import { Player, Team } from "@/types";

// Mock data for teams in the 2018 World Cup
const teams: Team[] = [
  {
    id: "1",
    name: "France",
    code: "FRA",
    flagCode: "fr",
    group: "C"
  },
  {
    id: "2",
    name: "Brazil",
    code: "BRA",
    flagCode: "br",
    group: "E"
  },
  {
    id: "3",
    name: "England",
    code: "ENG",
    flagCode: "gb-eng",
    group: "G"
  },
  {
    id: "4",
    name: "Spain",
    code: "ESP",
    flagCode: "es",
    group: "B"
  },
  {
    id: "5",
    name: "Germany",
    code: "GER",
    flagCode: "de",
    group: "F"
  },
  {
    id: "6",
    name: "Argentina",
    code: "ARG",
    flagCode: "ar",
    group: "D"
  },
  {
    id: "7",
    name: "Belgium",
    code: "BEL",
    flagCode: "be",
    group: "G"
  },
  {
    id: "8",
    name: "Portugal",
    code: "POR",
    flagCode: "pt",
    group: "B"
  }
];

// Mock data representing players from the 2018 World Cup
const players: Player[] = [
  {
    id: "1",
    name: "Kylian Mbappé",
    position: "Forward",
    club: "Paris Saint-Germain",
    country: "France",
    squad_number: 10,
    caps: 45,
    goals: 19,
    age: 19,
    height: 178,
    rating: 5,
    flagCode: "fr"
  },
  {
    id: "2",
    name: "Neymar Jr",
    position: "Forward",
    club: "Paris Saint-Germain",
    country: "Brazil",
    squad_number: 10,
    caps: 98,
    goals: 61,
    age: 26,
    height: 175,
    rating: 5,
    flagCode: "br"
  },
  {
    id: "3",
    name: "Harry Kane",
    position: "Forward",
    club: "Tottenham Hotspur",
    country: "England",
    squad_number: 9,
    caps: 34,
    goals: 16,
    age: 24,
    height: 188,
    rating: 4,
    flagCode: "gb-eng"
  },
  {
    id: "4",
    name: "Sergio Ramos",
    position: "Defender",
    club: "Real Madrid",
    country: "Spain",
    squad_number: 15,
    caps: 156,
    goals: 13,
    age: 32,
    height: 184,
    rating: 4,
    flagCode: "es"
  },
  {
    id: "5",
    name: "Toni Kroos",
    position: "Midfielder",
    club: "Real Madrid",
    country: "Germany",
    squad_number: 8,
    caps: 82,
    goals: 12,
    age: 28,
    height: 182,
    rating: 5,
    flagCode: "de"
  },
  {
    id: "6",
    name: "Lionel Messi",
    position: "Forward",
    club: "Barcelona",
    country: "Argentina",
    squad_number: 10,
    caps: 128,
    goals: 64,
    age: 30,
    height: 170,
    rating: 5,
    flagCode: "ar"
  },
  {
    id: "7",
    name: "Eden Hazard",
    position: "Midfielder",
    club: "Chelsea",
    country: "Belgium",
    squad_number: 10,
    caps: 86,
    goals: 22,
    age: 27,
    height: 173,
    rating: 4,
    flagCode: "be"
  },
  {
    id: "8",
    name: "Cristiano Ronaldo",
    position: "Forward",
    club: "Real Madrid",
    country: "Portugal",
    squad_number: 7,
    caps: 150,
    goals: 81,
    age: 33,
    height: 187,
    rating: 5,
    flagCode: "pt"
  },
  {
    id: "9",
    name: "Antoine Griezmann",
    position: "Forward",
    club: "Atlético Madrid",
    country: "France",
    squad_number: 7,
    caps: 54,
    goals: 20,
    age: 27,
    height: 176,
    rating: 4,
    flagCode: "fr"
  },
  {
    id: "10",
    name: "Philippe Coutinho",
    position: "Midfielder",
    club: "Barcelona",
    country: "Brazil",
    squad_number: 11,
    caps: 35,
    goals: 9,
    age: 25,
    height: 172,
    rating: 4,
    flagCode: "br"
  },
  {
    id: "11",
    name: "N'Golo Kanté",
    position: "Midfielder",
    club: "Chelsea",
    country: "France",
    squad_number: 13,
    caps: 24,
    goals: 1,
    age: 27,
    height: 168,
    rating: 4,
    flagCode: "fr"
  },
  {
    id: "12",
    name: "Manuel Neuer",
    position: "Goalkeeper",
    club: "Bayern Munich",
    country: "Germany",
    squad_number: 1,
    caps: 74,
    goals: 0,
    age: 32,
    height: 193,
    rating: 5,
    flagCode: "de"
  }
];

export const getPlayers = (): Promise<Player[]> => {
  return Promise.resolve(players);
};

export const getTeams = (): Promise<Team[]> => {
  return Promise.resolve(teams);
};

export const getPlayerById = (id: string): Promise<Player | undefined> => {
  const player = players.find((p) => p.id === id);
  return Promise.resolve(player);
};

export const getPlayersByCountry = (country: string): Promise<Player[]> => {
  const filteredPlayers = players.filter((p) => p.country.toLowerCase() === country.toLowerCase());
  return Promise.resolve(filteredPlayers);
};
