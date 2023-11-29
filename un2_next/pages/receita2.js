import React from 'react';
// import {Titulo} from './receita2/home';

export default function Receita2(){
   return (
      <div>
         <Titulo tituloContent='Titulo Principal'/>
      </div>
   )
}

export function Titulo({tituloContent}){
   return (
      <div>
         <h2>
            {tituloContent}
         </h2>
      </div>
   )
}