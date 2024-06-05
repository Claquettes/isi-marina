import {Boat} from "../../model/types.ts";
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function BoatDetailsPage() {
    const [boat, setBoat] = useState<Boat | null>(null);
    const [user, setUser] = useState<any | null>(null);
    const query = useQuery();
    const id = query.get("id");

    function makeIntoBoat(data: any): Boat {
        console.log(data.name);
        const b: Boat = {
            id: data.id,
            name: data.name,
            length: data.length,
            width: data.width,
            year_of_immatriculation: data.year_of_immatriculation,
            year_since_in_marina: data.year_since_in_marina,
            year_until_concession_payed: data.year_until_concession_payed,
            id_owner: data.id_owner
        };
        return b;
    }


    useEffect(() => {
        if (id) {
            fetch(`http://146.59.233.238:3123/marina/boat/${id}`)
                .then(response => response.json())
                .then((data: Boat) => {
                    console.log(data[0]);
                    setBoat(makeIntoBoat(data[0]));
                })
                .catch(error => {
                    console.error('Error fetching boat details:', error);
                });
        }
    }, [id]);

    return (
        <div>
            <h1>Détails du Bateau</h1>
            {boat ? (
                <div className={"all-table"}>
                    <table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Longueur</th>
                            <th>Largeur</th>
                            <th>Année d'immatriculation</th>
                            <th>Dans le vieux port depuis</th>
                            <th>Place payée jusqu'à</th>
                            <th>Propriétaire</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr key={boat.id}>
                            <td><Link to={`/boat?id=${boat.id}`}>{boat.name}</Link></td>
                            <td>{boat.length}</td>
                            <td>{boat.width}</td>
                            <td>{boat.year_of_immatriculation}</td>
                            <td>{boat.year_since_in_marina}</td>
                            <td>{boat.year_until_concession_payed}</td>
                            <td><Link
                                to={`/user/?id=${boat.id_owner}`}>{boat.id_owner}</Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default BoatDetailsPage;
