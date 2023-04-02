// import { useEffect, useState } from 'react';
// import {  useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export function loader() {
    return getVans();
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [vans, setVans] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [err, setErr] = useState(null);

    // data api/ loader
    // const data = useLoaderData();
    const vans = useLoaderData();
    // console.log(data);

    const typeFilter = searchParams.get('type');
    // console.log(typeFilter);

    // useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true);
    //         try {
    //             const data = await getVans();
    //             setVans(data);
    //         } catch (err) {
    //             setErr(err);
    //             // console.log(err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     loadVans();
    // }, []);

    // console.log(vans);

    const displayedVans = typeFilter
        ? vans.filter((v) => v.type === typeFilter)
        : vans;

    const vanElements = displayedVans.map((van) => (
        <div key={van.id} className='van-tile'>
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                }}
            >
                <img src={van.imageUrl} alt={van.title} />
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

    // function handleFilterChange(key, value) {
    //     setSearchParams((prevParams) => {
    //         if (value === null) {
    //             prevParams.delete(key);
    //         } else {
    //             prevParams.set(key, value);
    //         }
    //         return prevParams;
    //     });
    // }

    // if (loading) {
    //     return <h1>Loading...</h1>;
    // }

    // if (err) {
    //     return <h1>Error: {err.message}</h1>;
    // }

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
                    // onClick={() => handleFilterChange("type", "simple")}
                    // className={
                    //     `van-type simple
                    //     ${typeFilter === "simple" ? "selected" : ""}`
                    // }
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
