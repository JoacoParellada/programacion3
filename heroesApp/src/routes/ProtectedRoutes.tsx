import { Header } from "../components/screens/ui/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { DcHeroes } from "../components/screens/DcHeroes/DcHeroes";
import { MarvelHeroes } from "../components/screens/MarvelHeroes/MarvelHeroes";
import { HeroPage } from "../components/screens/HeroPage/HeroPage";
import { Search } from "../components/screens/Search/Search";

export const ProtectedRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dcHeroes" element={<DcHeroes />} />
        <Route path="/marvelHeroes" element={<MarvelHeroes />} />
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </>
  );
};
