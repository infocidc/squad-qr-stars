import { supabase } from "@/integrations/supabase/client";
import { Player, Team } from "@/types";

// Teams data remains the same for now
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

export const getPlayers = async (): Promise<Player[]> => {
  try {
    const { data, error } = await supabase
      .from('players')
      .select('*');
    
    if (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
    
    // Transform the data to match our Player type
    const players: Player[] = data.map(player => ({
      id: player.id,
      name: player.name,
      position: player.position,
      club: player.club,
      country: player.country,
      squad_number: player.squad_number || undefined,
      caps: player.caps || undefined,
      goals: player.goals || undefined,
      age: player.age || undefined,
      height: player.height || undefined,
      rating: player.rating || undefined,
      flagCode: player.flag_code || undefined
    }));
    
    return players;
  } catch (error) {
    console.error('Failed to fetch players from Supabase:', error);
    // Fallback to local data if Supabase query fails
    console.log('Using local player data as fallback');
    return Promise.resolve(players);
  }
};

export const getTeams = (): Promise<Team[]> => {
  return Promise.resolve(teams);
};

export const getPlayerById = async (id: string): Promise<Player | undefined> => {
  try {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching player by ID:', error);
      throw error;
    }
    
    if (!data) return undefined;
    
    // Transform to match our Player type
    const player: Player = {
      id: data.id,
      name: data.name,
      position: data.position,
      club: data.club,
      country: data.country,
      squad_number: data.squad_number || undefined,
      caps: data.caps || undefined,
      goals: data.goals || undefined,
      age: data.age || undefined,
      height: data.height || undefined,
      rating: data.rating || undefined,
      flagCode: data.flag_code || undefined
    };
    
    return player;
  } catch (error) {
    console.error('Failed to fetch player from Supabase:', error);
    // Fallback to local data
    console.log('Using local player data as fallback');
    const player = players.find((p) => p.id === id);
    return Promise.resolve(player);
  }
};

export const getPlayersByCountry = async (country: string): Promise<Player[]> => {
  try {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .ilike('country', country);
    
    if (error) {
      console.error('Error fetching players by country:', error);
      throw error;
    }
    
    // Transform the data to match our Player type
    const filteredPlayers: Player[] = data.map(player => ({
      id: player.id,
      name: player.name,
      position: player.position,
      club: player.club,
      country: player.country,
      squad_number: player.squad_number || undefined,
      caps: player.caps || undefined,
      goals: player.goals || undefined,
      age: player.age || undefined,
      height: player.height || undefined,
      rating: player.rating || undefined,
      flagCode: player.flag_code || undefined
    }));
    
    return filteredPlayers;
  } catch (error) {
    console.error('Failed to fetch players by country from Supabase:', error);
    // Fallback to local data
    console.log('Using local player data as fallback');
    const filteredPlayers = players.filter((p) => p.country.toLowerCase() === country.toLowerCase());
    return Promise.resolve(filteredPlayers);
  }
};

