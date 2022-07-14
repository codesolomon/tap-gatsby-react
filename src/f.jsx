import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

export const f = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [Value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json;
    setLoading(newJobs);
    setJobs(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <article>
        <h1>Loading....</h1>
      </article>
    );
  }

  return <div>Jobs</div>;
};

const Jobs = ({ company, dates, title, duties, jobs }) => {
  return (
    <section className="section loading">
      <div className="title">
        <h1>Experince</h1>
        <div className="underline"></div>
      </div>

      <div className="job-info">
        {/* Btn container */}

        <div className="btn-container">
          {jobs.map((job, index) => {
            <button key={index} onClick={() => setValue(index)}>
              click me
            </button>;
          })}
        </div>

        {/*job-info*/}

        <h1>{title}</h1>
        <h4>{company}</h4>
        <p className="dates">{dates}</p>
        <article className="job-info">
          <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
          {duties.map((duty, index) => {
            return (
              <div key={index}>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};
