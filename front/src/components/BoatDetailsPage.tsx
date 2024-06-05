import {Boat} from "../../model/types.ts";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function BoatDetailsPage() {
    const [boat, setBoat] = useState<Boat | null>(null);
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
        <h1>Boat Details</h1>
        {boat ? (
            <div>
                <p>Name: {boat.name}</p>
                <p>Length: {boat.length}</p>
                <p>Width: {boat.width}</p>
                <p>Year of Immatriculation: {boat.year_of_immatriculation}</p>
                <p>Year since in Marina: {boat.year_since_in_marina}</p>
                <p>Year until Concession Payed: {boat.year_until_concession_payed}</p>
                <p>Owner ID: {boat.id_owner}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
}

export default BoatDetailsPage;
