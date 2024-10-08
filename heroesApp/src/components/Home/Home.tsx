import { heroesData } from "../../data/heroes";
import { ListHeroes } from "../screens/ui/ListHeroes/ListHeroes";

export const Home = () => {
  return <ListHeroes heroes={heroesData} title="Todos los heroes" />;
};
