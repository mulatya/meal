import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { mealListComponent } from './meal-list.component';
import { EditmealComponent } from './edit-meal.component';
import { NewmealComponent } from './new-meal.component';
import { CompletenessPipe } from './completeness.pipe';
import { mealComponent } from './meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    mealListComponent,
    EditmealComponent,
    NewmealComponent,
    CompletenessPipe,
    mealComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
