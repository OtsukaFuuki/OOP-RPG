// components/Hero.tsx
import { Hero } from "../models/Hero";

interface HeroProps {
  hero: Hero;
}

const HeroComponent: React.FC<HeroProps> = ({ hero }) => {
  return (
    <div className="p-4 border rounded-lg bg-blue-200">
      <h2 className="text-xl font-bold">{hero.name}</h2>
      <p>HP: {hero.hp}</p>
      <p>攻撃力: {hero.attack}</p>
      <p>必殺技: {hero.specialAbility}</p>
    </div>
  );
};

export default HeroComponent;
