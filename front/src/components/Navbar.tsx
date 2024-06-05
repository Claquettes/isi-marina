import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/boats">Bateaux</Link>
                </li>
                <li>
                    <Link to="/users">Les Fadas</Link>
                </li>
                <li>
                    <Link to="/emplacements">Emplacements</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarComponent;