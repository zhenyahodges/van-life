import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = useState([]);
    const [loading,setLoading]= useState(false);

    const typeFilter = searchParams.get('type');
    // console.log(typeFilter);

    useEffect(() => {
        async function loadVans() {
            setLoading(true);
            const data = await getVans();
            setVans(data);
            setLoading(false);
        }
        loadVans();
    }, []);

    // console.log(vans);

    const displayedVans = typeFilter
        ? vans.filter((v) => v.type === typeFilter)
        : vans;

    let vanElements = displayedVans.map((van) => (
        <div key={van.id} className='van-tile'>
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                }}
            >
                <img src={van.imageUrl} alt={`${van.name}`} />
                <div className='van-info'>
                    <h3>{van.name}</h3>
                    <p>
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ));

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className='van-list-container'>
            <h1>Explore our van options</h1>
            <div className='van-list-filter-buttons'>
                <button
                    className={`van-type simple ${
                        typeFilter === 'simple' ? 'selected' : ''
                    }`}
                    onClick={() => setSearchParams({ type: 'simple' })}
                >
                    Simple
                </button>
                <button
                    className={`van-type simple ${
                        typeFilter === 'luxury' ? 'selected' : ''
                    }`}
                    onClick={() => setSearchParams({ type: 'luxury' })}
                >
                    Luxury
                </button>
                <button
                    className={`van-type simple ${
                        typeFilter === 'rugged' ? 'selected' : ''
                    }`}
                    onClick={() => setSearchParams({ type: 'rugged' })}
                >
                    Rugged
                </button>

                {typeFilter && (
                    <button
                        className='van-type clear-filters'
                        onClick={() => setSearchParams({})}
                    >
                        Clear
                    </button>
                )}
            </div>
            <div className='van-list'>{vanElements}</div>
        </div>
    );
}
