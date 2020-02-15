import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DataBindService } from './shared/services/data-bind.service';
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FrootPlayApp';
  value: string = null;

  results: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(
    private router: Router,
    private dataBindService: DataBindService,) {
  }
 
  ngOnInit() {    
    this.queryField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query) =>  {
        if(query === "") {
          this.results = [];
        } else {
          return this.dataBindService.getSearchMovies(query);
        }
      })
    ).subscribe(response => {
      this.results = response;
    });
  }

  goHome() {
    this.router.navigate(['home']);
  }
  
  goToMovieDetails(movie: any) {
    this.queryField.setValue('');
    this.router.navigate(['/movie', movie.id]);
  }
}
