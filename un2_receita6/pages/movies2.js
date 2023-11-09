export default function Movies2(){
   const data = fetcher(`http://www.omdbapi.com/?apikey=8740ecf&s=Amor`)
   return (
      <div>
         { data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div>  ) }         
      </div>

   )

}

async function fetcher(url) {
   const res = await fetch(url);
   const json = await res.json();
   return json;
}
