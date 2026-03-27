const API_URL = "https://pixl-api-gfgehfbkbschb0a5.swedencentral-01.azurewebsites.net/api/highscores"; 

               

export const scoreService = {
  
    // get high score list
  getTopScores: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Kunde inte hämta highscores");
    return await response.json();
  },

  // save new score
  saveScore: async (playerName, score) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerName, score })
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Kunde inte spara poäng");
    }
    return await response.json();
  }
};