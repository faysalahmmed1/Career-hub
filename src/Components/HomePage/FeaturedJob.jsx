import { useEffect, useState } from "react";
import Job from "./Job";


const FeaturedJob = () => {
  const [JobsFea, setJobFea] = useState([]);
  

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobFea(data))
  }, [])
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Featured Jobs:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          JobsFea.map((job) => <Job
            key={job.id}
            job={job}
          />)
        }
      </div>
    </div>
  );
};

export default FeaturedJob;