import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService}  from './hero.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Tour of Heroes';

  heroes: Hero[];

  selectedHero:Hero;

  constructor(private heroService:HeroService){
  }

  ngOnInit(){
    //call the promise, and then tell it what call back funtion it will call
    //then the promise response is ready :)   
    this.heroService.getHeroes().then(heros => this.heroes = heros);
  }

  onHeroSelect(hero:Hero) {
    this.selectedHero = hero;
  }

}


