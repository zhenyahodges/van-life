// import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

export async function loader({request}){
    await requireAuth(request);
    // console.log(requireAuth());    
    return getHostVans();
}

export default function HostVans() {   
    // const [vans, setVans] = useState([]);
    const vans=useLoaderData();

    // useEffect(() => {
    //     fetch('/api/host/vans')
    //         .then((res) => res.json())
    //         .then((data) => setVans(data.vans));
    // }, []);

    const hostVansEls = vans.map((van) => (
        <Link
            to={van.id}
            key={van.id}
            className='host-van-link-wrapper'
        >
            <div className='host-van-single' key={van.id}>
                <img src={van.imageUrl} alt={`${van.name}`} />
                <div className='host-van-info'>
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ));

    return (
        <section>
            <h1 className='host-vans-title'>Your listed vans</h1>
            <div className='host-vans-list'>
                {/* {vans.length > 0 ? ( */}
                {
                    <section>{hostVansEls}</section>
                // ) : (
                //     <h2>Loading...</h2>
                // )}
                }
            </div>
        </section>
    );
}
