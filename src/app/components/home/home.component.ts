import { Component, EventEmitter, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon!: Pokemon;
  showCard: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  findPokemon(pokemon: string){
    this.pokemonService.getPokemon(pokemon)
      .pipe()
        .subscribe(poke => {
          this.pokemon = new Pokemon(poke);
          this.showCard = true;
        }, err => this.showCard = false);
  }
}
