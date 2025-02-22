// models/Hero.ts

import { Enemy } from "./Enemy";
import { Person } from "./Person";

export class Hero extends Person {
  specialAbility: string;

  constructor(
    name: string,
    hp: number,
    attack: number,
    specialAbility: string
  ) {
    super(name, hp, attack);
    this.specialAbility = specialAbility;
  }

  attackEnemy(enemy: Enemy) {
    console.log(
      `${this.name} の攻撃！ ${enemy.name} に ${this.attack} のダメージ！`
    );
    enemy.takeDamage(this.attack);
  }
}
