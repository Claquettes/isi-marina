import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/boats">Boats</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/emplacements">Emplacements</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarComponent;