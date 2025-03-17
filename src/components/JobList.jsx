import React from "react";
import Job from "./Job";

const JobList = ({ list }) => {
  console.log(list);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {list?.map((job, index) => (
        <Job job={job} key={job?.id} index={index} />
      ))}
    </div>
  );
};

export default JobList;
