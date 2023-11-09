import { Home } from "../home"

export default function Subpage1(){
   return (
      <div>
         <h1>Subpagina1</h1>
         <H2text />
      </div>
   )
}

export function H2text(){
   return (
      <div>
         <h2>
            h2 de newpage1
         </h2>
         <br>
         </br>
         <Home/>
      </div>
   )
}