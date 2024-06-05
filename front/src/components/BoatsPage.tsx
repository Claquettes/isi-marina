import {Boat} from "../../model/types.ts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function BoatsPage() {
    const [boats, setBoats] = useState<Boat[]>([]);
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://146.59.233.238:3123/marina/boats')
            .then(response => response.json())
            .then((data: Boat[]) => {
                console.log(data);
                setBoats(data);
            });

        fetch('http://146.59.233.238:3123/marina/users')
            .then(response => response.json())
            .then((data: any[]) => {
                console.log(data);
                setUsers(data);
            });
    }, []);

    const getUserName = (id: number) => {
        const user = users.find(user => user.id === id);
        return user ? user.name : 'Unknown';
    }

    return (
        <div>
            <h1>Les bateaux</h1>
            <h3>Voici nos bateaux:</h3>
            <div className={"all-table"}>
                <table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Longueur</th>
                        <th>Largeur</th>
                        <th>Année d'Immatriculation</th>
                        <th>Appartient à</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boats.map(boat => (
                        <tr key={boat.id}>
                            <td><Link to={`/boat?id=${boat.id}`}>{boat.name}</Link></td>
                            <td>{boat.length}</td>
                            <td>{boat.width}</td>
                            <td>{boat.year_of_immatriculation}</td>
                            <td><Link to={`/user/?id=${boat.id_owner}`}>{getUserName(boat.id_owner)}</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BoatsPage;