export async function getVans() {
    const res = await fetch('/api/vans');
    if (!res.ok) {
        throw new Error(`${res.message},${res.status},${res.statusText}`);
        // console.log(res);
    }
    const data = await res.json();
    return data.vans;
}

