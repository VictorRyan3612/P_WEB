export default function Movies({data}){
   return (
      <div>
         <center>
            {data.Search.map((m) => 
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
   const res = await fetch(`http://www.omdbapi.com/?apikey=8740ecf&s=bagdad`)
   const data = await res.json() 
   
   return {
      props: { 
         data
      } 
   }

}
