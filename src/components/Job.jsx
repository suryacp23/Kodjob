import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ job, index }) => {
  if (!job) return null;
  const gradients = [
    "bg-gradient-to-r from-blue-500 to-purple-500",
    "bg-gradient-to-r from-red-500 to-yellow-500",
    "bg-gradient-to-r from-green-500 to-teal-500",
    "bg-gradient-to-r from-yellow-500 to-orange-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
  ];
  const gradientClass = gradients[index % gradients.length];
  function formatISODate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-full max-w-lg mx-auto p-4 hover:shadow-lg transition-shadow duration-300 relative flex flex-col justify-evenly">
      <div
        className={`top-0 left-0 rounded-t-2xl h-2 absolute w-full ${gradientClass}`}
      ></div>
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <div className="flex items-center gap-2 justify-between w-full">
          <div className="flex items-center gap-2 ">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {job.company.name}
              </h2>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span>{job.locations[0]?.name}</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <span>{formatISODate(job.publication_date)}</span>
          </div>
        </div>
      </div>

      {/* Job Title */}
      <h3 className="text-md font-semibold text-gray-900 mb-2">{job.name}</h3>

      {/* Job Description */}
      {/* <div
        className="text-sm text-gray-700 mb-4"
        dangerouslySetInnerHTML={{ __html: job.contents }}
      ></div> */}

      {/* Job Levels */}
      {job.levels && job.levels.length > 0 && (
        <div className="text-sm text-gray-600 mb-2">
          <b>Level:</b> {job.levels.map((level) => level.name).join(", ")}
        </div>
      )}

      {/* Job Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className="text-sm text-gray-600 mb-2">
          <b>Tags:</b> {job.tags.join(", ")}
        </div>
      )}

      {/* Apply Button */}
      <div className="flex justify-end items-end">
        <a
          href={job.refs.landing_page}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          ➝ Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobCard;
