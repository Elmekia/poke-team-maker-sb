import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit, OnChanges {
  @Input()  pokemonCatched: Pokemon = new Pokemon(null);
  //myPokemonTeam: Pokemon[] = [];
  displayedColumns: string[] = ['id', 'name', 'weight'];
  data: any[] = [];
  myPokemonTeam = new MatTableDataSource<any>(this.data);


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.pokemonCatched.currentValue){
      this.data.push(changes.pokemonCatched.currentValue)
      this.myPokemonTeam = new MatTableDataSource<any>(this.data);
    }
  }

  ngOnInit(): void {
  }

}
