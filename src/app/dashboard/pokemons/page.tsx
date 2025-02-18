import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import {PokemonsGrid} from "@/pokemons";
import { error } from "console";



const PokemonsGet = async(limit = 20 , ofset = 0):Promise<SimplePokemon[]> => {
    
  const data : PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}}&offset=${ofset}`).then(res => res.json())

  console.log(data);
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  return pokemons;
}



export default async function PokemonsPage() {

  


  const pokemons = await PokemonsGet(151);

  return (
    <div>
      <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de Pokemons<small>Estático</small></span>
       {  <PokemonsGrid pokemons={pokemons}/> }
       
      </div>
     
    </div>
  );
}