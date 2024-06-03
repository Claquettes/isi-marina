import {useEffect, useState} from 'react'
import {Boat, user, emplacement} from '../model/types'


import './App.css'

function App() {
    const [boats, setBoats] = useState<Boat[]>([])

    useEffect(() => {
        fetch('http://146.59.233.238:3000/marina/boats')
            .then(response => response.json())
            .then(data => setBoats(data))
    }
    , [])

    return (
        <>
            <div>
                <h2>
                    These are the boats:
                </h2>
                <ul>
                    {boats.map(boat => (
                        <li key={boat.id}>
                            {boat.name} - {boat.length} - {boat.width} - {boat.year_of_immatriculation} - {boat.year_since_in_marina} - {boat.year_until_concession_payed} - {boat.id_owner}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App
