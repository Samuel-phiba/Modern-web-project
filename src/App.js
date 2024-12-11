import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to StreamView</h1>
      <h2>Trending Content</h2>
      <div className="carousel">
        <div className="carousel-item">Trending Movie 1</div>
        <div className="carousel-item">Trending Movie 2</div>
        <div className="carousel-item">Trending Movie 3</div>
      </div>
      <h2>User Recommended Playlists</h2>
      <div className="playlists">
        <div className="playlist-item">User Playlist 1</div>
        <div className="playlist-item">User Playlist 2</div>
        <div className="playlist-item">User Playlist 3</div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="search">
      <h2>Search Content</h2>
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search for movies, shows, or genres..." 
      />
      <button onClick={() => alert('Searching...')}>Search</button>
      <div className="search-results">
        {/* Mock search results */}
        <div className="search-item">Movie 1</div>
        <div className="search-item">Show 1</div>
        <div className="search-item">Documentary 1</div>
      </div>
    </div>
  );
};

const DetailsPage = () => {
  return (
    <div className="details">
      <h2>Movie Title</h2>
      <p>Description: A great movie about adventure and fantasy.</p>
      <p>Cast: Actor 1, Actor 2, Actor 3</p>
      <div className="reviews">
        <h3>User Reviews</h3>
        <div className="review-item">
          <p>Review 1: Amazing movie!</p>
        </div>
        <div className="review-item">
          <p>Review 2: Loved the plot!</p>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <h3>Manage Playlists</h3>
      <div className="playlists">
        <div className="playlist-item">Playlist 1</div>
        <div className="playlist-item">Playlist 2</div>
        <div className="playlist-item">Playlist 3</div>
      </div>
      <h3>Watch History</h3>
      <div className="history">
        <div className="history-item">Watched Movie 1</div>
        <div className="history-item">Watched Movie 2</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
