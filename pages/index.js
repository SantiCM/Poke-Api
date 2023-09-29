import Link from "next/link"

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split("/").filter(x => x).pop()
  return (
    <li><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></li>  
  )
}

export default function Home({pokemones}) {
  console.log(pokemones)
  return (
    <div>
      <p>Pokemones</p>  
      <ul>
        <li>
          {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>)}
        </li>
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const data = await response.json()

  return {
    props: {pokemones : data.results}
  }
}

/*Static Site Generation, osea generar html archivos*/