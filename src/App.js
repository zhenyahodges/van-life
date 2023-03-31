import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Vans from './components/Vans/Vans';
import './server';
import VanDetail from './components/Vans/VanDetail';
import { Layout } from './components/Layout';

import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import HostLayout from './components/Host/HostLayout';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/vans' element={<Vans />} />
                    <Route path='/vans/:id' element={<VanDetail />} />

                    <Route path='/host' element={<HostLayout />}>
                        <Route path='/host/income' element={<Income />} />
                        <Route path='/host/reviews' element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
