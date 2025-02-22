// models/Person.ts
export class Person {
  name: string;
  hp: number;
  attack: number;

  constructor(name: string, hp: number, attack: number) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }

  takeDamage(damage: number) {
    this.hp = Math.max(0, this.hp - damage);
  }

  isAlive(): boolean {
    return this.hp > 0;
  }
}
