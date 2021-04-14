import React, { useState, useEffect } from "react";
import { allJobs } from "../../DummyData/dummyData";
import { NeuButton } from "../../StyledComponents/styledComponents";

import "./Jobs.css"

const Jobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => setJobs(allJobs),[])


    return (
        <div className="jobs-root">
            <div className="jobs-content">
                <p>Relevant jobs</p>
                <div className="jobs-filter">
                    <div className="filter-div">

                    </div>
                </div>

                <div className="jobs-list">
                    <div className="jobs-list-div">
                        { jobs.length > 0 && jobs.slice(0,6).map(item => {
                            return (
                                <div key={item.id} className="job-card">
                                    <div className="card-title-company">
                                        <p>{item.title}</p>
                                        <p className="job-card-company">{item.company}</p>
                                    </div>
                                    <div className="job-card-skills-block">
                                        <p className="job-card-skills-title">Skills:</p>
                                        <p className="job-card-skills-content">Java, AWS, Spring boot</p>
                                    </div>
                                    
                                    <NeuButton dark={true}>View details</NeuButton>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs;