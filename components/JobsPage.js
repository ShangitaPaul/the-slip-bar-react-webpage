import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobsPage.css'; // Import CSS file for styling

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setJobs(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (locationFilter) {
      const filtered = jobs.filter(job => job.location === locationFilter);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [locationFilter, jobs]);

  const handleJobClick = jobId => {
    if (expandedJob === jobId) {
      setExpandedJob(null); // Collapse if already expanded
    } else {
      setExpandedJob(jobId); // Expand otherwise
    }
  };

  return (
    <div className="jobs-page">
      <h1 className="page-title">Come Join Us!</h1>
      <div className="filter-section">
        <label htmlFor="locationFilter">Filter by Location:</label>
        <select id="locationFilter" value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Lomita">Lomita</option>
          <option value="Redondo Beach">Redondo Beach</option>
        </select>
      </div>
      <div className="jobs-container">
        {filteredJobs.map(job => (
          <div key={job.id} className={`job-card ${expandedJob === job.id ? 'expanded' : ''}`}>
            <div className="job-header" onClick={() => handleJobClick(job.id)}>
              <div className="job-header-content">
                <h2>{job.title.charAt(0).toUpperCase() + job.title.slice(1)}</h2>
                <p>Location: {job.location}</p>
                <p>Job ID: {job.id}</p>
                {expandedJob === job.id ? (
                  <div className="job-details">
                    <div className="instructions">
                      <p>Please email your resume to <a href={`mailto:info@theslipbar.com?subject=Applying for job ID ${job.id}`}>info@theslipbar.com</a> with the job ID {job.id} in the Subject field</p>
                    </div>
                  </div>
                ) : (
                  <button className="apply-button">Apply Now</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
