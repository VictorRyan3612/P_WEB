import React from 'react';

export default function Receita1(){
   return (
      <div>
         <Home />
         <OutroComponente />
      </div>
   )
}

export function Home(){
   return (
      <div>
         <h2>
            Viva Santana!
         </h2>
      </div>
   )
}

export function OutroComponente() {
   return (
      <div>
         <p>
            Hello World!
         </p>
      </div>
   );
}
