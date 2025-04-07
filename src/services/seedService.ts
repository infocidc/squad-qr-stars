
import { supabase } from "@/integrations/supabase/client";
import { players } from "./playerData";

// Seed function to populate Supabase with player data
export const seedPlayersToSupabase = async (): Promise<void> => {
  try {
    // First check if data already exists
    const { count, error: countError } = await supabase
      .from('players')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('Error checking player count:', countError);
      throw countError;
    }
    
    // Only seed if no data exists
    if (count === 0) {
      console.log('Seeding players to Supabase...');
      
      // Transform local players for Supabase format
      const playersForInsert = players.map(player => ({
        id: player.id,
        name: player.name,
        position: player.position,
        club: player.club,
        country: player.country,
        squad_number: player.squad_number,
        caps: player.caps,
        goals: player.goals,
        age: player.age,
        height: player.height,
        rating: player.rating,
        flag_code: player.flagCode
      }));
      
      // Insert players in batches to avoid payload size limits
      const batchSize = 100;
      for (let i = 0; i < playersForInsert.length; i += batchSize) {
        const batch = playersForInsert.slice(i, i + batchSize);
        const { error: insertError } = await supabase
          .from('players')
          .insert(batch);
        
        if (insertError) {
          console.error(`Error inserting batch ${i/batchSize + 1}:`, insertError);
          throw insertError;
        }
      }
      
      console.log('Successfully seeded players to Supabase');
    } else {
      console.log(`Skipping seeding, ${count} players already in database`);
    }
  } catch (error) {
    console.error('Failed to seed players:', error);
    throw error;
  }
};

// Re-export for external use
export default seedPlayersToSupabase;
