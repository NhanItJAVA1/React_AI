import React, { useState } from "react";

const DetailReport = () => {
    const fullData = [
        { name: "Elizabeth Lee", company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New" },
        { name: "Carlos Garcia", company: "SmoozShift", value: "$747", date: "24/07/2023", status: "New" },
        { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress" },
        { name: "Ryan Brown", company: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress" },
        { name: "Ryan Young", company: "DataStream Inc.", value: "$769", date: "01/05/2025", status: "Completed" },
        { name: "Hailey Adams", company: "FlowRush", value: "$922", date: "10/05/2023", status: "Completed" },
    ];

    const [page, setPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(fullData.length / itemsPerPage);
    const data = fullData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const getStatusColor = (status) => {
        return status === "New"
            ? "bg-blue-100 text-blue-600"
            : status === "In-progress"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600";
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`w-8 h-8 rounded-full ${i === page ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                    >
                        {i}
                    </button>
                );
            } else if (pages[pages.length - 1] !== '...') {
                pages.push(<span key={`dots-${i}`} className="px-2">...</span>);
            }
        }
        return pages;
    };

    return (
        <div className="bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Detailed report</h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 border px-3 py-1 rounded text-sm">
                        <span className="text-lg">📥</span> Import
                    </button>
                    <button className="flex items-center gap-1 border px-3 py-1 rounded text-sm">
                        <span className="text-lg">📤</span> Export
                    </button>
                </div>
            </div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="border-b">
                        <th></th>
                        <th className="py-2">CUSTOMER NAME</th>
                        <th>COMPANY</th>
                        <th>ORDER VALUE</th>
                        <th>ORDER DATE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                            <td><input type="checkbox" /></td>
                            <td className="py-2 font-medium">{item.name}</td>
                            <td>{item.company}</td>
                            <td>{item.value}</td>
                            <td>{item.date}</td>
                            <td>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>{item.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span>{fullData.length} results</span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-2 py-1 rounded disabled:opacity-50"
                    >
                        &lt;
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-2 py-1 rounded disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailReport;