// JobDetail.js

import React from 'react';

const JobDetail = ({ job }) => {
  return (
    <div>
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
    </div>
  );
};

export default JobDetail;

