import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PhotoList() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error));
    }, [albumId]);

    return (
        <div>
            <h1>Photo List</h1>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PhotoList;
