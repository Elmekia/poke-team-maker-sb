import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEncontradoComponent } from './pokemon-encontrado.component';

describe('PokemonEncontradoComponent', () => {
  let component: PokemonEncontradoComponent;
  let fixture: ComponentFixture<PokemonEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
