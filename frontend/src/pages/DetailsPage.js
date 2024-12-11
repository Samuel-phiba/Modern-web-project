import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const [media, setMedia] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/media/${id}`)
      .then((response) => response.json())
      .then((data) => setMedia(data));
  }, [id]);

  if (!media) return <div>Loading...</div>;

  return (
    <div>
      <h1>{media.title}</h1>
      <p>{media.description}</p>
      <p>Genre: {media.genre}</p>
      <p>Rating: {media.rating}</p>
    </div>
  );
};

export default DetailsPage;
