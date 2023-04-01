import {
    // BrowserRouter,
    // Routes,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Vans, {loader as vansLoader} from './components/Vans/Vans';
import './server';
import VanDetail from './components/Vans/VanDetail';
import Layout from './components/Layout';

import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import HostLayout from './components/Host/HostLayout';
import Dashboard from './components/Host/Dashboard';
import HostVans from './components/Host/HostVans';
import HostVanDetail from './components/Host/HostVanDetail';
import HostVanPricing from './components/Host/HostVanPricing';
import HostVanPhotos from './components/Host/HostVanPhotos';
import HostVanInfo from './components/Host/HostVanInfo';
import NotFound from './components/NotFound';
import Error from './components/Error';
import Login from './components/Login';

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route 
            path='vans' 
            element={<Vans/>} 
            errorElement={<Error/>}
            loader={vansLoader} 
            />
            <Route path='vans/:id' element={<VanDetail />} />

            <Route path='host' element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='vans' element={<HostVans />} />
                <Route path='vans/:id' element={<HostVanDetail />}>
                    <Route index element={<HostVanInfo />} />
                    <Route path='pricing' element={<HostVanPricing />} />
                    <Route path='photos' element={<HostVanPhotos />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    ));

    return (
        // <BrowserRouter>
            // <Routes>
                // {/* <Route path='/' element={<Layout />}>
                //     <Route index element={<Home />} />
                //     <Route path='about' element={<About />} />
                //     <Route path='vans' element={<Vans />} />
                //     <Route path='vans/:id' element={<VanDetail />} />

                //     <Route path='host' element={<HostLayout />}>
                //         <Route index element={<Dashboard />} />
                //         <Route path='income' element={<Income />} />
                //         <Route path='reviews' element={<Reviews />} />
                //         <Route path='vans' element={<HostVans />} />
                //         <Route path='vans/:id' element={<HostVanDetail />}>
                //             <Route index element={<HostVanInfo />} />
                //             <Route
                //                 path='pricing'
                //                 element={<HostVanPricing />}
                //             />
                //             <Route path='photos' element={<HostVanPhotos />} />
                //         </Route>
                //     </Route>
                //     <Route path='*' element={<NotFound />} />
                // </Route> */}
            // </Routes>
        // </BrowserRouter>
        <RouterProvider router={router}/>
    );
}

export default App;
