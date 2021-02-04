//import React from 'react';
import {lazy,Suspense} from 'react';
//import Endereco from '../Componentes/endereco/endereco';
const Endereco = lazy(() => import('../Componentes/endereco/endereco')); //fazendo lazy loading
export default function Lojas() {
    return(
        <div className="container-fluid">
            <Suspense fallback={<p>Carregando...</p>}>
                <Endereco />
            </Suspense>

        </div>
    )
};