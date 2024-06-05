import {useEffect, useState} from 'react';
import {Boat} from '../model/types';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavbarComponent from "./components/Navbar.tsx";
import BoatsPage from "./components/BoatsPage.tsx";
import UsersPage from "./components/UsersPage.tsx";
import HomePage from "./components/HomePage.tsx";
import EmplacementsPage from "./components/EmplacementsPage.tsx";
import BoatDetailsPage from "./components/BoatDetailsPage.tsx";

function App() {
    const [boats, setBoats] = useState<Boat[]>([]);

    useEffect(() => {
        fetch('http://146.59.233.238:3000/marina/boats')
            .then(response => response.json())
            .then(data => setBoats(data));
    }, []);

    return (
        <Router>
            <NavbarComponent/>
            <Routes>
                <Route path="/boats" element={<BoatsPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/emplacements" element={<EmplacementsPage/>}/>
                <Route path="/boat" element={<BoatDetailsPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
