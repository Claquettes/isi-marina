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
            <h1>Users</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td><Link to={`marina/user/${user.id}`}>{user.name}</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage;