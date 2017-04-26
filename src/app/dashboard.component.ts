import { Component } from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  faavoriteHeroes: Hero[];


  constructor(private heroService:HeroService){    
  }

  ngOnInit(): void{
    this.heroService.getHeroes().then(response => this.faavoriteHeroes = response.slice(1, 5));    
  }

 }