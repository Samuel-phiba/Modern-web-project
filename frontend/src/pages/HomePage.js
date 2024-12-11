import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch('/api/media')
      .then((response) => response.json())
      .then((data) => setMedia(data));
  }, []);

  return (
    <div>
      <h1>Welcome to StreamView</h1>
      <div>
        {media.map((item) => (
          <div key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
