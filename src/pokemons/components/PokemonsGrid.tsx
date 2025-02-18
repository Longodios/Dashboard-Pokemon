import SimplePokemon from "../interfaces/simple-pokemon"
import Image from "next/image";
import PokemonCard from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];

}


export const PokemonsGrid = ({pokemons} : Props) => {
  return (
   <>
      <div className="flex flex-wrap justify-center items-center gap-10">
         {pokemons.map(pokemon => (
             
              
        <PokemonCard key={pokemon.id} pokemons={pokemon} />
            ))}
        </div>
    </>
    
  )
}

export default PokemonsGrid
