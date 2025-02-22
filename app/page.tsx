// pages/index.tsx
"use client"; // Next.js 14以降で useState を使うために追加
import { useState } from "react";
import HeroComponent from "./Components/Hero";
import EnemyComponent from "./Components/Enemy";
import { Hero } from "./models/Hero";
import { Enemy } from "./models/Enemy";

export default function Home() {
  const [hero, setHero] = useState(new Hero("勇者", 100, 20, "火の玉"));
  const [enemy, setEnemy] = useState(new Enemy("スライム", 50, 10));

  const handleHeroAttack = () => {
    hero.attackEnemy(enemy);
    setEnemy(new Enemy(enemy.name, enemy.hp, enemy.attack)); // 状態更新
  };

  const handleEnemyAttack = () => {
    enemy.attackHero(hero);
    setHero(new Hero(hero.name, hero.hp, hero.attack, hero.specialAbility)); // 状態更新
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">RPGバトル</h1>
      <div className="flex justify-center gap-6">
        <HeroComponent hero={hero} />
        <EnemyComponent enemy={enemy} />
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handleHeroAttack}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {hero.name} の攻撃
        </button>
        <button
          onClick={handleEnemyAttack}
          className="p-2 bg-red-500 text-white rounded"
        >
          {enemy.name} の攻撃
        </button>
      </div>
    </div>
  );
}
