
export interface Player {
  id: string;
  name: string;
  position: string;
  club: string;
  country: string;
  squad_number?: number;
  caps?: number;
  goals?: number;
  age?: number;
  height?: number;
  rating?: number;
  flagCode?: string;
}

export interface Team {
  id: string;
  name: string;
  code: string;
  flagCode: string;
  group: string;
}
