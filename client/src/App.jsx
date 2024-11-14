import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {


    return(
        
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/discover" exact element={<Discover />} />
                    <Route path="/create" exact element={<CreatePost />} />
                    <Route path="/profile" exact element={<Profile />} />
                </Routes>
                <Navbar />
            </div>
        </Router>
    );
};

export default App;
