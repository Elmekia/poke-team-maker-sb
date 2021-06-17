import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-encontrado.component.html',
  styleUrls: ['./pokemon-encontrado.component.scss']
})
export class PokemonEncontradoComponent implements OnInit {

  @Input()
  pokemon !: Pokemon;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  clearPokemon(): void {
    this.pokemon =  new Pokemon(null);
  }

  catchPokemon(): void {
    alert("atrapaste un: " + this.pokemon.name);
  }

}
