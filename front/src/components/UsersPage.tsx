import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://146.59.233.238:3123/marina/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Les Marins</h1>
            <div className={"all-table"}>
                <table>
                    <thead>
                    <tr>
                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Année de naissance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td><Link to={`/user/?id=${user.id}`}>{user.name}</Link></td>
                            <td><Link to={`/user/?id=${user.id}`}>{user.surname}</Link></td>
                            <td>{user.year_of_birth}</td>
                        </tr>

                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersPage;