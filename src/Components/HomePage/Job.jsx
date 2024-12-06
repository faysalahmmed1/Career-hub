import React from 'react';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-[350px] h-[450px] mx-auto flex flex-col justify-between">
            
            <div className="flex justify-center mb-4">
                <img src={logo} alt="Company Logo" className="  object-cover" />
            </div>

            
            <div className="text-center">
                <h1 className="text-lg font-bold text-gray-800">{job_title}</h1>
                <h2 className="text-sm text-gray-500">{company_name}</h2>
            </div>

            {/* Tags */}
            <div className="flex justify-center space-x-2 mt-4">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {remote_or_onsite}
                </span>
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {job_type}
                </span>
            </div>

            {/* Job Details */}
            <div className="mt-4 flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                    <span className="material-icons text-gray-400 mr-1"></span>
                    {location}
                </div>
                <div className="flex items-center">
                    <span className="material-icons text-gray-400 mr-1"></span>
                    {salary}
                </div>
            </div>

            {/* View Details Button */}
            <div className="mt-6 flex justify-center">
                <button className="bg-blue-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Job;
