import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm border-t-4 border-pink-500">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://img.icons8.com/ios-filled/50/fa314a/chef-hat.png"
                        alt="Chefify Logo"
                        className="w-6 h-6"
                    />
                    <span className="text-xl font-bold text-pink-600">Chefify</span>
                </div>

                {/* Search bar */}
                <div className="flex-1 mx-4 max-w-lg">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="What would you like to cook?"
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm outline-none"
                        />
                        <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                    </div>
                </div>

                {/* Nav links */}
                <nav className="flex items-center gap-6 text-sm text-gray-700">
                    <a href="#" className="hover:text-pink-600">What to cook</a>
                    <a href="#" className="hover:text-pink-600">Recipes</a>
                    <a href="#" className="hover:text-pink-600">Ingredients</a>
                    <a href="#" className="hover:text-pink-600">Occasions</a>
                    <a href="#" className="hover:text-pink-600">About Us</a>
                </nav>

                {/* Auth buttons */}
                <div className="flex items-center gap-2 ml-4">
                    <button className="bg-pink-100 text-pink-600 text-sm px-4 py-1 rounded-full">
                        Login
                    </button>
                    <button className="bg-pink-600 text-white text-sm px-4 py-1 rounded-full">
                        Subscribe
                    </button>
                </div>
            </div>
        </header>
    );
}
