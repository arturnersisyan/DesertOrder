import { useState, useEffect } from 'react';

export default function Deserts() {
    const [loadedDeserts, setLoadedDeserts] = useState([]);

    useEffect(() => {
        async function fetchDeserts() {
            const response = await fetch('http://localhost:3000/deserts');
            
            if (!response.ok) {
    
            }
            console.log(response)
            const deserts = await response.json();
            setLoadedDeserts(deserts);
        }
        fetchDeserts();
    }, []);

    return(
        <ul id="deserts">
            {loadedDeserts.map((desert) => (
                <li key={desert.id}>{desert.name}</li>
            ))}
        </ul>
    )
}