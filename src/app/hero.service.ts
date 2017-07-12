import { Injectable } from '@angular/core';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
  heroes:Hero[] = [
    new Hero(1,'诸葛亮'),
    new Hero(2,'安琪拉'),
    new Hero(3,'虞姬'),
    new Hero(4,'貂蝉'),
    new Hero(5,'王昭君'),
    new Hero(6,'大乔')
  ];

  constructor() {

  }

  getHeroes():Promise<Hero[]>{
    return Promise.resolve(this.heroes);
  }
}
