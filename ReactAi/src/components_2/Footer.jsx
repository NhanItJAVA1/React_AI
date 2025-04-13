import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="mb-4 text-sm">
                        Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 rounded-l-md w-full text-black  bg-amber-50"
                        />
                        <button className="bg-pink-500 text-white px-4 rounded-r-md">
                            Send
                        </button>
                    </div>
                </div>

                {/* Learn More */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Learn More</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Our Cooks</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Recipes */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Recipes</h3>
                    <ul className="space-y-2 text-sm">
                        <li>What to Cook This Week</li>
                        <li>Pasta</li>
                        <li>Dinner</li>
                        <li>Healthy</li>
                        <li>Vegetarian</li>
                        <li>Vegan</li>
                        <li>Christmas</li>
                    </ul>
                </div>

                {/* Shop */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Shop</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                <div className="flex items-center mb-4 md:mb-0">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                        alt="Cheffy Logo"
                        className="w-6 h-6 mr-2"
                    />
                    <span className="font-semibold text-white">Cheffy</span>
                </div>
                <p>© 2023 Cheffy Company</p>
                <div className="space-x-4">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
