import {Boat} from "../../model/types.ts";
import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

function BoatsPage() {
    const [boats, setBoats] = useState<Boat[]>([]);

    useEffect(() => {
        fetch('http://146.59.233.238:3123/marina/boats')
            .then(response => response.json())
            .then((data: Boat[]) => {
                console.log(data);
                setBoats(data);
            });
    }, []);

    return (
        <div>
            <h1>Boat Page</h1>
            <h3>Voici nos bateaux:</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Length</th>
                </tr>
                </thead>
                <tbody>
                {boats.map(boat => (
                    <tr key={boat.id}>
                        <td><Link to={`/boat?id=${boat.id}`}>{boat.name}</Link></td>
                        <td>{boat.length}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default BoatsPage;