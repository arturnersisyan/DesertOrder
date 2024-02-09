import DesertItem from './DesertItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

export default function Deserts() {
    const { 
        data: loadedDeserts, 
        isLoading, 
        error 
    } = useHttp('http://localhost:3000/deserts', requestConfig, []);

    if(isLoading) {
        return <p>Fetching deserts...</p>;
    }

    if(error) {
        return <Error title="Failed to fetch me" message={error}/>
    }

    return(
        <ul id="deserts">
            {loadedDeserts.map((desert) => (
                <DesertItem key={desert.id} desert={desert} />
            ))}
        </ul>
    )
}