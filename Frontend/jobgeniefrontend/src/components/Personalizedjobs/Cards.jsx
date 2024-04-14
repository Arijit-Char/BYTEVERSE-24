import React, { useEffect } from "react";
import "./Pjobs.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetJobListing } from "../../actions/user";

export default function Cards({ job }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="card"
      onClick={() => {
        dispatch(GetJobListing(job));
        navigate("/PersonalizedJobListings");
      }}
    >
      <h2>{job}</h2>
    </div>
  );
}
