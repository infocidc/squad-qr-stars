
import { supabase } from "@/integrations/supabase/client";
import { Player } from "@/types";
import { players } from "./playerData";
import { getTeams } from "./teamService";

// Get all players from Supabase
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
    const playersData: Player[] = data.map(player => ({
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
    
    return playersData;
  } catch (error) {
    console.error('Failed to fetch players from Supabase:', error);
    // Fallback to local data if Supabase query fails
    console.log('Using local player data as fallback');
    return Promise.resolve(players);
  }
};

// Get a specific player by ID
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

// Get players filtered by country
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

// Re-export getTeams for backward compatibility
export { getTeams };
