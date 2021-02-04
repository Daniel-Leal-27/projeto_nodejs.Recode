//import Saudacao from '../Componentes/saudacao/saudacao';
import {lazy,Suspense} from 'react';
const Saudacao = lazy(() => import('../Componentes/saudacao/saudacao')); //fazendo lazy loading

export default function Home(){

    return (
       <div>
           <Suspense fallback={<p>Carregando...</p>}>
               <Saudacao />
           </Suspense>


       </div> 
    )
}
// Lazy loading e Code Splitting