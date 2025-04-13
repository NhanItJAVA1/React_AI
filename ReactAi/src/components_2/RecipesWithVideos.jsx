import React from "react";
import RecipeCard from "./RecipeCard";

const recipes = [
    {
        title: "Green Smoothie",
        subtitle: "healthy drink",
        time: "10 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530612/0b04a855-2b2f-417c-91e7-6890743ef45f_qzs96x.jpg",
    },
    {
        title: "Chicken Skewers",
        subtitle: "grilled",
        time: "20 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530612/2a2e3921-9910-498d-827c-24152b390806_v790bp.jpg",
    },
    {
        title: "Honey Salmon",
        subtitle: "sweet & savory",
        time: "25 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530612/a751cec1-2006-46b3-b3d6-d17b31848ae2_dljrj7.jpg",
    },
    {
        title: "Pasta Delight",
        subtitle: "creamy pasta",
        time: "30 minutes",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530611/7cb3299e-2117-4413-9b01-e1ad651b92e8_hpb9ob.jpg",
    },
];

export default function RecipesWithVideos() {
    return (
        <section className="py-12 px-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
                Recipes With Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {recipes.map((item, index) => (
                    <RecipeCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
}
