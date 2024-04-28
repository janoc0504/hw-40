import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function AlbumList() {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.log(error));
    }, [userId]);

    return (
        <div>
            <h1>Album List</h1>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title} - <Link to={`/photos/${album.id}`}>Photos</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;
