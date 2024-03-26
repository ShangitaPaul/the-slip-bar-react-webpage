// JobList.js

import React from 'react';

const JobList = ({ jobs, handleJobClick }) => {
  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id} onClick={() => handleJobClick(job.id)}>
            {job.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;

