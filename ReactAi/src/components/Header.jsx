// src/components/Header.jsx
import React from "react";
import bellIcon from "../assets/Bell.svg";
import whatIcon from "../assets/What.svg";
import avatarImage from "../assets/react.svg";
const Header = () => (
    <div className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-semibold text-pink-600">Dashboard</h1>
        <div className="flex items-center gap-4">
            <input
                type="text"
                placeholder="Search..."
                className="w-80 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div className="flex items-center gap-4">
                {/* Bell Icon (using the image you provided) */}
                <img
                    src={bellIcon}// Cập nhật đường dẫn đúng đến ảnh bell
                    alt="Bell Icon"
                    className="w-6 h-6 cursor-pointer hover:text-pink-600"
                />

                {/* Question Mark Icon (using the image you provided) */}
                <img
                    src={whatIcon} // Cập nhật đường dẫn đúng đến ảnh what
                    alt="Question Mark Icon"
                    className="w-6 h-6 cursor-pointer hover:text-pink-600"
                />
                <img
                    src={avatarImage} // Thay đổi đường dẫn nếu cần
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border-2 border-pink-600" // Tạo avatar tròn
                />
            </div>
        </div>
    </div>
);

export default Header;
