import { Component, OnInit, AfterViewInit } from '@angular/core';
import { movies } from 'src/app/shared/models/movie.mock-data';
import { genreType } from 'src/app/shared/models/movie.model';
import 'jarallax';
import { PageEvent } from '@angular/material/paginator';
declare var jarallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  movieBanners = [];
  moviesList = [];
  genres = [];
  panelOpenState: boolean = true;

  // MatPaginator Inputs
  length = movies.length;
  pageSize = 10;
  pageSizeOptions: number[] = [];
  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  
  constructor() {
    this.movieBanners.push(movies[Math.floor(Math.random() * movies.length)]);
    this.movieBanners.push(movies[Math.floor(Math.random() * movies.length)]);
    this.moviesList = movies.slice(0, this.pageSize);
  }

  ngOnInit() {
    this.genres = Object.values(genreType);
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.1
    }) 
  }

  goToMovieDetails(movie) {

  }
}
