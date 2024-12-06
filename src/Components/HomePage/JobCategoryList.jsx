import React from 'react';

const JobCategoryList = () => {

    const categories = [
        { title: "Account & Finance", jobs: "300 Jobs Available", icon: "\uD83D\uDCBC" },
        { title: "Creative Design", jobs: "100+ Jobs Available", icon: "\uD83C\uDFA8" },
        { title: "Marketing & Sales", jobs: "150 Jobs Available", icon: "\uD83D\uDCCA" },
        { title: "Engineering Job", jobs: "224 Jobs Available", icon: "\u2699\uFE0F" },
    ];
    return (
        <div className="px-6 md:px-12 lg:px-24 py-12 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Job Category List</h2>
            <p className="text-gray-600 text-center mb-12">
                Explore thousands of job opportunities with all the information you need. It's your future.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                        <p className="text-gray-600">{category.jobs}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCategoryList;