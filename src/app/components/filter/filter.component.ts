import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  @Output() pokemonEmitter = new EventEmitter();

  inputValue: string;

  constructor() {
    this.inputValue = '';
   }

  ngOnInit(): void {
  }

  find(){
    this.pokemonEmitter.emit(this.inputValue);
  }
}

