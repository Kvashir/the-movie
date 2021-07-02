import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from 'rxjs';
import { find, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../interface/movie';
import { Lista } from '../interface/lista';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) { }

  getMovies$():Observable<Array<Movie>>{
    return  this.http.get<Array<Movie>>(environment.url_movies)
  }

  getMovie$(id:string | null):Observable<Movie>{
    if(!id){
      throw console.error("id null");
      ;

    }
    return this.http.get<Movie>(environment.url_movies.concat(id));
  }
}
