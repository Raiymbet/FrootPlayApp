import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    MovieRoutingModule,
    CommonModule
  ]
})
export class MovieModule { }
