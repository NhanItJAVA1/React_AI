import React from "react";
import RecipeCard from "./RecipeCard";

const recipes = [
    {
        title: "Italian-style tomato",
        subtitle: "salad",
        time: "15 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530612/40d41b91-e4a8-4a01-9bf4-c79681e621fe_qss2zw.jpg",
    },
    {
        title: "Grilled Veggie Tacos",
        subtitle: "Mexican",
        time: "25 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530612/58e440a2-6717-4f10-b5c2-116eeea43298_easgb1.jpg",
    },
    {
        title: "Zucchini Noodles",
        subtitle: "Healthy",
        time: "20 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530612/f8b03dd3-5e4f-43c6-ae52-9de7b0d656e7_dxeea7.jpg",
    },
    {
        title: "Tomato Soup",
        subtitle: "Classic",
        time: "30 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530612/117e6d80-389b-49b6-9313-dd9329c475c4_godnfc.jpg",
    },
];

export default function SummerRecipes() {
    return (
        <section className="py-12 px-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
                This Summer Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {recipes.map((item, index) => (
                    <RecipeCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
}