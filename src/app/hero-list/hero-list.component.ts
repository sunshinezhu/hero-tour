import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit{
  heroes:Hero[];
  currentHero:Hero;//当前选中的英雄

  //新增英雄
  hero:Hero;

  constructor(private service:HeroService) { }

  ngOnInit() {
    //初始化数据
    this.hero = new Hero();
    //数据初始化在ngOnInit中做
    this.service.getHeroes().then(
      (heroes) => this.heroes = heroes)
  }

  selectHero(hero:Hero){
    this.currentHero = hero;
  }
  //添加
  addHero(){
    //this.hero.id = this.heroes.length + 1;
    let newHero = new Hero(
      this.heroes.length + 1,
      this.hero.name
    );
    this.heroes.push(newHero);
  }
//删除
  removeHero(hero:Hero){
    let index = this.heroes.indexOf(hero);
    this.heroes.splice(index,1);
    if (hero == this.currentHero){
      this.currentHero = null;
    }
  }
}