// Local players data for fallback
// Note: This is not the primary data source anymore, but kept as a fallback
const players: Player[] = [
  // Group A - Russia
  {
    id: "rus1",
    name: "Igor Akinfeev",
    position: "Goalkeeper",
    club: "CSKA Moscow",
    country: "Russia",
    squad_number: 1,
    caps: 106,
    goals: 0,
    age: 32,
    height: 186,
    rating: 4,
    flagCode: "ru"
  },
  {
    id: "rus2",
    name: "Mario Fernandes",
    position: "Defender",
    club: "CSKA Moscow",
    country: "Russia",
    squad_number: 2,
    caps: 5,
    goals: 0,
    age: 27,
    height: 187,
    rating: 3,
    flagCode: "ru"
  },
  {
    id: "rus3",
    name: "Aleksandr Golovin",
    position: "Midfielder",
    club: "CSKA Moscow",
    country: "Russia",
    squad_number: 17,
    caps: 19,
    goals: 2,
    age: 22,
    height: 180,
    rating: 4,
    flagCode: "ru"
  },
  {
    id: "rus-coach",
    name: "Stanislav Cherchesov",
    position: "Coach",
    club: "Russia",
    country: "Russia",
    caps: 0,
    goals: 0,
    age: 54,
    flagCode: "ru"
  },
  
  // Group A - Saudi Arabia
  {
    id: "ksa1",
    name: "Mohammed Al-Owais",
    position: "Goalkeeper",
    club: "Al-Ahli",
    country: "Saudi Arabia",
    squad_number: 22,
    caps: 16,
    goals: 0,
    age: 26,
    height: 185,
    rating: 3,
    flagCode: "sa"
  },
  {
    id: "ksa2",
    name: "Osama Hawsawi",
    position: "Defender",
    club: "Al-Hilal",
    country: "Saudi Arabia",
    squad_number: 3,
    caps: 135,
    goals: 7,
    age: 34,
    height: 184,
    rating: 3,
    flagCode: "sa"
  },
  {
    id: "ksa3",
    name: "Salem Al-Dawsari",
    position: "Midfielder",
    club: "Al-Hilal",
    country: "Saudi Arabia",
    squad_number: 18,
    caps: 33,
    goals: 4,
    age: 26,
    height: 171,
    rating: 3,
    flagCode: "sa"
  },
  {
    id: "ksa-coach",
    name: "Juan Antonio Pizzi",
    position: "Coach",
    club: "Saudi Arabia",
    country: "Saudi Arabia",
    caps: 0,
    goals: 0,
    age: 50,
    flagCode: "sa"
  },
  
  // Group A - Egypt
  {
    id: "egy1",
    name: "Mohamed Salah",
    position: "Forward",
    club: "Liverpool",
    country: "Egypt",
    squad_number: 10,
    caps: 57,
    goals: 33,
    age: 25,
    height: 175,
    rating: 5,
    flagCode: "eg"
  },
  {
    id: "egy2",
    name: "Essam El-Hadary",
    position: "Goalkeeper",
    club: "Al-Taawoun",
    country: "Egypt",
    squad_number: 1,
    caps: 158,
    goals: 0,
    age: 45,
    height: 188,
    rating: 3,
    flagCode: "eg"
  },
  {
    id: "egy3",
    name: "Ahmed Hegazi",
    position: "Defender",
    club: "West Bromwich Albion",
    country: "Egypt",
    squad_number: 6,
    caps: 45,
    goals: 1,
    age: 27,
    height: 195,
    rating: 3,
    flagCode: "eg"
  },
  {
    id: "egy-coach",
    name: "Héctor Cúper",
    position: "Coach",
    club: "Egypt",
    country: "Egypt",
    caps: 0,
    goals: 0,
    age: 62,
    flagCode: "eg"
  },
  
  // Group A - Uruguay
  {
    id: "uru1",
    name: "Luis Suárez",
    position: "Forward",
    club: "Barcelona",
    country: "Uruguay",
    squad_number: 9,
    caps: 98,
    goals: 51,
    age: 31,
    height: 182,
    rating: 5,
    flagCode: "uy"
  },
  {
    id: "uru2",
    name: "Edinson Cavani",
    position: "Forward",
    club: "Paris Saint-Germain",
    country: "Uruguay",
    squad_number: 21,
    caps: 101,
    goals: 42,
    age: 31,
    height: 184,
    rating: 5,
    flagCode: "uy"
  },
  {
    id: "uru3",
    name: "Diego Godín",
    position: "Defender",
    club: "Atlético Madrid",
    country: "Uruguay",
    squad_number: 3,
    caps: 116,
    goals: 8,
    age: 32,
    height: 187,
    rating: 4,
    flagCode: "uy"
  },
  {
    id: "uru-coach",
    name: "Óscar Tabárez",
    position: "Coach",
    club: "Uruguay",
    country: "Uruguay",
    caps: 0,
    goals: 0,
    age: 71,
    flagCode: "uy"
  },
  
  // Group B - Portugal
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
    id: "por2",
    name: "Rui Patrício",
    position: "Goalkeeper",
    club: "Sporting CP",
    country: "Portugal",
    squad_number: 1,
    caps: 70,
    goals: 0,
    age: 30,
    height: 190,
    rating: 4,
    flagCode: "pt"
  },
  {
    id: "por3",
    name: "Pepe",
    position: "Defender",
    club: "Beşiktaş",
    country: "Portugal",
    squad_number: 3,
    caps: 99,
    goals: 7,
    age: 35,
    height: 188,
    rating: 4,
    flagCode: "pt"
  },
  {
    id: "por-coach",
    name: "Fernando Santos",
    position: "Coach",
    club: "Portugal",
    country: "Portugal",
    caps: 0,
    goals: 0,
    age: 63,
    flagCode: "pt"
  },
  
  // Group B - Spain
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
    id: "esp2",
    name: "David de Gea",
    position: "Goalkeeper",
    club: "Manchester United",
    country: "Spain",
    squad_number: 1,
    caps: 29,
    goals: 0,
    age: 27,
    height: 192,
    rating: 5,
    flagCode: "es"
  },
  {
    id: "esp3",
    name: "Andrés Iniesta",
    position: "Midfielder",
    club: "Barcelona",
    country: "Spain",
    squad_number: 6,
    caps: 127,
    goals: 14,
    age: 34,
    height: 171,
    rating: 5,
    flagCode: "es"
  },
  {
    id: "esp-coach",
    name: "Fernando Hierro",
    position: "Coach",
    club: "Spain",
    country: "Spain",
    caps: 0,
    goals: 0,
    age: 50,
    flagCode: "es"
  },
  
  // Group B - Morocco
  {
    id: "mar1",
    name: "Medhi Benatia",
    position: "Defender",
    club: "Juventus",
    country: "Morocco",
    squad_number: 5,
    caps: 58,
    goals: 2,
    age: 31,
    height: 190,
    rating: 4,
    flagCode: "ma"
  },
  {
    id: "mar2",
    name: "Hakim Ziyech",
    position: "Midfielder",
    club: "Ajax",
    country: "Morocco",
    squad_number: 7,
    caps: 17,
    goals: 9,
    age: 25,
    height: 181,
    rating: 4,
    flagCode: "ma"
  },
  {
    id: "mar3",
    name: "Younès Belhanda",
    position: "Midfielder",
    club: "Galatasaray",
    country: "Morocco",
    squad_number: 10,
    caps: 47,
    goals: 5,
    age: 28,
    height: 180,
    rating: 3,
    flagCode: "ma"
  },
  {
    id: "mar-coach",
    name: "Hervé Renard",
    position: "Coach",
    club: "Morocco",
    country: "Morocco",
    caps: 0,
    goals: 0,
    age: 49,
    flagCode: "ma"
  },
  
  // Group B - Iran
  {
    id: "irn1",
    name: "Alireza Beiranvand",
    position: "Goalkeeper",
    club: "Persepolis",
    country: "Iran",
    squad_number: 1,
    caps: 29,
    goals: 0,
    age: 25,
    height: 194,
    rating: 3,
    flagCode: "ir"
  },
  {
    id: "irn2",
    name: "Sardar Azmoun",
    position: "Forward",
    club: "Rubin Kazan",
    country: "Iran",
    squad_number: 20,
    caps: 33,
    goals: 23,
    age: 23,
    height: 186,
    rating: 3,
    flagCode: "ir"
  },
  {
    id: "irn3",
    name: "Ehsan Hajsafi",
    position: "Midfielder",
    club: "Olympiacos",
    country: "Iran",
    squad_number: 3,
    caps: 94,
    goals: 6,
    age: 28,
    height: 178,
    rating: 3,
    flagCode: "ir"
  },
  {
    id: "irn-coach",
    name: "Carlos Queiroz",
    position: "Coach",
    club: "Iran",
    country: "Iran",
    caps: 0,
    goals: 0,
    age: 65,
    flagCode: "ir"
  },
  
  // Group C - France
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
    id: "fra-coach",
    name: "Didier Deschamps",
    position: "Coach",
    club: "France",
    country: "France",
    caps: 0,
    goals: 0,
    age: 49,
    flagCode: "fr"
  },
  
  // Group C - Australia
  {
    id: "aus1",
    name: "Mile Jedinak",
    position: "Midfielder",
    club: "Aston Villa",
    country: "Australia",
    squad_number: 15,
    caps: 75,
    goals: 18,
    age: 33,
    height: 189,
    rating: 3,
    flagCode: "au"
  },
  {
    id: "aus2",
    name: "Mathew Ryan",
    position: "Goalkeeper",
    club: "Brighton & Hove Albion",
    country: "Australia",
    squad_number: 1,
    caps: 44,
    goals: 0,
    age: 26,
    height: 184,
    rating: 3,
    flagCode: "au"
  },
  {
    id: "aus3",
    name: "Tim Cahill",
    position: "Forward",
    club: "Millwall",
    country: "Australia",
    squad_number: 4,
    caps: 106,
    goals: 50,
    age: 38,
    height: 180,
    rating: 3,
    flagCode: "au"
  },
  {
    id: "aus-coach",
    name: "Bert van Marwijk",
    position: "Coach",
    club: "Australia",
    country: "Australia",
    caps: 0,
    goals: 0,
    age: 66,
    flagCode: "au"
  },
  
  // Group C - Peru
  {
    id: "per1",
    name: "Paolo Guerrero",
    position: "Forward",
    club: "Flamengo",
    country: "Peru",
    squad_number: 9,
    caps: 86,
    goals: 34,
    age: 34,
    height: 185,
    rating: 3,
    flagCode: "pe"
  },
  {
    id: "per2",
    name: "Pedro Gallese",
    position: "Goalkeeper",
    club: "Veracruz",
    country: "Peru",
    squad_number: 1,
    caps: 38,
    goals: 0,
    age: 28,
    height: 189,
    rating: 3,
    flagCode: "pe"
  },
  {
    id: "per3",
    name: "Jefferson Farfán",
    position: "Forward",
    club: "Lokomotiv Moscow",
    country: "Peru",
    squad_number: 10,
    caps: 85,
    goals: 26,
    age: 33,
    height: 178,
    rating: 3,
    flagCode: "pe"
  },
  {
    id: "per-coach",
    name: "Ricardo Gareca",
    position: "Coach",
    club: "Peru",
    country: "Peru",
    caps: 0,
    goals: 0,
    age: 60,
    flagCode: "pe"
  },
  
  // Group C - Denmark
  {
    id: "den1",
    name: "Christian Eriksen",
    position: "Midfielder",
    club: "Tottenham Hotspur",
    country: "Denmark",
    squad_number: 10,
    caps: 77,
    goals: 23,
    age: 26,
    height: 182,
    rating: 4,
    flagCode: "dk"
  },
  {
    id: "den2",
    name: "Kasper Schmeichel",
    position: "Goalkeeper",
    club: "Leicester City",
    country: "Denmark",
    squad_number: 1,
    caps: 34,
    goals: 0,
    age: 31,
    height: 189,
    rating: 4,
    flagCode: "dk"
  },
  {
    id: "den3",
    name: "Simon Kjær",
    position: "Defender",
    club: "Sevilla",
    country: "Denmark",
    squad_number: 4,
    caps: 78,
    goals: 3,
    age: 29,
    height: 189,
    rating: 3,
    flagCode: "dk"
  },
  {
    id: "den-coach",
    name: "Åge Hareide",
    position: "Coach",
    club: "Denmark",
    country: "Denmark",
    caps: 0,
    goals: 0,
    age: 64,
    flagCode: "dk"
  },
  
  // Group D - Argentina
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
    id: "arg2",
    name: "Sergio Agüero",
    position: "Forward",
    club: "Manchester City",
    country: "Argentina",
    squad_number: 19,
    caps: 83,
    goals: 37,
    age: 30,
    height: 173,
    rating: 5,
    flagCode: "ar"
  },
  {
    id: "arg3",
    name: "Javier Mascherano",
    position: "Midfielder",
    club: "Hebei China Fortune",
    country: "Argentina",
    squad_number: 14,
    caps: 143,
    goals: 3,
    age: 34,
    height: 174,
    rating: 4,
    flagCode: "ar"
  },
  {
    id: "arg-coach",
    name: "Jorge Sampaoli",
    position: "Coach",
    club: "Argentina",
    country: "Argentina",
    caps: 0,
    goals: 0,
    age: 58,
    flagCode: "ar"
  },
  
  // Group D - Iceland
  {
    id: "isl1",
    name: "Gylfi Sigurðsson",
    position: "Midfielder",
    club: "Everton",
    country: "Iceland",
    squad_number: 10,
    caps: 57,
    goals: 19,
    age: 28,
    height: 186,
    rating: 4,
    flagCode: "is"
  },
  {
    id: "isl2",
    name: "Hannes Þór Halldórsson",
    position: "Goalkeeper",
    club: "Randers",
    country: "Iceland",
    squad_number: 1,
    caps: 49,
    goals: 0,
    age: 34,
    height: 193,
    rating: 3,
    flagCode: "is"
  },
  {
    id: "isl3",
    name: "Aron Gunnarsson",
    position: "Midfielder",
    club: "Cardiff City",
    country: "Iceland",
    squad_number: 17,
    caps: 77,
    goals: 2,
    age: 29,
    height: 182,
    rating: 3,
    flagCode: "is"
  },
  {
    id: "isl-coach",
    name: "Heimir Hallgrímsson",
    position: "Coach",
    club: "Iceland",
    country: "Iceland",
    caps: 0,
    goals: 0,
    age: 51,
    flagCode: "is"
  },
  
  // Group D - Croatia
  {
    id: "cro1",
    name: "Luka Modrić",
    position: "Midfielder",
    club: "Real Madrid",
    country: "Croatia",
    squad_number: 10,
    caps: 106,
    goals: 13,
    age: 32,
    height: 172,
    rating: 5,
    flagCode: "hr"
