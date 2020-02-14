import { Injectable } from '@angular/core';
import { movies } from 'src/app/shared/models/movie.mock-data';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBindService {

  private dataBind = new BehaviorSubject(null);

  constructor() {}

  sendMovie(movie: any) {
    this.dataBind.next(movie);
  }
  
  getMovie(): Observable<any> {
    return this.dataBind.asObservable();
  }

  getMovieByID(movieID: number) {
    return movies.find(m => m.id === movieID);
  }

  getMoviesByGenre(movie: any) {
    return movies.filter(m => {
      let result = false;
      if(movie.id !== m.id) {
        m.genres.forEach(g => {
          if(movie.genres.includes(g)) {
            result = true;
          }
        });
      }
      return result;
    }).slice(0, 6);
  }
}
