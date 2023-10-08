import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.loadPokemon();
   }
   async loadPokemon() {
     const request = await this.httpClient.get<any>
     ('https://pokeapi.co/api/v2/pokemon/?limit=151').toPromise();

     this.pokemons = request.results;
  
    }
}
