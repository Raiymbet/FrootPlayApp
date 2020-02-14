import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    MovieRoutingModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
  ]
})
export class MovieModule { }
