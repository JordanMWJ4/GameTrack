import React, { useState, useEffect } from 'react';


const GameTrack = () => {
  const [gamesData, setGamesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);


  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=47e1f21c87d449969b5ce642284f9dcc&dates=2000-01-01,2024-06-20&platforms=18,1,7`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setGamesData(data.results);
        setFilteredGames(data.results); // Initialize filteredGames with all games
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchGames();
  }, []); // Empty dependency array ensures useEffect runs once on component mount
  useEffect(() => {
    // Filter games based on search term
    const filtered = gamesData.filter(game =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [searchTerm, gamesData]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <div className="game-track">
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="game-list">
        {filteredGames.length === 0 ? (
          <p>No games found.</p>
        ) : (
          filteredGames.map(game => (
            <div key={game.id} className="game">
              <h2>
                
                  {game.name}
              </h2>
              {game.background_image && (
                <img src={game.background_image} alt={game.name} className="game-image" width="250px" />
              )}
              <p><strong>Released:</strong> {game.released}</p>
              <p><strong>Platforms:</strong> {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
              <p><strong>Rating:</strong> {game.rating}</p>
              <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
        
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default GameTrack;