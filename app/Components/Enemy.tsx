// components/Enemy.tsx

import { Enemy } from "../models/Enemy";

interface EnemyProps {
  enemy: Enemy;
}

const EnemyComponent: React.FC<EnemyProps> = ({ enemy }) => {
  return (
    <div className="p-4 border rounded-lg bg-red-200">
      <h2 className="text-xl font-bold">{enemy.name}</h2>
      <p>HP: {enemy.hp}</p>
      <p>攻撃力: {enemy.attack}</p>
    </div>
  );
};

export default EnemyComponent;
