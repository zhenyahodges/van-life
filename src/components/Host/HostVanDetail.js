import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function HostVanDetail() {
    const [van, setVan] = useState(null); //({})
    const params = useParams([]);

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans));
    }, [params.id]);
    // console.log(params)

    if (!van) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className='host-van-detail-layout-container'>
                <div className='host-van-detail'>
                    <img src={van.imageUrl} />
                    <div className='host-van-detail-info-text'>
                        <i className={`van-type van-type-${van.type}`}>
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}