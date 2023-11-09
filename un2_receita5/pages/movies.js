import { useState } from 'react';

export default function Tela({data}){
   return (
      <div>
         <center>
            <br></br>
            <MoviePesquisar />
            <Movies dataMovies={data}/>
         </center>
      </div>
   )
}

export function MoviePesquisar({onSearch}) {
   const [searchTerm, setSearchTerm] = useState('');

   const handleSearch = () => {
      // onSearch(searchTerm);
   };

   return (
      <div>
         <center>
            <input
               type="text"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               placeholder="Digite o termo de busca"
            />
            <button onClick={handleSearch}>Pesquisar</button>
         </center>
      </div>
   );
}

export function Movies({dataMovies}){
   return (
      <div>
         <center>
            {dataMovies.Search.map((m) => 
               <div> 
                  <br></br>
                  <h2>
                     Titulo: {m.Title}
                  </h2>
                  <h3>
                     ano: {m.Year}
                  </h3>
                  <img src={m.Poster} width="200"></img>
               </div>  
            )}                
         </center>
      </div>
   )
}
export async function getServerSideProps(context){
   const res = await fetch(`http://www.omdbapi.com/?apikey=8740ecf&s=Amor`)
   const data = await res.json() 
   
   return {
      props: { 
         data
      } 
   }

}
