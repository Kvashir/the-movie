import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Lista } from '../shared/interface/lista';
import { Movie } from '../shared/interface/movie';
import { MoviesService } from '../shared/services/movies.service';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.scss']
})
export class MyHomeComponentComponent implements OnInit {
  
  movies!:Array<Movie>;
  datos!:any;
  movie!:any;

  constructor(private movieService:MoviesService) {

    movieService.getMovies$().subscribe(data => this.movies = data);

  }


  ngOnInit(): void {
  }

}
