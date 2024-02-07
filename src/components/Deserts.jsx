import { useState, useEffect } from 'react';
import DesertItem from './DesertItem';

export default function Deserts() {
    const [loadedDeserts, setLoadedDeserts] = useState([]);

    useEffect(() => {
        async function fetchDeserts() {
            const response = await fetch('http://localhost:3000/deserts');
            
            if (!response.ok) {
    
            }
            const deserts = await response.json();
            setLoadedDeserts(deserts);
        }
        fetchDeserts();
    }, []);

    return(
        <ul id="deserts">
            {loadedDeserts.map((desert) => (
                <DesertItem key={desert.id} desert={desert} />
            ))}
        </ul>
    )
}