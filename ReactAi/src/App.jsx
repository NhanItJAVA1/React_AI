import React from "react";
import SummerRecipes from "./components_2/SummerRecipes";
import RecipesWithVideos from "./components_2/RecipesWithVideos";
import Footer from "./components_2/Footer";
import Navbar from "./components_2/Navbar";
import EditorsPick from "./components_2/EditorsPick";
import Banner from "./components_2/Banner";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Banner />
      <SummerRecipes />
      <RecipesWithVideos />
      <EditorsPick />
      <Footer />
    </div>
  );
}
