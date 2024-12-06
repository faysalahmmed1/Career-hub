

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 bg-gray-50">
            {/* Text Content */}
            <div className="text-center lg:text-left max-w-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    One Step Closer To Your <span className="text-purple-500">Dream Job</span>
                </h1>
                <p className="text-gray-600 mb-6">
                    Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none">
                    Get Started
                </button>
            </div>

            {/* Image Section */}
            <div className="mb-8 lg:mb-0">
                <img
                    src="/path-to-your-image.jpg" // Replace with your image path
                    alt="Professional"
                    className="rounded-lg shadow-lg w-full max-w-sm mx-auto lg:mx-0"
                />
            </div>
        </div>
    );
};

export default HeroSection;