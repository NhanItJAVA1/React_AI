import React from "react";

export default function Banner() {
    return (
        <section className="relative h-[500px]">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dznqu9aoi/image/upload/v1744530566/8f3f3304-9f5c-45de-8978-291888e65eb2_yfttqw.jpg')",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-start h-full px-6">
                <div className="relative bg-white p-6 pt-10 rounded-lg shadow-md border-2 border-dashed border-purple-300 max-w-md w-full text-left">
                    {/* Badge - Recipe of the day */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-white text-xs font-medium px-4 py-1 rounded-md shadow">
                            Recipe of the day
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-pink-600 mb-2 text-center">
                        Salad Caprese
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
                    </p>

                    {/* Chef info */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Chef"
                            className="w-8 h-8 rounded-full"
                        />
                        <span>Salad Caprese</span>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-sm">
                            View now →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
