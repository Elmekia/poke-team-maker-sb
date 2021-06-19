import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pokemon } from '../../models/pokemon.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-encontrado.component.html',
  styleUrls: ['./pokemon-encontrado.component.scss']
})
export class PokemonEncontradoComponent implements OnInit {
  @Input()
  pokemon!: Pokemon;
  @Output() pokemonEmitter = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  clearPokemon(): void {
    this.pokemon = new Pokemon(null);
  }

  catchPokemon(): void {
   /* this.dialog.open(DialogComponent, {
      width: '321px',
      height: '487px',
      data: this.pokemon,
    });
    */
   this.pokemonEmitter.emit(this.pokemon);
  }
}
