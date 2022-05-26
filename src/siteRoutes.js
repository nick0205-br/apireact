
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/home'
import CorPrimaria from './pages/corprimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiornumero'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/corprimaria' element={ <CorPrimaria /> } />
                <Route path='/frequencia' element={ <Frequencia /> } />
                <Route path='/ingresso' element={ <Ingresso /> } />
                <Route path='/maiornumero' element={ <MaiorNumero /> } />
            </Routes>
        </BrowserRouter>
    )
}