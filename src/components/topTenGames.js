import React, { useState, useEffect } from 'react';

const TopTenGames = () => {
  const [topGames, setTopGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopGames = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=47e1f21c87d449969b5ce642284f9dcc&ordering=-rating&page_size=10`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTopGames(data.results);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchTopGames();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="top-games">
      <h2>Highest rated games of All Time</h2>
      <div className="game-list">
        {topGames.map(game => (
          <div key={game.id} className="game">
            <h3>{game.name}</h3>
            {game.background_image && (
              <img src={game.background_image} alt={game.name} className="game-image" width="250px" />
            )}
            <p><strong>Released:</strong> {game.released}</p>
            <p><strong>Platforms:</strong> {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
            <p><strong>Rating:</strong> {game.rating}</p>
            <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTenGames;