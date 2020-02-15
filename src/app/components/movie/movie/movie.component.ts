import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBindService } from 'src/app/shared/services/data-bind.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  dataBindSubscription: Subscription;
  movie: any;
  similarMovies = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataBindService: DataBindService,
    private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movie = this.dataBindService.getMovieByID(Number(params.get('movieId')));
      this.similarMovies = this.dataBindService.getMoviesByGenre(this.movie);
    });
  }
  
  goToMovieDetails(movie: any) {
    this.router.navigate(['/movie', movie.id]);
  }

  back() {
    this.location.back();
  }

  ngOnDestroy(): void {
  }
}
