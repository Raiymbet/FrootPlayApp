import { Component, OnInit, AfterViewInit } from '@angular/core';
import { movies } from 'src/app/shared/models/movie.mock-data';
import { genreType } from 'src/app/shared/models/movie.model';
import 'jarallax';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
declare var jarallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  movieBanners = [];
  moviesList = [];
  moviesFiltered = [];
  genres = [];
  panelOpenState: boolean = true;

  // MatPaginator Inputs
  length = movies.length;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [];
  // MatPaginator Output
  pageEvent: PageEvent;
  
  constructor(private router: Router) {
    this.movieBanners.push(movies[Math.floor(Math.random() * movies.length)]);
    this.movieBanners.push(movies[Math.floor(Math.random() * movies.length)]);
  }

  ngOnInit() {
    Object.values(genreType).forEach(genre => {
      this.genres.push({ 
        genreType: genre, 
        checked: false 
      });
    });
    this.pageMovie(0, this.pageSize);
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.1
    }) 
  }

  goToMovieDetails(movie) {
    this.router.navigate(['/movie', movie.id]);
  }

  paginateEvent(event: PageEvent) {
    this.pageEvent = event;
    this.pageMovie(event.pageIndex, event.pageSize);
  }

  pageMovie(pageIndex: number, pageSize: number) {
    let startIndex = pageIndex * pageSize;
    let endIndex = (pageIndex + 1) * pageSize;
    if(this.moviesFiltered.length > 0) {
      this.moviesList = this.moviesFiltered.slice(startIndex, endIndex);
    } else {
      this.moviesList = movies.slice(startIndex, endIndex);
    }
  }

  movieFilter(event, genre) {
    genre.checked = event.checked;
    let activeGenres = this.genres.filter(g => g.checked).map(g => {
      return g.genreType;
    });

    this.moviesFiltered = movies.filter(movie => {
      let result = false;
      activeGenres.forEach(g => {
        if(movie.genres.includes(g)) {
          result = true;
        }
      });
      return result;
    });
    this.pageIndex = 0;
    this.length = this.moviesFiltered.length > 0 ? this.moviesFiltered.length : movies.length;
  }
}
