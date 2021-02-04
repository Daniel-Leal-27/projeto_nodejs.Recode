//import React from 'react';
import {lazy,Suspense} from 'react';
//import Contatos from '../Componentes/contato/contato';
const Contatos = lazy(() => import('../Componentes/contato/contato')); //fazendo lazy loading


export default function Contato() {
    return(
        <div>
            <Suspense fallback={<p>Carregando...</p>}>
                <Contatos />
            </Suspense>
        </div>
    )
};