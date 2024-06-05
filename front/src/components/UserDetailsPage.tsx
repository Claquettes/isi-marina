import {User} from "../../model/types.ts";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function UserDetailsPage() {
    const [user, setUser] = useState<User | null>(null);
    const query = useQuery();
    const id = query.get("id");

    function makeIntoUser(data: any): User {
        console.log(data.name);
        const u: User = {
            id: data.id,
            name: data.name,
            surname: data.surname,
            third_name: data.third_name,
            year_of_birth: data.year_of_birth,
            year_since_adherent: data.year_since_adherent
        };
        return u;
    }

    useEffect(() => {
        if (id) {
            fetch(`http://146.59.233.238:3123/marina/user/${id}`)
                .then(response => response.json())
                .then((data: User) => {
                    console.log(data[0]);
                    setUser(makeIntoUser(data[0]));
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        }
    }, [id]);

    return (
        <div>
            <h1>User Details</h1>
            {user ? (
                <div className={"all-table"}>
                    <table>
                        <tbody>
                            <tr><td>Nom:</td><td>{user.name}</td></tr>
                            <tr><td>Prénom:</td><td>{user.surname}</td></tr>
                            <tr><td>Surnom:</td><td>{user.third_name}</td></tr>
                            <tr><td>Année de naissance:</td><td>{user.year_of_birth}</td></tr>
                            <tr><td>Adherent depuis:</td><td>{user.year_since_adherent}</td></tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default UserDetailsPage;