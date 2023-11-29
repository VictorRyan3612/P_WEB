import React from 'react';

export function Titulo({tituloContent}){
   return (
      <div>
         <h2>
            {tituloContent}
         </h2>
      </div>
   )
}
export function Corpo({corpoContent}){
   return(
      <div>
         <p>
            {corpoContent}
         </p>
      </div>
   )
}
