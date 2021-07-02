import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/interface/movie';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {

  movie!:Movie;

  constructor(private movieService:MoviesService, private actRoute:ActivatedRoute)
  { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get("id");
    this.movieService.getMovie$(id).subscribe(m =>{
      this.movie = m;
    });
  }

}
