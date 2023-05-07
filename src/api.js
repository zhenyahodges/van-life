// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : '/api/vans';
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`${res.message},${res.status},${res.statusText}`);
//         // console.log(res);
//     }
//     const data = await res.json();
//     return data.vans;
// }

// // export async function getVans(id) {
// //     const url = id ? `/api/vans/${id}` : "/api/vans"
// //     const res = await fetch(url)
// //     if (!res.ok) {
// //         throw {
// //             message: "Failed to fetch vans",
// //             statusText: res.statusText,
// //             status: res.status
// //         }
// //     }
// //     const data = await res.json()
// //     return data.vans
// // }

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`${res.message},${res.status},${res.statusText}`);
//     }
//     const data = await res.json();
//     return data.vans;
// }

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans';
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`${res.status}-${res.statusText},${res.headers}`);
    }
    const data = await res.json();
    return data.vans;
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`${res.status}-${res.statusText}-${res.headers}`);
    }
    const data = await res.json();
    return data.vans;
}

export async function loginUser(creds) {
    const res = await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify(creds),
    });                                                                                                                   
    if (!res.ok) {
        throw new Error(`${Object.values(res)}-${res.statusText}-${res.status}`);
    }
    const data = await res.json();


    return data;
}
