import {Emplacement} from "../../model/types.ts";
import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

function EmplacementsPage() {
    const [emplacements, setEmplacements] = useState<Emplacement[]>([]);

    useEffect(() => {
            fetch('http://146.59.233.238:3123/marina/emplacements')
                .then(response => response.json())
                .then((data: Emplacement[]) => {
                        console.log(data);
                        setEmplacements(data);
                    }
                );
        }
        , []);
    return (
        <div>
            <h1>Les emplacements</h1>
            <h3>Voici l'attribution de nos emplacements:</h3>
            <div className={"all-table"}>
                <table>
                    <thead>
                    <tr>
                        <th>Allée</th>
                        <th>Emplacement</th>
                        <th>Id Propriétaire</th>
                        <th>Id Bateau garé</th>
                    </tr>
                    </thead>
                    <tbody>
                    {emplacements.map(emplacement => (
                        <tr key={emplacement.id}>
                            <td>{emplacement.e_column}</td>
                            <td>{emplacement.e_row}</td>
                            <td>
                                <Link
                                to={`/user/?id=${emplacement.id_owner}`}>{emplacement.id_owner}</Link>
                            </td>
                            {emplacement.id_boat_parked ?
                            <td><Link
                                to={`/boat/?id=${emplacement.id_boat_parked}`}>{emplacement.id_boat_parked}</Link>
                            </td> :
                            <td>Aucun</td>}

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmplacementsPage;