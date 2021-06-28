import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './components/./header/header.component';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilterComponent } from './components/filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PokemonEncontradoComponent } from './components/pokemon-encontrado/pokemon-encontrado.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import { MailStepperComponent } from './components/mail-stepper/mail-stepper.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilterComponent,
    PokemonEncontradoComponent,
    DialogComponent,
    PokeTableComponent,
    MailStepperComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
