// models/Enemy.ts
import { Person } from "./Person";
import { Hero } from "./Hero";

export class Enemy extends Person {
  constructor(name: string, hp: number, attack: number) {
    super(name, hp, attack);
  }

  attackHero(hero: Hero) {
    console.log(
      `${this.name} の攻撃！ ${hero.name} に ${this.attack} のダメージ！`
    );
    hero.takeDamage(this.attack);
  }
}
