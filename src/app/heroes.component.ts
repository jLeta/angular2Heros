import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
    selector: 'my-heros',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

    heroes: Hero[];

    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private route: Router) {
    }

    ngOnInit() {
        //call the promise, and then tell it what call back funtion it will call
        //when the promise response is ready :)   
        this.heroService.getHeroes().then(heros => this.heroes = heros);
    }

    onHeroSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.route.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            })
    }



}


