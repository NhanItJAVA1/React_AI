import React from "react";
import { Bookmark } from "lucide-react"; // cần cài lucide-react nếu chưa có

export default function RecipeCard({ title, subtitle, time, image }) {
    return (
        <div className="relative bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src={image}
                alt={title}
                className="rounded-full w-20 h-20 mx-auto object-cover mb-4"
            />
            <div className="text-center">
                <h3 className="font-semibold text-sm">{title}</h3>
                <p className="text-xs text-gray-500">{subtitle}</p>
                <p className="text-pink-500 text-xs mt-1 inline-block bg-pink-100 px-2 py-0.5 rounded-full">
                    {time}
                </p>
            </div>
            <div className="absolute top-3 right-3 text-pink-500">
                <Bookmark size={18} />
            </div>
        </div>
    );
}
