
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {Http} from '@angular/http'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(private http:Http) {}

    getHeroes(): Promise<Hero[]> {

         return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

    getHero(id: number): Promise<Hero> {
        return Promise.resolve(this.getHeroes().then(heroes => heroes.find(hero => hero.id === id)));
    }


    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}