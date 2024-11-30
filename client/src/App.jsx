// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute'; 


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={
                        <ProtectedRoute> 
                            <Home />
                        </ProtectedRoute>
                        } />
                    <Route path="/discover" element={<Discover />} />
                    <Route 
                        path="/create" 
                        element={
                            <ProtectedRoute> 
                                <CreatePost />
                            </ProtectedRoute>
                        }
                    />
                    <Route 
                        path="/profile" 
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <Navbar />
            </div>
        </Router>
    );
};

export default App;
