import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interface/movie';
import { Lista } from '../interface/lista';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies!:Array<Movie>;

  constructor(private http:HttpClient) { }

  getMovies$():Observable<Array<Movie>>{
    return  this.http.get(environment.url_movies).subscribe(data:Lista => { return this.movies = data.movies:Array<Movie> }) as unknown as Observable<Array<Movie>>;
  }
  getMovie(id:number):Movie{
    let movie:Movie = this.getMovies$().subscribe(data => data.find(e => { e.id == id })) as Movie ;
    return movie
  }
}

