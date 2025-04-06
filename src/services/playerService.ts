
import { Player, Team } from "@/types";

// Mock data for teams in the 2018 World Cup
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

// Expanded list of players from the 2018 World Cup
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
  },
  {
    id: "cro2",
    name: "Ivan Rakitić",
    position: "Midfielder",
    club: "Barcelona",
    country: "Croatia",
    squad_number: 7,
    caps: 92,
    goals: 15,
    age: 30,
    height: 184,
    rating: 4,
    flagCode: "hr"
  },
  {
    id: "cro3",
    name: "Mario Mandžukić",
    position: "Forward",
    club: "Juventus",
    country: "Croatia",
    squad_number: 17,
    caps: 83,
    goals: 31,
    age: 32,
    height: 190,
    rating: 4,
    flagCode: "hr"
  },
  {
    id: "cro-coach",
    name: "Zlatko Dalić",
    position: "Coach",
    club: "Croatia",
    country: "Croatia",
    caps: 0,
    goals: 0,
    age: 51,
    flagCode: "hr"
  },
  
  // Group D - Nigeria
  {
    id: "nga1",
    name: "John Obi Mikel",
    position: "Midfielder",
    club: "Tianjin TEDA",
    country: "Nigeria",
    squad_number: 10,
    caps: 85,
    goals: 6,
    age: 31,
    height: 188,
    rating: 3,
    flagCode: "ng"
  },
  {
    id: "nga2",
    name: "Victor Moses",
    position: "Midfielder",
    club: "Chelsea",
    country: "Nigeria",
    squad_number: 11,
    caps: 34,
    goals: 11,
    age: 27,
    height: 177,
    rating: 3,
    flagCode: "ng"
  },
  {
    id: "nga3",
    name: "Ahmed Musa",
    position: "Forward",
    club: "CSKA Moscow",
    country: "Nigeria",
    squad_number: 7,
    caps: 72,
    goals: 13,
    age: 25,
    height: 170,
    rating: 3,
    flagCode: "ng"
  },
  {
    id: "nga-coach",
    name: "Gernot Rohr",
    position: "Coach",
    club: "Nigeria",
    country: "Nigeria",
    caps: 0,
    goals: 0,
    age: 64,
    flagCode: "ng"
  },
  
  // Group E - Brazil
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
    id: "bra3",
    name: "Thiago Silva",
    position: "Defender",
    club: "Paris Saint-Germain",
    country: "Brazil",
    squad_number: 2,
    caps: 70,
    goals: 7,
    age: 33,
    height: 183,
    rating: 4,
    flagCode: "br"
  },
  {
    id: "bra-coach",
    name: "Tite",
    position: "Coach",
    club: "Brazil",
    country: "Brazil",
    caps: 0,
    goals: 0,
    age: 57,
    flagCode: "br"
  },
  
  // Group E - Switzerland
  {
    id: "sui1",
    name: "Xherdan Shaqiri",
    position: "Midfielder",
    club: "Stoke City",
    country: "Switzerland",
    squad_number: 23,
    caps: 74,
    goals: 20,
    age: 26,
    height: 169,
    rating: 4,
    flagCode: "ch"
  },
  {
    id: "sui2",
    name: "Granit Xhaka",
    position: "Midfielder",
    club: "Arsenal",
    country: "Switzerland",
    squad_number: 10,
    caps: 61,
    goals: 9,
    age: 25,
    height: 185,
    rating: 4,
    flagCode: "ch"
  },
  {
    id: "sui3",
    name: "Yann Sommer",
    position: "Goalkeeper",
    club: "Borussia Mönchengladbach",
    country: "Switzerland",
    squad_number: 1,
    caps: 36,
    goals: 0,
    age: 29,
    height: 183,
    rating: 4,
    flagCode: "ch"
  },
  {
    id: "sui-coach",
    name: "Vladimir Petković",
    position: "Coach",
    club: "Switzerland",
    country: "Switzerland",
    caps: 0,
    goals: 0,
    age: 54,
    flagCode: "ch"
  },
  
  // Group E - Costa Rica
  {
    id: "crc1",
    name: "Keylor Navas",
    position: "Goalkeeper",
    club: "Real Madrid",
    country: "Costa Rica",
    squad_number: 1,
    caps: 81,
    goals: 0,
    age: 31,
    height: 185,
    rating: 4,
    flagCode: "cr"
  },
  {
    id: "crc2",
    name: "Bryan Ruiz",
    position: "Midfielder",
    club: "Sporting CP",
    country: "Costa Rica",
    squad_number: 10,
    caps: 110,
    goals: 24,
    age: 32,
    height: 187,
    rating: 3,
    flagCode: "cr"
  },
  {
    id: "crc3",
    name: "Celso Borges",
    position: "Midfielder",
    club: "Deportivo La Coruña",
    country: "Costa Rica",
    squad_number: 5,
    caps: 113,
    goals: 21,
    age: 30,
    height: 187,
    rating: 3,
    flagCode: "cr"
  },
  {
    id: "crc-coach",
    name: "Óscar Ramírez",
    position: "Coach",
    club: "Costa Rica",
    country: "Costa Rica",
    caps: 0,
    goals: 0,
    age: 53,
    flagCode: "cr"
  },
  
  // Group E - Serbia
  {
    id: "srb1",
    name: "Nemanja Matić",
    position: "Midfielder",
    club: "Manchester United",
    country: "Serbia",
    squad_number: 21,
    caps: 42,
    goals: 2,
    age: 29,
    height: 194,
    rating: 4,
    flagCode: "rs"
  },
  {
    id: "srb2",
    name: "Aleksandar Kolarov",
    position: "Defender",
    club: "Roma",
    country: "Serbia",
    squad_number: 11,
    caps: 78,
    goals: 11,
    age: 32,
    height: 187,
    rating: 4,
    flagCode: "rs"
  },
  {
    id: "srb3",
    name: "Dušan Tadić",
    position: "Midfielder",
    club: "Southampton",
    country: "Serbia",
    squad_number: 10,
    caps: 55,
    goals: 13,
    age: 29,
    height: 181,
    rating: 3,
    flagCode: "rs"
  },
  {
    id: "srb-coach",
    name: "Mladen Krstajić",
    position: "Coach",
    club: "Serbia",
    country: "Serbia",
    caps: 0,
    goals: 0,
    age: 44,
    flagCode: "rs"
  },
  
  // Group F - Germany
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
  },
  {
    id: "ger3",
    name: "Thomas Müller",
    position: "Forward",
    club: "Bayern Munich",
    country: "Germany",
    squad_number: 13,
    caps: 90,
    goals: 38,
    age: 28,
    height: 186,
    rating: 4,
    flagCode: "de"
  },
  {
    id: "ger-coach",
    name: "Joachim Löw",
    position: "Coach",
    club: "Germany",
    country: "Germany",
    caps: 0,
    goals: 0,
    age: 58,
    flagCode: "de"
  },
  
  // Group F - Mexico
  {
    id: "mex1",
    name: "Javier Hernández",
    position: "Forward",
    club: "West Ham United",
    country: "Mexico",
    squad_number: 14,
    caps: 100,
    goals: 49,
    age: 30,
    height: 175,
    rating: 4,
    flagCode: "mx"
  },
  {
    id: "mex2",
    name: "Guillermo Ochoa",
    position: "Goalkeeper",
    club: "Standard Liège",
    country: "Mexico",
    squad_number: 13,
    caps: 94,
    goals: 0,
    age: 32,
    height: 185,
    rating: 4,
    flagCode: "mx"
  },
  {
    id: "mex3",
    name: "Andrés Guardado",
    position: "Midfielder",
    club: "Real Betis",
    country: "Mexico",
    squad_number: 18,
    caps: 144,
    goals: 25,
    age: 31,
    height: 169,
    rating: 4,
    flagCode: "mx"
  },
  {
    id: "mex-coach",
    name: "Juan Carlos Osorio",
    position: "Coach",
    club: "Mexico",
    country: "Mexico",
    caps: 0,
    goals: 0,
    age: 56,
    flagCode: "mx"
  },
  
  // Group F - Sweden
  {
    id: "swe1",
    name: "Andreas Granqvist",
    position: "Defender",
    club: "Krasnodar",
    country: "Sweden",
    squad_number: 4,
    caps: 71,
    goals: 7,
    age: 33,
    height: 192,
    rating: 3,
    flagCode: "se"
  },
  {
    id: "swe2",
    name: "Emil Forsberg",
    position: "Midfielder",
    club: "RB Leipzig",
    country: "Sweden",
    squad_number: 10,
    caps: 38,
    goals: 6,
    age: 26,
    height: 177,
    rating: 4,
    flagCode: "se"
  },
  {
    id: "swe3",
    name: "Robin Olsen",
    position: "Goalkeeper",
    club: "Copenhagen",
    country: "Sweden",
    squad_number: 1,
    caps: 19,
    goals: 0,
    age: 28,
    height: 198,
    rating: 3,
    flagCode: "se"
  },
  {
    id: "swe-coach",
    name: "Janne Andersson",
    position: "Coach",
    club: "Sweden",
    country: "Sweden",
    caps: 0,
    goals: 0,
    age: 55,
    flagCode: "se"
  },
  
  // Group F - South Korea
  {
    id: "kor1",
    name: "Son Heung-min",
    position: "Forward",
    club: "Tottenham Hotspur",
    country: "South Korea",
    squad_number: 7,
    caps: 68,
    goals: 21,
    age: 25,
    height: 183,
    rating: 4,
    flagCode: "kr"
  },
  {
    id: "kor2",
    name: "Ki Sung-yueng",
    position: "Midfielder",
    club: "Swansea City",
    country: "South Korea",
    squad_number: 16,
    caps: 100,
    goals: 10,
    age: 29,
    height: 187,
    rating: 3,
    flagCode: "kr"
  },
  {
    id: "kor3",
    name: "Hwang Hee-chan",
    position: "Forward",
    club: "Red Bull Salzburg",
    country: "South Korea",
    squad_number: 11,
    caps: 15,
    goals: 2,
    age: 22,
    height: 177,
    rating: 3,
    flagCode: "kr"
  },
  {
    id: "kor-coach",
    name: "Shin Tae-yong",
    position: "Coach",
    club: "South Korea",
    country: "South Korea",
    caps: 0,
    goals: 0,
    age: 49,
    flagCode: "kr"
  },
  
  // Group G - Belgium
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
    id: "bel2",
    name: "Kevin De Bruyne",
    position: "Midfielder",
    club: "Manchester City",
    country: "Belgium",
    squad_number: 7,
    caps: 61,
    goals: 14,
    age: 26,
    height: 181,
    rating: 5,
    flagCode: "be"
  },
  {
    id: "bel3",
    name: "Romelu Lukaku",
    position: "Forward",
    club: "Manchester United",
    country: "Belgium",
    squad_number: 9,
    caps: 66,
    goals: 33,
    age: 25,
    height: 190,
    rating: 4,
    flagCode: "be"
  },
  {
    id: "bel-coach",
    name: "Roberto Martínez",
    position: "Coach",
    club: "Belgium",
    country: "Belgium",
    caps: 0,
    goals: 0,
    age: 44,
    flagCode: "be"
  },
  
  // Group G - Panama
  {
    id: "pan1",
    name: "Román Torres",
    position: "Defender",
    club: "Seattle Sounders FC",
    country: "Panama",
    squad_number: 5,
    caps: 112,
    goals: 10,
    age: 32,
    height: 187,
    rating: 2,
    flagCode: "pa"
  },
  {
    id: "pan2",
    name: "Jaime Penedo",
    position: "Goalkeeper",
    club: "Dinamo București",
    country: "Panama",
    squad_number: 1,
    caps: 131,
    goals: 0,
    age: 36,
    height: 183,
    rating: 2,
    flagCode: "pa"
  },
  {
    id: "pan3",
    name: "Blas Pérez",
    position: "Forward",
    club: "Municipal",
    country: "Panama",
    squad_number: 7,
    caps: 117,
    goals: 43,
    age: 37,
    height: 187,
    rating: 2,
    flagCode: "pa"
  },
  {
    id: "pan-coach",
    name: "Hernán Darío Gómez",
    position: "Coach",
    club: "Panama",
    country: "Panama",
    caps: 0,
    goals: 0,
    age: 62,
    flagCode: "pa"
  },
  
  // Group G - Tunisia
  {
    id: "tun1",
    name: "Wahbi Khazri",
    position: "Forward",
    club: "Rennes",
    country: "Tunisia",
    squad_number: 10,
    caps: 36,
    goals: 12,
    age: 27,
    height: 182,
    rating: 3,
    flagCode: "tn"
  },
  {
    id: "tun2",
    name: "Aymen Mathlouthi",
    position: "Goalkeeper",
    club: "Al-Batin",
    country: "Tunisia",
    squad_number: 1,
    caps: 67,
    goals: 0,
    age: 33,
    height: 189,
    rating: 3,
    flagCode: "tn"
  },
  {
    id: "tun3",
    name: "Ali Maâloul",
    position: "Defender",
    club: "Al Ahly",
    country: "Tunisia",
    squad_number: 12,
    caps: 53,
    goals: 1,
    age: 28,
    height: 175,
    rating: 3,
    flagCode: "tn"
  },
  {
    id: "tun-coach",
    name: "Nabil Maâloul",
    position: "Coach",
    club: "Tunisia",
    country: "Tunisia",
    caps: 0,
    goals: 0,
    age: 55,
    flagCode: "tn"
  },
  
  // Group G - England
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
    id: "eng2",
    name: "Jordan Pickford",
    position: "Goalkeeper",
    club: "Everton",
    country: "England",
    squad_number: 1,
    caps: 3,
    goals: 0,
    age: 24,
    height: 185,
    rating: 3,
    flagCode: "gb-eng"
  },
  {
    id: "eng3",
    name: "Raheem Sterling",
    position: "Forward",
    club: "Manchester City",
    country: "England",
    squad_number: 10,
    caps: 37,
    goals: 2,
    age: 23,
    height: 170,
    rating: 4,
    flagCode: "gb-eng"
  },
  {
    id: "eng-coach",
    name: "Gareth Southgate",
    position: "Coach",
    club: "England",
    country: "England",
    caps: 0,
    goals: 0,
    age: 47,
    flagCode: "gb-eng"
  },
  
  // Group H - Poland
  {
    id: "pol1",
    name: "Robert Lewandowski",
    position: "Forward",
    club: "Bayern Munich",
    country: "Poland",
    squad_number: 9,
    caps: 95,
    goals: 55,
    age: 29,
    height: 185,
    rating: 5,
    flagCode: "pl"
  },
  {
    id: "pol2",
    name: "Wojciech Szczęsny",
    position: "Goalkeeper",
    club: "Juventus",
    country: "Poland",
    squad_number: 1,
    caps: 35,
    goals: 0,
    age: 28,
    height: 196,
    rating: 4,
    flagCode: "pl"
  },
  {
    id: "pol3",
    name: "Kamil Glik",
    position: "Defender",
    club: "Monaco",
    country: "Poland",
    squad_number: 15,
    caps: 59,
    goals: 5,
    age: 30,
    height: 190,
    rating: 3,
    flagCode: "pl"
  },
  {
    id: "pol-coach",
    name: "Adam Nawałka",
    position: "Coach",
    club: "Poland",
    country: "Poland",
    caps: 0,
    goals: 0,
    age: 60,
    flagCode: "pl"
  },
  
  // Group H - Senegal
  {
    id: "sen1",
    name: "Sadio Mané",
    position: "Forward",
    club: "Liverpool",
    country: "Senegal",
    squad_number: 10,
    caps: 53,
    goals: 14,
    age: 26,
    height: 175,
    rating: 4,
    flagCode: "sn"
  },
  {
    id: "sen2",
    name: "Kalidou Koulibaly",
    position: "Defender",
    club: "Napoli",
    country: "Senegal",
    squad_number: 3,
    caps: 26,
    goals: 0,
    age: 26,
    height: 195,
    rating: 4,
    flagCode: "sn"
  },
  {
    id: "sen3",
    name: "Idrissa Gueye",
    position: "Midfielder",
    club: "Everton",
    country: "Senegal",
    squad_number: 5,
    caps: 60,
    goals: 1,
    age: 28,
    height: 174,
    rating: 3,
    flagCode: "sn"
  },
  {
    id: "sen-coach",
    name: "Aliou Cissé",
    position: "Coach",
    club: "Senegal",
    country: "Senegal",
    caps: 0,
    goals: 0,
    age: 42,
    flagCode: "sn"
  },
  
  // Group H - Colombia
  {
    id: "col1",
    name: "James Rodríguez",
    position: "Midfielder",
    club: "Bayern Munich",
    country: "Colombia",
    squad_number: 10,
    caps: 63,
    goals: 21,
    age: 26,
    height: 180,
    rating: 4,
    flagCode: "co"
  },
  {
    id: "col2",
    name: "Radamel Falcao",
    position: "Forward",
    club: "Monaco",
    country: "Colombia",
    squad_number: 9,
    caps: 73,
    goals: 29,
    age: 32,
    height: 177,
    rating: 4,
    flagCode: "co"
  },
  {
    id: "col3",
    name: "David Ospina",
    position: "Goalkeeper",
    club: "Arsenal",
    country: "Colombia",
    squad_number: 1,
    caps: 86,
    goals: 0,
    age: 29,
    height: 183,
    rating: 3,
    flagCode: "co"
  },
  {
    id: "col-coach",
    name: "José Pékerman",
    position: "Coach",
    club: "Colombia",
    country: "Colombia",
    caps: 0,
    goals: 0,
    age: 68,
    flagCode: "co"
  },
  
  // Group H - Japan
  {
    id: "jpn1",
    name: "Keisuke Honda",
    position: "Midfielder",
    club: "Pachuca",
    country: "Japan",
    squad_number: 4,
    caps: 94,
    goals: 36,
    age: 31,
    height: 182,
    rating: 3,
    flagCode: "jp"
  },
  {
    id: "jpn2",
    name: "Shinji Kagawa",
    position: "Midfielder",
    club: "Borussia Dortmund",
    country: "Japan",
    squad_number: 10,
    caps: 89,
    goals: 29,
    age: 29,
    height: 175,
    rating: 3,
    flagCode: "jp"
  },
  {
    id: "jpn3",
    name: "Maya Yoshida",
    position: "Defender",
    club: "Southampton",
    country: "Japan",
    squad_number: 22,
    caps: 83,
    goals: 10,
    age: 29,
    height: 189,
    rating: 3,
    flagCode: "jp"
  },
  {
    id: "jpn-coach",
    name: "Akira Nishino",
    position: "Coach",
    club: "Japan",
    country: "Japan",
    caps: 0,
    goals: 0,
    age: 63,
    flagCode: "jp"
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
