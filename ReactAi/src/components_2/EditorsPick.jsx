import React from "react";
import { Bookmark } from "lucide-react";

const editorPicks = [
    {
        title: "Stuffed sticky rice ball",
        time: "34 minutes",
        author: "Jennifer King",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        description:
            "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530611/521f9785-1f65-4c7a-95db-2a142ac2be15_bihdm6.jpg",
    },
    {
        title: "Strawberry smoothie",
        time: "40 minutes",
        author: "Matthew Martinez",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        description:
            "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530611/25213f18-9048-4bda-8f7c-d25274894780_yqksew.jpg",
    },
    {
        title: "Latte Art",
        time: "18 minutes",
        author: "Sarah Hill",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        description:
            "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530610/0a7a7e9a-9349-408c-baab-05bdd317349b_g3ziid.jpg",
    },
    {
        title: "Butter fried noodles",
        time: "16 minutes",
        author: "Julia Lopez",
        avatar: "https://randomuser.me/api/portraits/women/75.jpg",
        description:
            "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
        image: "https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530611/28b4538d-043b-4dd3-94b1-f01939e9f1e6_zrn2w8.jpg",
    },
];

export default function EditorsPick() {
    return (
        <section className="py-12 px-4 md:px-12 bg-white">
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
                Editor's pick
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {editorPicks.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white border rounded-xl shadow-sm p-4 flex gap-4"
                    >
                        <img
                            src={`${item.image}?auto=format&fit=crop&w=400&q=80`}
                            alt={item.title}
                            className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.time}</p>
                                </div>
                                <button className="text-pink-500 hover:text-pink-600">
                                    <Bookmark size={20} />
                                </button>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <img
                                    src={item.avatar}
                                    alt={item.author}
                                    className="w-6 h-6 rounded-full"
                                />
                                <p className="text-sm text-gray-700">{item.author}</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
