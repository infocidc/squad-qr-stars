
// Re-export all service functions from a central location
// This makes imports cleaner in components

export { getPlayers, getPlayerById, getPlayersByCountry } from './playerService';
export { getTeams, getTeamById, getTeamsByGroup } from './teamService';
export { default as seedPlayersToSupabase } from './seedService';
