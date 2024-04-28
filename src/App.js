import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './Components/UserList/index';
import AlbumList from './Components/AlbumList/index';
import PhotoList from './Components/PhotoList/index';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<UserList />} />
            <Route path="/albums/:userId" element={<AlbumList />} />
            <Route path="/photos/:albumId" element={<PhotoList />} />
        </Routes>
    );
}

export default App;
