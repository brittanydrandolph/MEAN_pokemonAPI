import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
      this.getPokemon();
      this.pokemonAbilities();
      this. overgrow();
      this.chlorophyll();
  }
  getPokemon(){
      let poke = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      poke.subscribe((data:any) => {
        console.log("Horray, got this Pokemon!", data)
      })
  }
  pokemonAbilities(){
    let poke = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    poke.subscribe((data:any) => {
      console.log(`${data.name}'s abilities are: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name} and ${data.abilities[2].ability.name} `)
    })
  }
  overgrow(){
    let poke = this._http.get('https://pokeapi.co/api/v2/ability/65/');
    poke.subscribe((data:any) => {
      console.log(`${data.pokemon.length} can use the ${data.name} ability.`)
    })
  }
  chlorophyll(){
    let poke = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    poke.subscribe((data:any) => {
      console.log(`${data.pokemon.length} can use the ${data.name} ability.`)
    })
  }
}
